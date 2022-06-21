import { TableHTMLAttributes } from "react";
import { Player, Round } from "../../data/types";
import Table from "./Table";
import TableCellInput from "./TableCellInput";

interface Props extends TableHTMLAttributes<HTMLTableElement> {
  rounds: Round[];
  players: Player[];
  editable?: boolean;
}

const ScoreTable = ({ rounds, players, editable, ...props }: Props) => (
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
          <th>{round.label ?? ""}</th>
          {players.map((_player, playerIndex) => {
            const score = round.scores.find((x) => x.player === playerIndex);

            return editable ? (
              <TableCellInput value={score?.value ?? ""} />
            ) : (
              <td key={playerIndex}>{score?.value ?? ""}</td>
            );
          })}
        </tr>
      ))}
    </tbody>
  </Table>
);

export default ScoreTable;
