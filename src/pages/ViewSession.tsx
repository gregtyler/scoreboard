import { Link, useParams } from "react-router-dom";
import IconButton from "../components/button/IconButton";
import Card from "../components/card/Card";
import DateTime from "../components/DateTime";
import FullPageError from "../components/FullPageError";
import Icon from "../components/Icon";
import AppBar from "../components/navigation/AppBar";
import ScoreTable from "../components/score-table/ScoreTable";
import { db, useSession } from "../data/db";
import Page from "./Page";

const ViewSession = () => {
  const { id } = useParams();
  if (typeof id !== "string") {
    return <FullPageError title="Game not found"></FullPageError>;
  }

  const [session, setSession] = useSession(id);

  if (!session) return null;

  const handleAddRound = () => {
    const label = prompt("What should the round be called?") ?? "";

    db.rounds.add({
      sessionId: id,
      index: session.rounds.length,
      label,
    });
  };

  const handleAddPlayer = () => {
    const playerId = prompt("Which player?") ?? "";
    setSession({
      ...session,
      playerIds: [...session.playerIds, playerId],
    });
  };

  return (
    <div>
      <AppBar variant="small" title={session.title} backTo="/"></AppBar>
      <Page>
        <Card
          image={session.game.image}
          buttons={
            <Link to={`/games/${session.game._id}`}>
              <IconButton icon="edit"></IconButton>
            </Link>
          }
        >
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
        ></ScoreTable>
        <button onClick={() => handleAddRound()}>Add round</button>
        <button onClick={() => handleAddPlayer()}>Add player</button>
      </Page>
    </div>
  );
};

export default ViewSession;
