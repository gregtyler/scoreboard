import { HTMLAttributes } from "react";
import { Link, useNavigate } from "react-router-dom";
import { v4 as uuidv4 } from "uuid";
import Button from "../components/button/Button";
import IconButton from "../components/button/IconButton";
import Card from "../components/card/Card";
import CardGrid from "../components/card/CardGrid";
import Icon from "../components/Icon";
import AppBar from "../components/navigation/AppBar";
import { db, useLocations, usePlayers } from "../data/db";
import Page from "./Page";

const Database = ({ ...props }: HTMLAttributes<HTMLDivElement>) => {
  const locations = useLocations();
  const players = usePlayers();

  const navigate = useNavigate();

  async function addPlayer() {
    const id = uuidv4();
    await db.players.add({
      _id: id,
      name: "",
    });
    navigate(`/players/${id}`);
  }

  async function addLocation() {
    const id = uuidv4();
    await db.locations.add({
      _id: id,
      name: "",
    });
    navigate(`/locations/${id}`);
  }

  return (
    <div {...props}>
      <AppBar variant="center" title="Database"></AppBar>
      <Page>
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
                <Link to={`/locations/${location._id}`}>
                  <IconButton icon="edit"></IconButton>
                </Link>
              }
            >
              <div
                className="body-large"
                style={{ display: "flex", alignItems: "center" }}
              >
                {location.icon && <Icon>{location.icon}</Icon>}&nbsp;
                {location.name}
              </div>
            </Card>
          ))}
        </CardGrid>
        <div style={{ textAlign: "center" }}>
          <Button icon="add" onClick={addLocation}>
            Add new location
          </Button>
        </div>
      </Page>
    </div>
  );
};

export default Database;
