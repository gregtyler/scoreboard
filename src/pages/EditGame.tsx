import {
  ChangeEvent,
  FormEvent,
  FormHTMLAttributes,
  MouseEvent,
  useEffect,
  useState,
} from "react";
import { useNavigate, useParams } from "react-router-dom";
import Button from "../components/button/Button";
import IconButton from "../components/button/IconButton";
import TextField from "../components/form/TextField";
import FullPageError from "../components/FullPageError";
import AppBar from "../components/navigation/AppBar";
import { db, useGame } from "../data/db";
import Page from "./Page";

const EditGame = ({ ...props }: FormHTMLAttributes<HTMLDivElement>) => {
  const { id } = useParams();
  const navigate = useNavigate();

  if (typeof id !== "string") {
    return <FullPageError title="Game not found"></FullPageError>;
  }

  const [name, setName] = useState("");
  const [image, setImage] = useState("");

  const [game, setGame] = useGame(id);
  useEffect(() => {
    if (game) {
      setName(game.name);
      setImage(game.image ?? "");
    }
  }, [game]);

  if (!game) return null;

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();

    if (game) {
      setGame({
        ...game,
        name,
        image,
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
