import { useMemo, useState } from "react";

import { usePlayers } from "../../data/db";
import Button from "../button/Button";
import IconButton from "../button/IconButton";
import List from "../list/List";
import ListItem from "../list/ListItem";
import Modal, { Props as ModalProps } from "./Modal";

interface Props extends ModalProps {
  playerIds: string[];
  onSave: (playerId: string | null) => void;
}

const WinnerModal = ({ playerIds, onSave, onClose, ...props }: Props) => {
  const [ids] = useState(playerIds);
  const allPlayers = usePlayers();

  const players = useMemo(() => {
    return allPlayers.filter((x) => ids.includes(x._id));
  }, [ids, allPlayers]);

  const handleSave = (playerId: string | null) => {
    onSave(playerId);
    onClose();
  };

  return (
    <Modal
      title="Select winner"
      buttons={
        <>
          <Button onClick={onClose}>Cancel</Button>
        </>
      }
      onClose={onClose}
      {...props}
    >
      <List>
        <ListItem
          action={<IconButton onClick={() => handleSave(null)} icon="check" />}
        >
          No winner
        </ListItem>
        {players.map((player) => (
          <ListItem
            key={player._id}
            avatar={player.name.substring(0, 1)}
            action={
              <IconButton onClick={() => handleSave(player._id)} icon="check" />
            }
          >
            {player.name}
          </ListItem>
        ))}
      </List>
    </Modal>
  );
};

export default WinnerModal;
