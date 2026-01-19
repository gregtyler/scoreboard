import { HTMLAttributes } from "react";

import FAB from "../components/button/FAB";
import IconButton from "../components/button/IconButton";
import Card from "../components/card/Card";
import CardGrid from "../components/card/CardGrid";
import DateTime from "../components/DateTime";
import AppBar from "../components/navigation/AppBar";
import { useGames, useSessions } from "../data/db";
import { Session, translateScoreMode } from "../data/types";
import Page from "./Page";

const Sessions = ({ ...props }: HTMLAttributes<HTMLDivElement>) => {
  const games = useGames();
  const sessions = useSessions();

  const sortByDate = (a: Session, b: Session) => {
    return new Date(b.start).getTime() - new Date(a.start).getTime();
  };

  const sortedSessions = sessions.slice().sort(sortByDate);

  return (
    <div {...props}>
      <AppBar
        variant="center"
        title="Sessions"
        actions={<IconButton icon="add" to="/sessions/new"></IconButton>}
      ></AppBar>
      <Page>
        <CardGrid>
          {sortedSessions.map((session) => {
            const game = session.game
              ? (games.find((x) => x._id === session.game?._id) ?? null)
              : null;

            return (
              <Card
                key={session._id}
                image={game?.image}
                linkTo={`/sessions/${session._id}`}
                buttons={
                  <IconButton
                    icon="edit"
                    to={`/sessions/${session._id}/edit`}
                  ></IconButton>
                }
              >
                <div className="body-large">{session.title}</div>
                <div className="body-medium c-card__meta">
                  {game ? game.name : translateScoreMode(session.scoreMode)}
                  {" • "}
                  {session.playerIds.length} players
                  <div>
                    <DateTime
                      dateStyle="short"
                      timeStyle="short"
                      dateTime={session.start}
                    ></DateTime>
                  </div>
                </div>
              </Card>
            );
          })}
        </CardGrid>

        <FAB icon="group_add" to="/sessions/new"></FAB>
      </Page>
    </div>
  );
};

export default Sessions;
