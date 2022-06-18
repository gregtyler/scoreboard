import { HTMLAttributes } from "react";
import { Link, useNavigate } from "react-router-dom";
import { v4 as uuidv4 } from "uuid";
import Button from "../components/button/Button";
import IconButton from "../components/button/IconButton";
import Card from "../components/card/Card";
import CardGrid from "../components/card/CardGrid";
import AppBar from "../components/navigation/AppBar";
import { useDB } from "../data/db";

const Games = ({ ...props }: HTMLAttributes<HTMLDivElement>) => {
  const [games] = useDB("games");
  const navigate = useNavigate();

  function addGame() {
    const id = uuidv4();
    navigate(`/games/${id}`);
  }

  return (
    <div {...props}>
      <AppBar variant="large" title="Games"></AppBar>
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
      <div style={{ textAlign: "center" }}>
        <Button icon="add" onClick={addGame}>
          Add new game
        </Button>
      </div>
    </div>
  );
};

export default Games;
