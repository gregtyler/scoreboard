import { useLiveQuery } from "dexie-react-hooks";
import { ChangeEvent, useEffect, useState } from "react";

import { db } from "../../data/db";
import { Round } from "../../data/types";
import TableCellInput from "../table/TableCellInput";

interface Props {
  round: Round;
  playerId: string;
  editable?: boolean;
}

const ScoreTableCell = ({ round, playerId, editable }: Props) => {
  const [draft, setDraft] = useState<string | null>(null);

  const score = useLiveQuery(() =>
    db.scores.get({
      sessionId: round.sessionId,
      roundIndex: round.index,
      playerId: playerId,
    }),
  );

  useEffect(() => {
    setDraft(null);
  }, [score?.value]);

  const handleScoreChange = (e: ChangeEvent<HTMLInputElement>) => {
    setDraft(e.target.value);

    if (e.target.value && !isNaN(parseFloat(e.target.value))) {
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
      value={draft ?? score?.value ?? ""}
      onChange={handleScoreChange}
      pattern="[0-9]*"
    />
  ) : (
    <td>{score?.value ?? ""}</td>
  );
};

export default ScoreTableCell;
