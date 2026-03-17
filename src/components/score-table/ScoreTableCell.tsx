import { useLiveQuery } from "dexie-react-hooks";
import { ChangeEvent } from "react";

import { db } from "../../data/db";
import { Round } from "../../data/types";
import TableCellInput from "../table/TableCellInput";

interface Props {
  round: Round;
  playerId: string;
  editable?: boolean;
}

const ScoreTableCell = ({ round, playerId, editable }: Props) => {
  const score = useLiveQuery(() =>
    db.scores.get({
      sessionId: round.sessionId,
      roundIndex: round.index,
      playerId: playerId,
    }),
  );

  const handleScoreChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.value) {
      db.scores.put({
        sessionId: round.sessionId,
        roundIndex: round.index,
        playerId: playerId,
        value: parseFloat(e.target.value),
      });
    } else {
      db.scores.delete([round.sessionId, round.index, playerId]);
    }
  };

  return editable ? (
    <TableCellInput
      type="text"
      inputMode="numeric"
      value={score?.value}
      onChange={handleScoreChange}
      pattern="[0-9]*"
    />
  ) : (
    <td>{score?.value ?? ""}</td>
  );
};

export default ScoreTableCell;
