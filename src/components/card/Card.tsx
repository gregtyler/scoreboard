import "./card.css";

import { HTMLAttributes, ReactNode } from "react";
import { Link } from "react-router-dom";

interface Props extends HTMLAttributes<HTMLDivElement> {
  buttons?: ReactNode;
  image?: string;
  linkTo?: string;
  orientation?: "vertical" | "horizontal";
}

const Card = ({
  buttons,
  children,
  className,
  image,
  linkTo,
  orientation = "horizontal",
  ...props
}: Props) => (
  <div
    className={`c-card c-card--${orientation} c-card--filled ${
      className ?? ""
    }`}
    {...props}
  >
    {image && (
      <div
        style={{ backgroundImage: `url(${image})` }}
        className="c-card__image"
      />
    )}
    <div className="c-card__content">{children}</div>

    {linkTo && <Link to={linkTo} className="c-card__cover"></Link>}

    {buttons && <div className="c-card__buttons">{buttons}</div>}
  </div>
);

export default Card;
