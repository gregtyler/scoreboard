import { ChangeEvent, useState } from "react";

import Button from "../button/Button";
import TextField from "../form/TextField";
import Modal, { Props as ModalProps } from "./Modal";

interface Props extends ModalProps {
  label: string;
  onSave: (label: string) => void;
}

const EditRoundModal = ({ onSave, onClose, label, ...props }: Props) => {
  const [name, setName] = useState(label);

  const handleSave = () => {
    if (name) onSave(name);
    onClose();
  };

  return (
    <Modal
      title="Edit round"
      buttons={
        <>
          <Button onClick={onClose}>Cancel</Button>
          <Button onClick={handleSave} disabled={name === ""}>
            Save changes
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

export default EditRoundModal;
