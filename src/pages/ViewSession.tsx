import { useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import IconButton from "../components/button/IconButton";
import Card from "../components/card/Card";
import Chip from "../components/chip/Chip";
import DateTime from "../components/DateTime";
import FullPageError from "../components/FullPageError";
import Icon from "../components/Icon";
import AddRoundModal from "../components/modal/AddRoundModal";
import EditPlayersModal from "../components/modal/EditPlayersModal";
import AppBar from "../components/navigation/AppBar";
import ScoreTable from "../components/score-table/ScoreTable";
import { db, useSession } from "../data/db";
import Page from "./Page";

const ViewSession = () => {
  const { id } = useParams();
  if (typeof id !== "string") {
    return <FullPageError title="Game not found"></FullPageError>;
  }

  const navigate = useNavigate();
  const [session, setSession] = useSession(id);
  const [addRoundModalOpen, setAddRoundModalOpen] = useState(false);
  const [editPlayersModalOpen, setEditPlayersModalOpen] = useState(false);

  if (!session) return null;

  const handleAddRound = (label: string) => {
    db.rounds.add({
      sessionId: id,
      index: session.rounds.length,
      label,
    });
  };

  const handleRemoveRound = (index: number) => {
    db.rounds.delete([session._id, index]);
  };

  const handleEditPlayers = (playerIds: string[]) => {
    setSession({
      ...session,
      playerIds,
    });
  };

  return (
    <div>
      <AppBar
        variant="small"
        title={session.title}
        backTo="/"
        actions={
          <IconButton icon="edit" to={`/sessions/${session._id}/edit`} />
        }
      ></AppBar>
      <Page>
        <Card image={session.game.image}>
          <div className="headline-small">{session.game.name}</div>
        </Card>
        {location && (
          <div className="body-large" style={{ margin: "16px 0" }}>
            <span style={{ opacity: 0.6 }}>Played at</span>{" "}
            <span
              style={{
                display: "inline-flex",
                alignItems: "center",
                verticalAlign: "top",
              }}
            >
              <Icon>{session.location.icon}</Icon> {session.location.name}
            </span>{" "}
            <span style={{ opacity: 0.6 }}>on</span>{" "}
            <DateTime
              dateStyle="long"
              timeStyle="short"
              dateTime={session.end || session.start}
            ></DateTime>
          </div>
        )}

        <ScoreTable
          rounds={session.rounds}
          players={session.players}
          editable
          onRemoveRound={handleRemoveRound}
        ></ScoreTable>

        <AddRoundModal
          open={addRoundModalOpen}
          onClose={() => setAddRoundModalOpen(false)}
          onSave={handleAddRound}
          key={`add-round-${addRoundModalOpen}`}
        ></AddRoundModal>
        <EditPlayersModal
          open={editPlayersModalOpen}
          onClose={() => setEditPlayersModalOpen(false)}
          playerIds={session.playerIds}
          onSave={handleEditPlayers}
          key={`edit-players-${editPlayersModalOpen}`}
        ></EditPlayersModal>

        <Chip onClick={() => setAddRoundModalOpen(true)} icon="add">
          Add round
        </Chip>
        <Chip onClick={() => setEditPlayersModalOpen(true)} icon="person">
          Edit players
        </Chip>
      </Page>
    </div>
  );
};

export default ViewSession;
