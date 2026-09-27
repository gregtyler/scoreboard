import { HTMLAttributes, useState } from "react";
import { useNavigate } from "react-router-dom";
import { downloadData, uploadData } from "../data/db";
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
import Modal from "../components/modal/Modal";

const STATE_IMPORT_WAIT = 0;
const STATE_IMPORT_IN_PROGRESS = 1;
const STATE_IMPORT_COMPLETE = 2;
const STATE_IMPORT_FAILURE = 3;

const Settings = ({ ...props }: HTMLAttributes<HTMLDivElement>) => {
  const [importState, setImportState] = useState(STATE_IMPORT_WAIT);
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

  async function doUpload() {
    setImportState(STATE_IMPORT_IN_PROGRESS);
    try {
      await uploadData();
      setImportState(STATE_IMPORT_COMPLETE);
    } catch (error) {
      setImportState(STATE_IMPORT_FAILURE);
    }
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
            <div style={{ textAlign: "center" }}>
              <Button icon="upload" variant="tonal" onClick={doUpload}>
                Import data
              </Button>{" "}
              <Button icon="download" variant="tonal" onClick={downloadData}>
                Export data
              </Button>
            </div>
          </Tab>
        </Tabs>
      </Page>

      {importState !== STATE_IMPORT_WAIT ? (
        <Modal
          title="Importing data"
          open={importState !== STATE_IMPORT_WAIT}
          onClose={() => setImportState(STATE_IMPORT_WAIT)}
        >
          {importState === STATE_IMPORT_IN_PROGRESS && "Please wait whilst data is imported."}
          {importState === STATE_IMPORT_COMPLETE && "Data import complete."}
          {importState === STATE_IMPORT_FAILURE && "⚠️ Data import failed. Please try again."}
        </Modal>
      ) : null}
    </div>
  );
};

export default Settings;
