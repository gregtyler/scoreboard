import { ChangeEvent, useState } from "react";

import Button from "../button/Button";
import IconButton from "../button/IconButton";
import TextField from "../form/TextField";
import Modal, { Props as ModalProps } from "./Modal";

interface Props extends ModalProps {
  label: string;
  colour: string;
  onSave: (label: string, colour: string) => void;
  onDelete: () => void;
}

const EditRoundModal = ({
  onSave,
  onDelete,
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

  const handleDelete = () => {
    if (confirm("Are you sure you want to delete this round?")) {
      onDelete();
      onClose();
    }
  };

  return (
    <Modal
      title="Edit round"
      buttons={
        <>
          <Button
            onClick={handleDelete}
            style={{ color: "var(--md-sys-color-error)" }}
            icon="delete"
          >
            Delete
          </Button>
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
