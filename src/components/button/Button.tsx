import { ButtonHTMLAttributes } from "react";
import Icon from "../Icon";
import "./button.css";

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
  icon?: string;
  variant?: "elevated" | "filled" | "tonal" | "outlined";
}

const Button = ({ icon, variant, className, children, ...props }: Props) => (
  <button
    className={`c-button o-interactive ${variant ? "c-button--" + variant : ""} ${
      icon ? "c-button--with-icon" : ""
    } ${className ?? ""}`}
    {...props}
  >
    {icon && <Icon className="c-button__icon">{icon}</Icon>}
    {children}
  </button>
);

export default Button;
