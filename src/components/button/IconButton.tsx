import { ButtonHTMLAttributes } from "react";
import Icon from "../Icon";
import Button from "./Button";
import "./button.css";

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
  icon: string;
}

const IconButton = ({ icon, ...props }: Props) => (
  <Button className="c-button--icon-only" {...props}>
    <Icon>{icon}</Icon>
  </Button>
);

export default IconButton;
