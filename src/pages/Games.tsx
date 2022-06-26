import { HTMLAttributes, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { v4 as uuidv4 } from "uuid";

import IconButton from "../components/button/IconButton";
import Card from "../components/card/Card";
import CardGrid from "../components/card/CardGrid";
import AppBar from "../components/navigation/AppBar";
import { db, useGames, useSessions } from "../data/db";
import Page from "./Page";

interface PlaysMap {
  [gameId: string]: number;
}

const Games = ({ ...props }: HTMLAttributes<HTMLDivElement>) => {
  const navigate = useNavigate();

  const games = useGames();
  const sessions = useSessions();
  const [plays, setPlays] = useState<PlaysMap>({});

  async function addGame() {
    const id = uuidv4();
    await db.games.add({
      _id: id,
      name: "",
    });
    navigate(`/games/${id}`);
  }

  useEffect(() => {
    const newPlays = games?.reduce(
      (obj, game) => ({
        ...obj,
        [game._id]: sessions.filter((x) => x.gameId === game._id).length,
      }),
      {}
    );

    setPlays(newPlays);
  }, [games, sessions]);

  return (
    <div {...props}>
      <AppBar
        variant="center"
        title="Games"
        actions={<IconButton icon="add" onClick={addGame}></IconButton>}
      ></AppBar>
      <Page>
        <CardGrid>
          {games.map((game) => (
            <Card
              key={game._id}
              image={game.image}
              buttons={
                <IconButton icon="edit" to={`/games/${game._id}`}></IconButton>
              }
            >
              <div className="body-large">{game.name}</div>
              <div className="body-medium c-card__meta">
                {plays[game._id]} play{plays[game._id] === 1 ? "" : "s"}
              </div>
            </Card>
          ))}
        </CardGrid>
      </Page>
    </div>
  );
};

export default Games;
