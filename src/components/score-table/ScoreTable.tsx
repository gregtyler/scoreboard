import { TableHTMLAttributes, useState } from "react";

import { db, useTotalScores } from "../../data/db";
import { ScoreMode, SessionWithRelations } from "../../data/types";
import Avatar from "../avatar/Avatar";
import Table from "../table/Table";
import ScoreTableCell from "./ScoreTableCell";
import EditRoundModal from "../modal/EditRoundModal";

interface Props extends TableHTMLAttributes<HTMLTableElement> {
  session: SessionWithRelations;
  editable?: boolean;
}

const ScoreTable = ({ session, editable = false, ...props }: Props) => {
  const totalScores = useTotalScores(session._id);

  const [editRoundActive, setEditRoundActive] = useState(-1);

  const { scoreMode } = session;

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

  const setRound = (index: number, label: string, colour: string) => {
    const round = session.rounds.find((r) => r.index === index);
    if (!round) {
      throw new Error("Round not found");
    }

    db.rounds.put(
      {
        ...round,
        label,
        colour,
      },
      [session._id, index],
    );
  };

  const removeRound = async (index: number) => {
    const round = session.rounds.find((r) => r.index === index);
    if (!round) {
      throw new Error("Round not found");
    }

    const scores = await db.scores
      .where({
        sessionId: round.sessionId,
        roundIndex: round.index,
      })
      .toArray();
    const scoresWithValues = scores.filter((score) => score.value > 0);
    if (scoresWithValues.length > 0) {
      alert("Remove scores for this round before deleting it");
      return;
    }

    scores.forEach((score) => {
      console.log([score.sessionId, score.roundIndex, score.playerId]);
      db.scores.delete([score.sessionId, score.roundIndex, score.playerId]);
    });
    await db.rounds.delete([session._id, index]);
  };

  return (
    <>
      <Table {...props}>
        <thead className="c-table__thead--sticky">
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
          {session.rounds
            .filter((round) => !round.deleted)
            .map((round) => (
              <tr key={round.index}>
                <th
                  onContextMenu={(e) => {
                    if (!editable) return;

                    e.preventDefault();
                    setEditRoundActive(round.index);
                  }}
                >
                  <div
                    style={{
                      fontSize: "var(--md-sys-typescale-caption-size)",
                    }}
                  >
                    {round.colour && <Avatar colour={round.colour}></Avatar>}{" "}
                    {round.label ?? ""}
                  </div>
                </th>
                {session.players.map((player) => (
                  <ScoreTableCell
                    key={`${round.index}-${player._id}`}
                    round={round}
                    playerId={player._id}
                    editable={editable}
                  />
                ))}
              </tr>
            ))}
        </tbody>
        {scoreMode &&
          [ScoreMode.Highest, ScoreMode.Lowest].includes(scoreMode) && (
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

      <EditRoundModal
        label={
          session.rounds.find((r) => r.index === editRoundActive)?.label ?? ""
        }
        colour={
          session.rounds.find((r) => r.index === editRoundActive)?.colour ?? ""
        }
        open={editRoundActive !== -1}
        onClose={() => setEditRoundActive(-1)}
        onSave={(label, colour) => setRound(editRoundActive, label, colour)}
        onDelete={() => removeRound(editRoundActive)}
        key={`edit-round-${editRoundActive}`}
      ></EditRoundModal>
    </>
  );
};

export default ScoreTable;
