import { ChangeEvent, useState } from "react";
import { usePlayers } from "../../data/db";
import Button from "../button/Button";
import TextField from "../form/TextField";
import Modal, { Props as ModalProps } from "./Modal";

interface Props extends ModalProps {
  onSave: (playerId: string) => void;
}

const SelectPlayerModal = ({ onSave, onClose, ...props }: Props) => {
  const players = usePlayers();
  const [selected, setSelected] = useState("");

  const handleSave = () => {
    if (selected) onSave(selected);
    onClose();
  };

  return (
    <Modal
      buttons={
        <>
          <Button onClick={handleSave}>Add player</Button>
          <Button onClick={onClose}>Close</Button>
        </>
      }
      onClose={onClose}
      {...props}
    >
      <TextField
        label="Player"
        value={selected}
        options={players.map((player) => [player._id, player.name])}
        onChange={(e: ChangeEvent<HTMLInputElement>) =>
          setSelected(e.target.value)
        }
        backgroundColor="var(--md-sys-color-surface-variant)"
      ></TextField>
    </Modal>
  );
};

export default SelectPlayerModal;
