import { TableHTMLAttributes } from "react";

import { useTotalScores } from "../../data/db";
import { Player, Round, ScoreMode } from "../../data/types";
import Avatar from "../avatar/Avatar";
import IconButton from "../button/IconButton";
import Table from "../table/Table";
import ScoreTableCell from "./ScoreTableCell";

interface Props extends TableHTMLAttributes<HTMLTableElement> {
  rounds: Round[];
  players: Player[];
  editable?: boolean;
  scoreMode?: ScoreMode;
  onRemoveRound: (index: number) => void;
}

const ScoreTable = ({
  rounds,
  players,
  editable = false,
  scoreMode,
  onRemoveRound,
  ...props
}: Props) => {
  const totalScores = useTotalScores(rounds[0].sessionId);

  let winner: string | null = null;
  if (scoreMode === ScoreMode.Highest) {
    let highScore = 0;
    Object.entries(totalScores).forEach(([playerId, score]) => {
      if (score >= highScore) {
        winner = playerId;
        highScore = score;
      }
    });
  } else if (scoreMode === ScoreMode.Lowest) {
    let lowScore = Infinity;
    Object.entries(totalScores).forEach(([playerId, score]) => {
      if (score <= lowScore) {
        winner = playerId;
        lowScore = score;
      }
    });
  }

  return (
    <Table {...props}>
      <thead>
        <tr>
          <th></th>
          {players.map((player) => (
            <th key={player._id}>
              {winner === player._id && "👑"} {player.name}
            </th>
          ))}
        </tr>
      </thead>
      <tbody>
        {rounds.map((round, index) => (
          <tr key={index}>
            <th>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  // fontSize: "var(--md-sys-typescale-caption-size)",
                }}
              >
                {round.colour && <Avatar colour={round.colour}></Avatar>}
                {round.label ?? ""}
                {editable && (
                  <IconButton
                    icon="delete"
                    onClick={() => onRemoveRound(index)}
                  />
                )}
              </div>
            </th>
            {players.map((player) => (
              <ScoreTableCell
                key={player._id}
                round={round}
                playerId={player._id}
                editable={editable}
              />
            ))}
          </tr>
        ))}
      </tbody>
      {scoreMode && [ScoreMode.Highest, ScoreMode.Lowest].includes(scoreMode) && (
        <tfoot>
          <tr>
            <th>Total</th>
            {players.map((player) => (
              <td key={player._id}>
                <strong>{totalScores[player._id]}</strong>
              </td>
            ))}
          </tr>
        </tfoot>
      )}
    </Table>
  );
};

export default ScoreTable;
