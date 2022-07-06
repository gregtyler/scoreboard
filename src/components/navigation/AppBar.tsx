import "./navigation.css";

import { HTMLAttributes, ReactNode } from "react";

import IconButton from "../button/IconButton";

interface Props extends HTMLAttributes<HTMLDivElement> {
  variant: "center" | "small" | "medium" | "large";
  backTo?: string;
  actions?: ReactNode;
}

const AppBar = ({
  actions,
  backTo,
  title,
  variant,
  className,
  ...props
}: Props) => (
  <div className={`c-app-bar ${className ?? ""}`} {...props}>
    <div className="c-app-bar__strip">
      {backTo && <IconButton icon="arrow_back" to={backTo}></IconButton>}
      {(variant === "center" || variant === "small") && (
        <h1
          className={`c-app-bar__title ${
            variant === "center" ? "c-app-bar__title--center" : ""
          }`}
        >
          {title}
        </h1>
      )}
      {actions}
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
