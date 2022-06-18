import { useDB } from "../data/db";
import { HTMLAttributes } from "react";
import FAB from "../components/button/FAB";
import Page from "./Page";
import AppBar from "../components/navigation/AppBar";
import CardGrid from "../components/card/CardGrid";
import Card from "../components/card/Card";
import { Link } from "react-router-dom";
import IconButton from "../components/button/IconButton";
import { Session } from "../data/types";

const dateFormatter = new Intl.DateTimeFormat("en-GB", {
  dateStyle: "short",
  timeStyle: "short",
} as Intl.DateTimeFormatOptions);

const Sessions = ({ ...props }: HTMLAttributes<HTMLDivElement>) => {
  const [games] = useDB("games");
  let [sessions, setSessions] = useDB("sessions");

  sessions = [
    {
      _id: "def",
      title: "Game of Parks",
      start: "2022-06-15T20:59:33.492Z",
      location: { _id: "1d499675-f04c-448b-bfa1-54d97e641a16" },
      game: { _id: "f5e09249-d598-4824-9976-566d3315f74b" },
      players: [
        {
          _id: "737e8406-4898-436e-a225-0e7bb5487634",
        },
        {
          _id: "3f61c12b-e6ad-42f1-bfa8-66320328d7be",
        },
      ],
      rounds: [],
    },
    {
      _id: "def",
      title: "Game of Parks",
      start: "2022-06-18T20:59:33.492Z",
      end: "2022-06-18T22:59:33.492Z",
      location: { _id: "1d499675-f04c-448b-bfa1-54d97e641a16" },
      game: { _id: "f5e09249-d598-4824-9976-566d3315f74b" },
      players: [
        {
          _id: "737e8406-4898-436e-a225-0e7bb5487634",
        },
        {
          _id: "3f61c12b-e6ad-42f1-bfa8-66320328d7be",
        },
      ],
      rounds: [],
    },
  ];

  const sortByDate = (a: Session, b: Session) => {
    return (
      new Date(b.end || b.start).getTime() -
      new Date(a.end || a.start).getTime()
    );
  };

  return (
    <div {...props}>
      <AppBar variant="center" title="Sessions"></AppBar>
      <Page>
        <CardGrid>
          {sessions.sort(sortByDate).map((session) => {
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
                buttons={
                  <Link to={`/sessions/${session._id}`}>
                    <IconButton icon="edit"></IconButton>
                  </Link>
                }
              >
                <div className="body-large">{session.title}</div>
                <div className="body-medium c-card__meta">
                  {game.name} &bull; {session.players.length} players
                  <div>
                    {dateFormatter.format(
                      new Date(session.end || session.start)
                    )}
                  </div>
                </div>
              </Card>
            );
          })}
        </CardGrid>

        <FAB icon="group_add" onClick={() => console.log("hi")}></FAB>
      </Page>
    </div>
  );
};

export default Sessions;
