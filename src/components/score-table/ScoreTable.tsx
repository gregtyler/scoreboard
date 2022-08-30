import { TableHTMLAttributes } from "react";

import { useTotalScores } from "../../data/db";
import { Round, ScoreMode, SessionWithRelations } from "../../data/types";
import Avatar from "../avatar/Avatar";
import IconButton from "../button/IconButton";
import Table from "../table/Table";
import ScoreTableCell from "./ScoreTableCell";

interface Props extends TableHTMLAttributes<HTMLTableElement> {
  session: SessionWithRelations;
  editable?: boolean;
  onRemoveRound?: (index: number) => void;
}

const ScoreTable = ({
  session,
  editable = false,
  onRemoveRound = () => {},
  ...props
}: Props) => {
  const totalScores = useTotalScores(session._id);

  const { scoreMode } = session.game;

  let winners: string[] = [];
  if (scoreMode === ScoreMode.Highest) {
    let highScore = 0;
    Object.entries(totalScores).forEach(([playerId, score]) => {
      if (score > highScore) {
        winners = [playerId];
        highScore = score;
      } else if (score === highScore) {
        winners.push(playerId);
      }
    });
  } else if (scoreMode === ScoreMode.Lowest) {
    let lowScore = Infinity;
    Object.entries(totalScores).forEach(([playerId, score]) => {
      if (score < lowScore) {
        winners = [playerId];
        lowScore = score;
      } else if (score === lowScore) {
        winners.push(playerId);
      }
    });
  } else if (scoreMode === ScoreMode.Custom) {
    if (session.customWinner) winners.push(session.customWinner);
  }

  return (
    <Table {...props}>
      <thead>
        <tr>
          <th></th>
          {session.players.map((player) => (
            <th key={player._id}>
              {winners.includes(player._id) && "👑"} {player.name}
            </th>
          ))}
        </tr>
        {scoreMode &&
          [ScoreMode.Highest, ScoreMode.Lowest].includes(scoreMode) && (
            <tr>
              <th scope="row">Total</th>
              {session.players.map((player) => (
                <th key={player._id}>
                  <strong>{totalScores[player._id]}</strong>
                </th>
              ))}
            </tr>
          )}
      </thead>
      <tbody>
        {session.rounds.map((round, index) => (
          <tr key={index}>
            <th>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  fontSize: "var(--md-sys-typescale-caption-size)",
                }}
              >
                {round.colour && <Avatar colour={round.colour}></Avatar>}
                {round.label ?? ""}
                {editable && (
                  <IconButton
                    icon="delete"
                    onClick={() =>
                      confirm(
                        `Are you sure you want to remove ${round.label}?`
                      ) && onRemoveRound(index)
                    }
                  />
                )}
              </div>
            </th>
            {session.players.map((player) => (
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
            {session.players.map((player) => (
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
