import {
  ChangeEvent,
  FormEvent,
  FormHTMLAttributes,
  MouseEvent,
  useState,
} from "react";
import { useNavigate, useParams } from "react-router-dom";
import Button from "../components/button/Button";
import IconButton from "../components/button/IconButton";
import TextField from "../components/form/TextField";
import FullPageError from "../components/FullPageError";
import TopAppBar from "../components/navigation/AppBar";
import { useDB } from "../data/db";
import Page from "./Page";

const EditGame = ({ ...props }: FormHTMLAttributes<HTMLDivElement>) => {
  const { id } = useParams();
  const navigate = useNavigate();

  const [games, setGames] = useDB("games");
  const game = games.find((x) => x._id === id);

  if (typeof game === "undefined") {
    return (
      <FullPageError backTo="/games">
        <p>Game not found</p>
      </FullPageError>
    );
  }

  const [name, setName] = useState(game.name);
  const [image, setImage] = useState(game.image);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();

    setGames(
      games.map((x) =>
        x._id === id
          ? {
              ...x,
              name,
              image,
            }
          : x
      )
    );

    navigate("/games");
  };

  const handleDelete = (e: MouseEvent<Element>) => {
    e.preventDefault();

    setGames(games.filter((x) => x._id !== id));
    navigate("/games");
  };

  return (
    <div {...props}>
      <TopAppBar
        variant="small"
        title="Edit game"
        backTo="/games"
        actions={<IconButton icon="delete" onClick={handleDelete}></IconButton>}
      ></TopAppBar>
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
