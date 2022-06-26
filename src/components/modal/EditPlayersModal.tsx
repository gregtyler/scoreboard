import { ChangeEvent, useMemo, useState } from "react";

import { usePlayers } from "../../data/db";
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
  const allPlayers = usePlayers();

  const players = useMemo(() => {
    return allPlayers.filter((x) => ids.includes(x._id));
  }, [ids, allPlayers]);

  const handleSave = () => {
    onSave(ids);
    onClose();
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
            <span style={{ flex: 1 }}>{player.name}</span>
          </ListItem>
        ))}
      </List>

      <TextField
        label="Add player"
        value=""
        options={allPlayers
          .filter((x) => !ids.includes(x._id))
          .map((x) => [x._id, x.name])}
        onChange={(e: ChangeEvent<HTMLInputElement>) =>
          setIds([...ids, e.target.value])
        }
      />
    </Modal>
  );
};

export default EditPlayersModal;
