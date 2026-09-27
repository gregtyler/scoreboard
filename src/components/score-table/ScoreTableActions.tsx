import { TableHTMLAttributes, useState } from "react";
import Button from "../button/Button";
import ButtonStrip from "../form/ButtonStrip";
import EditPlayersModal from "../modal/EditPlayersModal";
import WinnerModal from "../modal/WinnerModal";
import { db } from "../../data/db";
import { ScoreMode, SessionWithRelations } from "../../data/types";
import { redirect, redirectDocument, useNavigate } from "react-router-dom";

interface Props extends TableHTMLAttributes<HTMLTableElement> {
  session: SessionWithRelations;
}

const ScoreTableActions = ({ session }: Props) => {
  const [editPlayersModalOpen, setEditPlayersModalOpen] = useState(false);
  const [winnerModalOpen, setWinnerModalOpen] = useState(false);

  const handleEditPlayers = (playerIds: string[]) => {
    db.sessions.update(session._id, {
      ...session,
      playerIds,
    });
  };

  const handleSetWinner = (playerId: string | null) => {
    db.sessions.update(session._id, {
      ...session,
      customWinner: playerId ?? undefined,
    });
  };

  const addRound = () => {
    let lastRound = 0;
    session.rounds.forEach((round) => {
      const match = round.label?.match(/^#(\d+)$/);
      if (match) {
        lastRound = Math.max(lastRound, parseInt(match[1], 10));
      }
    });

    db.rounds.add({
      sessionId: session._id,
      index: session.rounds.length,
      label: `#${lastRound + 1}`,
    });
  };

  const navigate = useNavigate();

  return (
    <>
      <ButtonStrip className="c-button-strip--align-left">
        <Button variant="tonal" onClick={() => addRound()} icon="add">
          Add round
        </Button>
        <Button
          variant="tonal"
          onClick={() => setEditPlayersModalOpen(true)}
          icon="person"
        >
          Edit players
        </Button>
        {session.scoreMode === ScoreMode.Custom && (
          <Button
            variant="tonal"
            onClick={() => setWinnerModalOpen(true)}
            icon="groups"
          >
            Set winner
          </Button>
        )}
        {session.locked ? (
          <Button
            variant="tonal"
            onClick={() => {
              db.sessions.update(session._id, { locked: false });
              navigate(`/sessions/${session._id}`, { replace: true });
            }}
            icon="lock_open_right"
          >
            Unlock
          </Button>
        ) : (
          <Button
            variant="tonal"
            onClick={() => db.sessions.update(session._id, { locked: true })}
            icon="lock"
          >
            Lock
          </Button>
        )}
      </ButtonStrip>

      <EditPlayersModal
        open={editPlayersModalOpen}
        onClose={() => setEditPlayersModalOpen(false)}
        playerIds={session.playerIds}
        onSave={handleEditPlayers}
        key={`edit-players-${editPlayersModalOpen}`}
      ></EditPlayersModal>
      <WinnerModal
        open={winnerModalOpen}
        onClose={() => setWinnerModalOpen(false)}
        playerIds={session.playerIds}
        onSave={handleSetWinner}
        key={`winner-${winnerModalOpen}`}
      ></WinnerModal>
    </>
  );
};

export default ScoreTableActions;
