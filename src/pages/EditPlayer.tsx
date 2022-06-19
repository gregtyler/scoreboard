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
import AppBar from "../components/navigation/AppBar";
import { useDB } from "../data/db";
import Page from "./Page";

const EditPlayer = ({ ...props }: FormHTMLAttributes<HTMLDivElement>) => {
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
              name,
            }
          : x
      )
    );

    navigate("/database");
  };

  const handleDelete = (e: MouseEvent<Element>) => {
    e.preventDefault();

    setPlayers(players.filter((x) => x._id !== id));
    navigate("/database");
  };

  return (
    <div {...props}>
      <AppBar
        variant="small"
        title="Edit player"
        backTo="/database"
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

export default EditPlayer;
