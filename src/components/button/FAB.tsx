import { MouseEventHandler } from "react";
import Button from "./Button";
import IconButton from "./IconButton";

interface Props {
  icon: string;
  onClick: MouseEventHandler<Element> | undefined;
}

const FAB = ({ icon, onClick }: Props) => (
  <IconButton
    className="c-button--fab"
    icon={icon}
    onClick={onClick}
  ></IconButton>
);

export default FAB;
