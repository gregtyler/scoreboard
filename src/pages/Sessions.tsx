import { HTMLAttributes } from "react";
import FAB from "../components/button/FAB";
import Page from "./Page";
import AppBar from "../components/navigation/AppBar";
import CardGrid from "../components/card/CardGrid";
import Card from "../components/card/Card";
import { Link } from "react-router-dom";
import IconButton from "../components/button/IconButton";
import { Session } from "../data/types";
import DateTime from "../components/DateTime";
import { useGames, useSessions } from "../data/db";

const Sessions = ({ ...props }: HTMLAttributes<HTMLDivElement>) => {
  const games = useGames();
  const sessions = useSessions();

  const sortByDate = (a: Session, b: Session) => {
    return (
      new Date(b.end || b.start).getTime() -
      new Date(a.end || a.start).getTime()
    );
  };

  const sortedSessions = sessions.slice().sort(sortByDate);

  return (
    <div {...props}>
      <AppBar
        variant="center"
        title="Sessions"
        actions={
          <Link to="/sessions/new">
            <IconButton icon="add"></IconButton>
          </Link>
        }
      ></AppBar>
      <Page>
        <CardGrid>
          {sortedSessions.map((session) => {
            const game = games.find((x) => x._id === session.game._id);

            if (typeof game === "undefined") {
              return (
                <div
                  style={{
                    backgroundColor: "var(--md-sys-color-error)",
                    color: "var(--md-sys-color-on-error)",
                  }}
                >
                  Cannot find game with ID
                </div>
              );
            }

            return (
              <Card
                key={session._id}
                image={game.image}
                linkTo={`/sessions/${session._id}`}
                buttons={
                  <Link to={`/sessions/${session._id}/edit`}>
                    <IconButton icon="edit"></IconButton>
                  </Link>
                }
              >
                <div className="body-large">{session.title}</div>
                <div className="body-medium c-card__meta">
                  {game.name} &bull; {session.players.length} players
                  <div>
                    <DateTime
                      dateStyle="short"
                      timeStyle="short"
                      dateTime={session.end || session.start}
                    ></DateTime>
                  </div>
                </div>
              </Card>
            );
          })}
        </CardGrid>

        <Link to="/sessions/new">
          <FAB icon="group_add"></FAB>
        </Link>
      </Page>
    </div>
  );
};

export default Sessions;
