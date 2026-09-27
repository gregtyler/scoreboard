import { HTMLAttributes } from "react";
import { useNavigate } from "react-router-dom";
import { v4 as uuidv4 } from "uuid";

import Button from "../components/button/Button";
import IconButton from "../components/button/IconButton";
import List from "../components/list/List";
import ListItem from "../components/list/ListItem";
import AppBar from "../components/navigation/AppBar";
import Tab from "../components/tabs/Tab";
import Tabs from "../components/tabs/Tabs";
import { db, usePlayers, useSessions } from "../data/db";
import Page from "./Page";

const Settings = ({ ...props }: HTMLAttributes<HTMLDivElement>) => {
  const players = usePlayers();
  const sessions = useSessions();

  const navigate = useNavigate();

  async function addPlayer() {
    const id = uuidv4();
    await db.players.add({
      _id: id,
      name: "",
    });
    navigate(`/players/${id}`);
  }

  return (
    <div {...props}>
      <AppBar variant="center" title="Settings"></AppBar>
      <Page>
        <Tabs tabs={["Players", "Settings"]}>
          <Tab>
            <List>
              {players.map((player) => {
                const gameCount = sessions.filter((x) =>
                  x.players.find((p) => p._id === player._id),
                ).length;
                return (
                  <ListItem
                    key={player._id}
                    avatar={player.name.substring(0, 1)}
                    action={
                      <IconButton icon="edit" to={`/players/${player._id}`} />
                    }
                  >
                    {player.name} — {gameCount} game{gameCount === 1 ? "" : "s"}
                  </ListItem>
                );
              })}
            </List>
            <div style={{ textAlign: "center" }}>
              <Button icon="add" variant="tonal" onClick={addPlayer}>
                Add new player
              </Button>
            </div>
          </Tab>
          <Tab>
            <div style={{ textAlign: "center" }}>Settings go here...</div>
          </Tab>
        </Tabs>
      </Page>
    </div>
  );
};

export default Settings;
