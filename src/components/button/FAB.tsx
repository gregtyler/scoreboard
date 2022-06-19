import { HTMLAttributes } from "react";
import IconButton from "./IconButton";

interface Props extends HTMLAttributes<HTMLButtonElement> {
  icon: string;
}

const FAB = ({ icon, onClick, ...props }: Props) => (
  <IconButton
    className="c-button--fab"
    icon={icon}
    onClick={onClick}
    {...props}
  ></IconButton>
);

export default FAB;
