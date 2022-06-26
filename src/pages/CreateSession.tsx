import { ChangeEvent, FormEvent, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { v4 as uuidv4 } from "uuid";
import Button from "../components/button/Button";
import ButtonStrip from "../components/form/ButtonStrip";
import DateField from "../components/form/DateField";
import TextField from "../components/form/TextField";
import AppBar from "../components/navigation/AppBar";
import { db, useGames, useLocations } from "../data/db";
import Page from "./Page";

const CreateSession = () => {
  const games = useGames();
  const locations = useLocations();

  const [title, setTitle] = useState("");
  const [start, setStart] = useState(new Date());
  const [locationId, setLocationId] = useState("");
  const [gameId, setGameId] = useState("");

  const navigate = useNavigate();

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();

    const _id = uuidv4();

    db.sessions.add({
      _id,
      title,
      start: start.toISOString(),
      locationId,
      gameId,
      playerIds: [],
    });

    const game = await db.games.get(gameId);
    game?.template?.rounds?.forEach((round, index) => {
      db.rounds.add({
        sessionId: _id,
        index: index,
        label: round.label,
      });
    });

    navigate(`/sessions/${_id}`);
  };

  return (
    <div>
      <AppBar variant="small" title="New session" backTo="/"></AppBar>
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

          <ButtonStrip>
            <div>
              <Button type="button" to="/">
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

export default CreateSession;
