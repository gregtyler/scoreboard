import {
  ChangeEvent,
  FormEvent,
  FormHTMLAttributes,
  MouseEvent,
  useEffect,
  useState
} from "react";
import { useNavigate, useParams } from "react-router-dom";

import Button from "../components/button/Button";
import IconButton from "../components/button/IconButton";
import Divider from "../components/Divider";
import TextField from "../components/form/TextField";
import FullPageError from "../components/FullPageError";
import List from "../components/list/List";
import ListItem from "../components/list/ListItem";
import AddRoundModal from "../components/modal/AddRoundModal";
import EditRoundModal from "../components/modal/EditRoundModal";
import AppBar from "../components/navigation/AppBar";
import { db, useGame } from "../data/db";
import { ScoreMode } from "../data/types";
import { isEnumValue } from "../lib/isEnumValue";
import Page from "./Page";

const EditGame = ({ ...props }: FormHTMLAttributes<HTMLDivElement>) => {
  const { id } = useParams();
  const navigate = useNavigate();

  if (typeof id !== "string") {
    return <FullPageError title="Game not found"></FullPageError>;
  }

  const [name, setName] = useState("");
  const [image, setImage] = useState("");
  const [scoreMode, setScoreMode] = useState<ScoreMode>(ScoreMode.Custom);
  const [rounds, setRounds] = useState<{ label: string; colour: string }[]>([]);

  const [addRoundModalOpen, setAddRoundModalOpen] = useState(false);
  const [editRoundActive, setEditRoundActive] = useState(-1);

  const [game, setGame] = useGame(id);
  useEffect(() => {
    if (game) {
      setName(game.name);
      setImage(game.image ?? "");

      if (game.template) {
        setScoreMode(game.template.scoreMode ?? ScoreMode.Custom);
        setRounds(game.template.rounds ?? []);
      }
    }
  }, [game]);

  if (!game) return null;

  const setRound = (index: number, label: string, colour: string) => {
    setRounds(
      rounds.map((round, i) =>
        i === index ? { ...round, label, colour } : round
      )
    );
  };

  const addRound = (label: string, colour: string) => {
    setRounds([...rounds, { label, colour }]);
  };

  const removeRound = (index: number) => {
    setRounds([...rounds.slice(0, index), ...rounds.slice(index + 1)]);
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();

    if (game) {
      setGame({
        ...game,
        name,
        image,
        template: {
          ...game.template,
          scoreMode,
          rounds,
        },
      });
    }

    navigate("/games");
  };

  const handleDelete = (e: MouseEvent<Element>) => {
    e.preventDefault();

    db.games.delete(id);
    navigate("/games");
  };

  return (
    <div {...props}>
      <AppBar
        variant="small"
        title="Edit game"
        backTo="/games"
        actions={<IconButton icon="delete" onClick={handleDelete}></IconButton>}
      ></AppBar>
      <Page>
        <form onSubmit={handleSubmit}>
          <TextField
            label="Name"
            value={name}
            onChange={(e: ChangeEvent<HTMLInputElement>) =>
              setName(e.target.value)
            }
          ></TextField>

          <TextField
            label="Image"
            value={image}
            supportText="Enter a URL to an image"
            onChange={(e: ChangeEvent<HTMLInputElement>) =>
              setImage(e.target.value)
            }
          ></TextField>

          <TextField
            label="How is the winner decided?"
            value={scoreMode}
            options={[
              [ScoreMode.Highest, "Highest score"],
              [ScoreMode.Lowest, "Lowest score"],
              [ScoreMode.Custom, "Manually select"],
            ]}
            onChange={(e: ChangeEvent<HTMLInputElement>) => {
              const v = e.target.value;
              if (isEnumValue(v, ScoreMode)) {
                setScoreMode(v);
              }
            }}
          ></TextField>

          <h2 className="title-large">Rounds</h2>

          <EditRoundModal
            label={rounds[editRoundActive]?.label}
            colour={rounds[editRoundActive]?.colour}
            open={editRoundActive !== -1}
            onClose={() => setEditRoundActive(-1)}
            onSave={(label, colour) => setRound(editRoundActive, label, colour)}
            key={`edit-round-${editRoundActive}`}
          ></EditRoundModal>
          <List>
            {rounds.map((round, index) => (
              <ListItem
                key={index}
                avatarColor={round.colour}
                action={
                  <>
                    <IconButton
                      icon="edit"
                      onClick={() => setEditRoundActive(index)}
                    />
                    <IconButton
                      icon="delete"
                      onClick={() => removeRound(index)}
                    />
                  </>
                }
              >
                {round.label}
              </ListItem>
            ))}
          </List>

          <AddRoundModal
            open={addRoundModalOpen}
            onClose={() => setAddRoundModalOpen(false)}
            onSave={addRound}
            key={`add-round-${addRoundModalOpen}`}
          ></AddRoundModal>
          <Button
            variant="outlined"
            onClick={() => setAddRoundModalOpen(true)}
            icon="add"
          >
            Add
          </Button>

          <div style={{ textAlign: "right" }}>
            <Button variant="filled" type="submit">
              Save
            </Button>
          </div>
        </form>
      </Page>
    </div>
  );
};

export default EditGame;
