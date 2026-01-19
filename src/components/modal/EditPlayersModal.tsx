import { ChangeEvent, useMemo, useState } from "react";
import { v4 as uuidv4 } from "uuid";

import { db, usePlayers } from "../../data/db";
import Button from "../button/Button";
import IconButton from "../button/IconButton";
import TextField from "../form/TextField";
import List from "../list/List";
import ListItem from "../list/ListItem";
import Modal, { Props as ModalProps } from "./Modal";

interface Props extends ModalProps {
  playerIds: string[];
  onSave: (playerIds: string[]) => void;
}

const EditPlayersModal = ({ playerIds, onSave, onClose, ...props }: Props) => {
  const [ids, setIds] = useState(playerIds);
  const [name, setName] = useState("");
  const allPlayers = usePlayers();

  const players = useMemo(() => {
    return allPlayers.filter((x) => ids.includes(x._id));
  }, [ids, allPlayers]);

  const handleSave = () => {
    onSave(ids);
    onClose();
  };

  const addPlayer = async () => {
    if (!name) {
      return;
    }

    let id = allPlayers.find((x) => x.name === name)?._id;
    if (!id) {
      id = uuidv4();
      await db.players.add({
        _id: id,
        name,
      });
    }

    if (ids.includes(id)) {
      setName("");
      return;
    }

    setIds([...ids, id]);
    setName("");
  };

  return (
    <Modal
      title="Edit players"
      buttons={
        <>
          <Button onClick={onClose}>Cancel</Button>
          <Button onClick={handleSave} disabled={players.length === 0}>
            Save
          </Button>
        </>
      }
      onClose={onClose}
      {...props}
    >
      <List>
        {players.map((player) => (
          <ListItem
            key={player._id}
            avatar={player.name.substring(0, 1)}
            action={
              <IconButton
                onClick={() => setIds(ids.filter((x) => x !== player._id))}
                icon="delete"
              />
            }
          >
            {player.name}
          </ListItem>
        ))}
      </List>

      <TextField
        label="Add player"
        value={name}
        list="all-players"
        onChange={(e: ChangeEvent<HTMLInputElement>) => setName(e.target.value)}
        className="o-player-modal-inline__name"
        suffix={
          <Button icon="add" variant="filled" onClick={addPlayer}>
            Add
          </Button>
        }
      />
      <datalist id="all-players">
        {allPlayers
          .filter((p) => !ids.includes(p._id))
          .map((player) => (
            <option key={player.name} value={player.name}>
              {player.name}
            </option>
          ))}
      </datalist>
    </Modal>
  );
};

export default EditPlayersModal;
