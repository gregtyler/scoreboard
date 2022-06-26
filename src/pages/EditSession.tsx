import { ChangeEvent, useEffect, useMemo, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import Button from "../components/button/Button";
import IconButton from "../components/button/IconButton";
import Card from "../components/card/Card";
import Divider from "../components/Divider";
import ButtonStrip from "../components/form/ButtonStrip";
import DateField from "../components/form/DateField";
import TextField from "../components/form/TextField";
import FullPageError from "../components/FullPageError";
import List from "../components/list/List";
import ListItem from "../components/list/ListItem";
import AppBar from "../components/navigation/AppBar";
import Tab from "../components/tabs/Tab";
import Tabs from "../components/tabs/Tabs";
import { useGames, useLocations, usePlayers, useSession } from "../data/db";
import Page from "./Page";

const EditSession = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  if (typeof id !== "string") {
    return <FullPageError title="Session not found"></FullPageError>;
  }

  const games = useGames();
  const locations = useLocations();
  const allPlayers = usePlayers();

  const [playerIds, setPlayerIds] = useState<string[]>([]);
  const [title, setTitle] = useState("");
  const [start, setStart] = useState(new Date());
  const [end, setEnd] = useState(new Date());
  const [locationId, setLocationId] = useState("");
  const [gameId, setGameId] = useState("");

  const [session, setSession] = useSession(id);
  useEffect(() => {
    if (session) {
      setTitle(session.title);
      setStart(new Date(session.start));
      setEnd(new Date(session.end ?? session.start));
      setGameId(session.gameId);
      setLocationId(session.locationId);
      setPlayerIds(session.playerIds);
    }
  }, [session]);

  const players = useMemo(() => {
    return allPlayers.filter((x) => playerIds.includes(x._id));
  }, [playerIds]);

  if (!session) return null;

  const handleRemovePlayer = (playerId: string) => {
    setPlayerIds(playerIds.filter((id) => id !== playerId));
  };

  const handleSubmit = () => {
    setSession({
      ...session,
      title,
      start: start.toISOString(),
      end: end.toISOString(),
      locationId,
      gameId,
      playerIds,
    });

    navigate(`/sessions/${session._id}`);
  };

  return (
    <div>
      <AppBar
        variant="small"
        title="Edit session"
        backTo={`/sessions/${session._id}`}
      ></AppBar>
      <Page>
        <form onSubmit={handleSubmit}>
          <Tabs tabs={["Session details", "Players"]}>
            <Tab>
              <TextField
                required
                label="Session title"
                value={title}
                onChange={(e: ChangeEvent<HTMLInputElement>) =>
                  setTitle(e.target.value)
                }
              ></TextField>

              <TextField
                required
                label="Game"
                value={gameId}
                options={games.map((x) => [x._id, x.name])}
                onChange={(e: ChangeEvent<HTMLInputElement>) =>
                  setGameId(e.target.value)
                }
              ></TextField>
              <TextField
                required
                label="Location"
                value={locationId}
                options={locations.map((x) => [x._id, x.name])}
                onChange={(e: ChangeEvent<HTMLInputElement>) =>
                  setLocationId(e.target.value)
                }
              ></TextField>

              <DateField
                label="Start"
                value={start}
                onChange={(val: Date) => setStart(val)}
              ></DateField>

              <DateField
                label="End"
                value={end}
                onChange={(val: Date) => setEnd(val)}
              ></DateField>
            </Tab>
            <Tab>
              <List>
                {players.map((player) => (
                  <ListItem
                    key={player._id}
                    avatar={player.name.substring(0, 1)}
                    action={
                      <IconButton
                        onClick={() => handleRemovePlayer(player._id)}
                        icon="delete"
                      />
                    }
                  >
                    <span style={{ flex: 1 }}>{player.name}</span>
                  </ListItem>
                ))}
              </List>

              <TextField
                label="Select player"
                value=""
                options={allPlayers.map((x) => [x._id, x.name])}
                onChange={(e: ChangeEvent<HTMLInputElement>) =>
                  setPlayerIds([...playerIds, e.target.value])
                }
              />
            </Tab>
          </Tabs>
          <ButtonStrip>
            <div>
              <Button type="button" to={`/sessions/${session._id}`}>
                Cancel
              </Button>
              <Button type="submit">Save</Button>
            </div>
          </ButtonStrip>
        </form>
      </Page>
    </div>
  );
};

export default EditSession;
