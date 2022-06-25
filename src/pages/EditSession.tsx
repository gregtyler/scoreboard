import { ChangeEvent, FormEvent, useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { v4 as uuidv4 } from "uuid";
import Button from "../components/button/Button";
import ButtonStrip from "../components/form/ButtonStrip";
import DateField from "../components/form/DateField";
import TextField from "../components/form/TextField";
import FullPageError from "../components/FullPageError";
import AppBar from "../components/navigation/AppBar";
import { useGames, useLocations, useSession } from "../data/db";
import Page from "./Page";

const EditSession = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  if (typeof id !== "string") {
    return <FullPageError title="Session not found"></FullPageError>;
  }

  const games = useGames();
  const locations = useLocations();

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
    }
  }, [session]);

  if (!session) return null;

  const handleSubmit = () => {
    setSession({
      ...session,
      title,
      start: start.toISOString(),
      end: end.toISOString(),
      locationId,
      gameId,
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

          <ButtonStrip>
            <div>
              <Link to="/">
                <Button type="button">Cancel</Button>
              </Link>
              <Button type="submit">Save</Button>
            </div>
          </ButtonStrip>
        </form>
      </Page>
    </div>
  );
};

export default EditSession;
