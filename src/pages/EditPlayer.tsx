import { ChangeEvent, FormEvent, FormHTMLAttributes, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Button from "../components/button/Button";
import TextField from "../components/form/TextField";
import FullPageError from "../components/FullPageError";
import TopAppBar from "../components/navigation/AppBar";
import { useDB } from "../data/db";

const EditPlayer = ({ ...props }: FormHTMLAttributes<HTMLFormElement>) => {
  const { id } = useParams();
  const navigate = useNavigate();

  const [players, setPlayers] = useDB("players");
  const player = players.find((x) => x._id === id);

  if (typeof player === "undefined") {
    return (
      <FullPageError backTo="/database">
        <p>Player not found</p>
      </FullPageError>
    );
  }

  const [name, setName] = useState(player.name);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();

    setPlayers(
      players.map((x) =>
        x._id === id
          ? {
              ...x,
              name: name,
            }
          : x
      )
    );

    navigate("/database");
  };

  return (
    <form onSubmit={handleSubmit} {...props}>
      <TopAppBar
        variant="small"
        title="Edit player"
        backTo="/database"
      ></TopAppBar>

      <TextField
        label="Name"
        value={name}
        onChange={(e: ChangeEvent<HTMLInputElement>) => setName(e.target.value)}
      ></TextField>

      <div style={{ textAlign: "right" }}>
        <Button variant="filled" type="submit">
          Save
        </Button>
      </div>
    </form>
  );
};

export default EditPlayer;
