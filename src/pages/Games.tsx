import { HTMLAttributes } from "react";
import { Link, useNavigate } from "react-router-dom";
import { v4 as uuidv4 } from "uuid";
import IconButton from "../components/button/IconButton";
import Card from "../components/card/Card";
import CardGrid from "../components/card/CardGrid";
import AppBar from "../components/navigation/AppBar";
import { useDB } from "../data/db";
import Page from "./Page";

const Games = ({ ...props }: HTMLAttributes<HTMLDivElement>) => {
  const [games, setGames] = useDB("games");
  const navigate = useNavigate();

  function addGame() {
    const id = uuidv4();
    setGames([...games, { _id: id, name: "" }]);
    navigate(`/games/${id}`);
  }

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
                <Link to={`/games/${game._id}`}>
                  <IconButton icon="edit"></IconButton>
                </Link>
              }
            >
              <div className="body-large">{game.name}</div>
              <div className="body-medium c-card__meta">0 plays</div>
            </Card>
          ))}
        </CardGrid>
      </Page>
    </div>
  );
};

export default Games;
