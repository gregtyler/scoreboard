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
import TextField from "../components/form/TextField";
import FullPageError from "../components/FullPageError";
import AppBar from "../components/navigation/AppBar";
import { db, usePlayer } from "../data/db";
import Page from "./Page";

const EditPlayer = ({ ...props }: FormHTMLAttributes<HTMLDivElement>) => {
  const { id } = useParams();
  const navigate = useNavigate();

  if (typeof id !== "string") {
    return (
      <FullPageError backTo="/database">
        <p>Player not found</p>
      </FullPageError>
    );
  }

  const [name, setName] = useState("");

  const [player, setPlayer] = usePlayer(id);
  useEffect(() => {
    if (player) {
      setName(player.name);
    }
  }, [player]);

  if (typeof player === "undefined") {
    return (
      <FullPageError backTo="/database">
        <p>Player not found</p>
      </FullPageError>
    );
  }

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();

    setPlayer({
      ...player,
      name,
    });

    navigate("/database");
  };

  const handleDelete = (e: MouseEvent<Element>) => {
    e.preventDefault();

    db.players.delete(id);
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
