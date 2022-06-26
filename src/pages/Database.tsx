import { HTMLAttributes } from "react";
import { Link, useNavigate } from "react-router-dom";
import { v4 as uuidv4 } from "uuid";
import Button from "../components/button/Button";
import IconButton from "../components/button/IconButton";
import Card from "../components/card/Card";
import CardGrid from "../components/card/CardGrid";
import Icon from "../components/Icon";
import List from "../components/list/List";
import ListItem from "../components/list/ListItem";
import Modal from "../components/modal/Modal";
import AppBar from "../components/navigation/AppBar";
import Tab from "../components/tabs/Tab";
import Tabs from "../components/tabs/Tabs";
import { db, useLocations, usePlayers } from "../data/db";
import EditPlayer from "./EditPlayer";
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
        <Tabs tabs={["Players", "Locations"]}>
          <Tab>
            <List>
              {players.map((player) => (
                <ListItem
                  key={player._id}
                  avatar={player.name.substring(0, 1)}
                  action={
                    <IconButton icon="edit" to={`/players/${player._id}`} />
                  }
                >
                  {player.name}
                </ListItem>
              ))}
            </List>
            <div style={{ textAlign: "center" }}>
              <Button icon="add" onClick={addPlayer}>
                Add new player
              </Button>
            </div>
          </Tab>
          <Tab>
            <List>
              {locations.map((location) => (
                <ListItem
                  key={location._id}
                  avatar={location.icon ? <Icon>{location.icon}</Icon> : ""}
                  action={
                    <IconButton icon="edit" to={`/locations/${location._id}`} />
                  }
                >
                  {location.name}
                </ListItem>
              ))}
            </List>
            <div style={{ textAlign: "center" }}>
              <Button icon="add" onClick={addLocation}>
                Add new location
              </Button>
            </div>
          </Tab>
        </Tabs>
      </Page>
    </div>
  );
};

export default Database;
