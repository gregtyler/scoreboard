import { HTMLAttributes } from "react";
import { Link, useNavigate } from "react-router-dom";
import { v4 as uuidv4 } from "uuid";
import Button from "../components/button/Button";
import IconButton from "../components/button/IconButton";
import Card from "../components/card/Card";
import CardGrid from "../components/card/CardGrid";
import AppBar from "../components/navigation/AppBar";
import { useDB } from "../data/db";

const Database = ({ ...props }: HTMLAttributes<HTMLDivElement>) => {
  const [locations] = useDB("locations");
  const [players] = useDB("players");
  const navigate = useNavigate();

  function addPlayer() {
    const id = uuidv4();
    navigate(`/players/${id}`);
  }

  function addLocation() {
    const id = uuidv4();
    navigate(`/locations/${id}`);
  }

  return (
    <div {...props}>
      <AppBar variant="large" title="Database"></AppBar>

      <h2 className="headline-small">Players</h2>
      <CardGrid>
        {players.map((player) => (
          <Card
            key={player._id}
            buttons={
              <Link to={`/players/${player._id}`}>
                <IconButton icon="edit"></IconButton>
              </Link>
            }
          >
            <div className="body-large">{player.name}</div>
          </Card>
        ))}
      </CardGrid>
      <div style={{ textAlign: "center" }}>
        <Button icon="add" onClick={addPlayer}>
          Add new player
        </Button>
      </div>

      <h2 className="headline-small">Locations</h2>
      <CardGrid>
        {locations.map((location) => (
          <Card
            key={location._id}
            buttons={
              <Link to={`/players/${location._id}`}>
                <IconButton icon="edit"></IconButton>
              </Link>
            }
          >
            <div className="body-large">{location.name}</div>
          </Card>
        ))}
      </CardGrid>
      <div style={{ textAlign: "center" }}>
        <Button icon="add" onClick={addLocation}>
          Add new location
        </Button>
      </div>
    </div>
  );
};

export default Database;
