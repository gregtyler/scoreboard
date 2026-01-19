import { useState } from "react";
import { useParams } from "react-router-dom";

import Button from "../components/button/Button";
import ButtonStrip from "../components/form/ButtonStrip";
import FullPageError from "../components/FullPageError";
import EditPlayersModal from "../components/modal/EditPlayersModal";
import WinnerModal from "../components/modal/WinnerModal";
import AppBar from "../components/navigation/AppBar";
import ScoreTable from "../components/score-table/ScoreTable";
import { db, useSession } from "../data/db";
import { ScoreMode } from "../data/types";
import Page from "./Page";

const EditSessionScores = () => {
  const { id } = useParams();
  if (typeof id !== "string") {
    return <FullPageError title="Game not found"></FullPageError>;
  }

  const [session, setSession] = useSession(id);
  const [editPlayersModalOpen, setEditPlayersModalOpen] = useState(false);
  const [winnerModalOpen, setWinnerModalOpen] = useState(false);

  if (!session) return null;

  const handleEditPlayers = (playerIds: string[]) => {
    setSession({
      ...session,
      playerIds,
    });
  };

  const handleSetWinner = (playerId: string | null) => {
    setSession({
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
      sessionId: id,
      index: session.rounds.length,
      label: `#${lastRound + 1}`,
    });
  };

  return (
    <div>
      <AppBar
        variant="small"
        title={`${session.title}: Scores`}
        backTo={`/sessions/${session._id}`}
      ></AppBar>
      <Page>
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
        </ButtonStrip>

        <ScoreTable session={session} editable></ScoreTable>

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
      </Page>
    </div>
  );
};

export default EditSessionScores;
