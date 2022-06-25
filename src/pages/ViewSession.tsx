import { Link, useParams } from "react-router-dom";
import IconButton from "../components/button/IconButton";
import Card from "../components/card/Card";
import DateTime from "../components/DateTime";
import FullPageError from "../components/FullPageError";
import Icon from "../components/Icon";
import AppBar from "../components/navigation/AppBar";
import ScoreTable from "../components/table/ScoreTable";
import Table from "../components/table/Table";
import { useDB } from "../data/db";
import Page from "./Page";

const error = (message: string) => (
  <FullPageError backTo="/">
    <p>{message}</p>
  </FullPageError>
);

const ViewSession = () => {
  const { id } = useParams();
  const [sessions, setSessions] = useDB("sessions");
  const [games] = useDB("games");
  const [locations] = useDB("locations");
  const [allPlayers] = useDB("players");

  const session = sessions.find((x) => x._id === id);
  if (typeof session === "undefined") {
    return error("Session not found");
  }

  const game = games.find((x) => x._id === session.game._id);
  if (typeof game === "undefined") {
    return error("Game not found");
  }

  const location = locations.find((x) => x._id === session.location._id);

  const players = session.players.map((x) => {
    const player = allPlayers.find((y) => y._id === x._id);
    if (typeof player === "undefined") {
      throw new Error("Player not found");
    }

    return player;
  });

  const handleScoreChange = (args: {
    round: number;
    player: number;
    score: number;
  }) => {
    setSessions(
      sessions.map((s) =>
        s._id === session._id
          ? {
              ...session,
              rounds: session.rounds.map((r, i) =>
                i === args.round
                  ? {
                      ...r,
                      scores: r.scores.map((s2) =>
                        s2.player === args.player
                          ? { ...s2, value: args.score }
                          : s2
                      ),
                    }
                  : r
              ),
            }
          : s
      )
    );
  };

  return (
    <div>
      <AppBar variant="small" title={session.title} backTo="/"></AppBar>
      <Page>
        <Card
          image={game.image}
          buttons={
            <Link to={`/games/${game._id}`}>
              <IconButton icon="edit"></IconButton>
            </Link>
          }
        >
          <div className="headline-small">{game.name}</div>
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
              <Icon>{location.icon}</Icon> {location.name}
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
          players={players}
          editable
          onScoreChange={(e: {
            round: number;
            player: number;
            score: number;
          }) => handleScoreChange(e)}
        ></ScoreTable>
      </Page>
    </div>
  );
};

export default ViewSession;
