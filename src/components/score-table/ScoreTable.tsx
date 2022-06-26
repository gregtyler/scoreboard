import { TableHTMLAttributes } from "react";

import { Player, Round } from "../../data/types";
import IconButton from "../button/IconButton";
import Table from "../table/Table";
import ScoreTableCell from "./ScoreTableCell";

interface Props extends TableHTMLAttributes<HTMLTableElement> {
  rounds: Round[];
  players: Player[];
  editable?: boolean;
  onRemoveRound: (index: number) => void;
}

const ScoreTable = ({
  rounds,
  players,
  editable,
  onRemoveRound,
  ...props
}: Props) => (
  <Table {...props}>
    <thead>
      <tr>
        <th></th>
        {players.map((player) => (
          <th key={player._id}>{player.name}</th>
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
                fontSize: "var(--md-sys-typescale-caption-size)",
              }}
            >
              {round.label ?? ""}
              <IconButton icon="delete" onClick={() => onRemoveRound(index)} />
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
  </Table>
);

export default ScoreTable;
