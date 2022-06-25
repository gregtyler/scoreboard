import { HTMLAttributes } from "react";
import Icon from "../Icon";
import "./chip.css";

interface Props extends HTMLAttributes<HTMLButtonElement> {
  icon?: string;
}

const Chip = ({ children, icon, className, ...props }: Props) => (
  <button
    className={`c-chip ${icon ? "c-chip--with-icon" : ""} ${className ?? ""}`}
    {...props}
  >
    {icon && <Icon className="c-chip__icon">{icon}</Icon>}
    {children}
  </button>
);

export default Chip;
