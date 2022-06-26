import { ChangeEvent, useState } from "react";

import Button from "../button/Button";
import TextField from "../form/TextField";
import Modal, { Props as ModalProps } from "./Modal";

interface Props extends ModalProps {
  onSave: (label: string) => void;
}

const AddRoundModal = ({ onSave, onClose, ...props }: Props) => {
  const [name, setName] = useState("");

  const handleSave = () => {
    if (name) onSave(name);
    onClose();
  };

  return (
    <Modal
      title="New round"
      buttons={
        <>
          <Button onClick={onClose}>Cancel</Button>
          <Button onClick={handleSave} disabled={name === ""}>
            Add round
          </Button>
        </>
      }
      onClose={onClose}
      {...props}
    >
      <TextField
        label="Round name"
        value={name}
        onChange={(e: ChangeEvent<HTMLInputElement>) => setName(e.target.value)}
        backgroundColor="var(--md-sys-color-surface-variant)"
      ></TextField>
    </Modal>
  );
};

export default AddRoundModal;
