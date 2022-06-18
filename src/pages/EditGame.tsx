import { ChangeEvent, FormEvent, FormHTMLAttributes, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Button from "../components/button/Button";
import TextField from "../components/form/TextField";
import FullPageError from "../components/FullPageError";
import TopAppBar from "../components/navigation/AppBar";
import { useDB } from "../data/db";

const EditGame = ({ ...props }: FormHTMLAttributes<HTMLFormElement>) => {
  const { id } = useParams();
  const navigate = useNavigate();

  const [games, setGames] = useDB("games");
  const game = games.find((g) => g._id === id);

  if (typeof game === "undefined") {
    return (
      <FullPageError>
        <p>Game not found</p>
      </FullPageError>
    );
  }

  const [name, setName] = useState(game.name);
  const [image, setImage] = useState(game.image);

  const handleSubmit = (e: FormEvent) => {
    console.log("handling");
    e.preventDefault();

    setGames(
      games.map((g) =>
        g._id === id
          ? {
              ...g,
              name: name,
              image: image,
            }
          : g
      )
    );

    navigate("/games");
  };

  return (
    <form onSubmit={handleSubmit} {...props}>
      <TopAppBar variant="small" title="Edit game" backTo="/games"></TopAppBar>

      <TextField
        label="Name"
        value={name}
        onChange={(e: ChangeEvent<HTMLInputElement>) => setName(e.target.value)}
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
  );
};

export default EditGame;
