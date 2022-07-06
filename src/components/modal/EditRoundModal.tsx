import { ChangeEvent, useState } from "react";

import Button from "../button/Button";
import IconButton from "../button/IconButton";
import TextField from "../form/TextField";
import Modal, { Props as ModalProps } from "./Modal";

interface Props extends ModalProps {
  label: string;
  colour: string;
  onSave: (label: string, colour: string) => void;
}

const EditRoundModal = ({
  onSave,
  onClose,
  label: initialLabel,
  colour: initialColour,
  ...props
}: Props) => {
  const [name, setName] = useState(initialLabel);
  const [colour, setColour] = useState(initialColour);

  const handleSave = () => {
    if (name) onSave(name, colour);
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
      />

      <TextField
        label="Colour"
        type="color"
        value={colour || "#ffffff"}
        onChange={(e: ChangeEvent<HTMLInputElement>) =>
          setColour(e.target.value)
        }
        backgroundColor="var(--md-sys-color-surface-variant)"
        suffix={<IconButton icon="close" onClick={() => setColour("")} />}
      />
    </Modal>
  );
};

export default EditRoundModal;
