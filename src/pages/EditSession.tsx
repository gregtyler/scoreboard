import { ChangeEvent, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

import Button from "../components/button/Button";
import ButtonStrip from "../components/form/ButtonStrip";
import DateField from "../components/form/DateField";
import TextField from "../components/form/TextField";
import FullPageError from "../components/FullPageError";
import AppBar from "../components/navigation/AppBar";
import { useGames, useSession } from "../data/db";
import Page from "./Page";
import { ScoreMode, translateScoreMode } from "../data/types";
import { extractScoreMode } from "./CreateSession";

const EditSession = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  if (typeof id !== "string") {
    return <FullPageError title="Session not found"></FullPageError>;
  }

  const games = useGames();

  const [title, setTitle] = useState("");
  const [start, setStart] = useState(new Date());
  const [boardType, setBoardType] = useState("");

  const [session, setSession, deleteSession] = useSession(id);
  useEffect(() => {
    if (session) {
      setTitle(session.title);
      setStart(new Date(session.start));

      if (session.game) {
        setBoardType(session.game._id);
      } else if (session.scoreMode) {
        setBoardType(`custom:${session.scoreMode}`);
      }
    }
  }, [session]);

  if (!session) return null;

  const handleSubmit = async () => {
    const [scoreMode, game] = await extractScoreMode(boardType);

    setSession({
      ...session,
      title,
      start: start.toISOString(),
      gameId: game?._id,
      scoreMode,
    });

    navigate(`/sessions/${session._id}`);
  };

  const handleDelete = async () => {
    if (confirm("Are you sure you want to delete this session?")) {
      await deleteSession();
      navigate("/");
    }
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
            label="Title"
            value={title}
            onChange={(e: ChangeEvent<HTMLInputElement>) =>
              setTitle(e.target.value)
            }
          ></TextField>

          <TextField
            required
            label="Game"
            value={boardType}
            options={[
              [
                `custom:${ScoreMode.Highest}`,
                translateScoreMode(ScoreMode.Highest),
              ],
              [
                `custom:${ScoreMode.Lowest}`,
                translateScoreMode(ScoreMode.Lowest),
              ],
              [
                `custom:${ScoreMode.Custom}`,
                translateScoreMode(ScoreMode.Custom),
              ],
              ["", "--------------------------"],
              ...games.map((x) => [x._id, x.name]),
            ]}
            onChange={(e: ChangeEvent<HTMLInputElement>) =>
              setBoardType(e.target.value)
            }
          ></TextField>

          <DateField
            label="Start"
            value={start}
            onChange={(val: Date) => setStart(val)}
          ></DateField>

          <ButtonStrip>
            <div>
              <Button to={`/sessions/${session._id}`}>Cancel</Button>
              <Button
                style={{ color: "var(--md-sys-color-error)" }}
                onClick={handleDelete}
              >
                Delete
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
