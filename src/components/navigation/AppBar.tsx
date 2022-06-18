import { HTMLAttributes } from "react";
import { Link } from "react-router-dom";
import IconButton from "../button/IconButton";
import "./navigation.css";

interface Props extends HTMLAttributes<HTMLDivElement> {
  variant: "center" | "small" | "medium" | "large";
  backTo?: string;
}

const AppBar = ({ title, backTo, variant, className, ...props }: Props) => (
  <div className={`c-app-bar ${className}`} {...props}>
    <div className="c-app-bar__strip">
      {backTo && (
        <Link to={backTo}>
          <IconButton icon="arrow_back" type="button"></IconButton>
        </Link>
      )}
      {(variant === "center" || variant === "small") && (
        <h1
          className={`c-app-bar__title ${
            variant === "center" ? "c-app-bar__title--center" : ""
          }`}
        >
          {title}
        </h1>
      )}
    </div>

    {(variant === "medium" || variant === "large") && (
      <h1
        className={variant === "large" ? "headline-medium" : "headline-small"}
      >
        {title}
      </h1>
    )}
  </div>
);

export default AppBar;
