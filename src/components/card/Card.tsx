import { HTMLAttributes, ReactNode } from "react";
import "./card.css";

interface Props extends HTMLAttributes<HTMLDivElement> {
  buttons?: ReactNode;
  image?: string;
}

const Card = ({ buttons, image, children, className, ...props }: Props) => (
  <div className={`c-card c-card--filled ${className ?? ""}`} {...props}>
    {image && (
      <div
        style={{ backgroundImage: `url(${image})` }}
        className="c-card__image"
      />
    )}
    <div className="c-card__content">{children}</div>

    {buttons && <div className="c-card__buttons">{buttons}</div>}
  </div>
);

export default Card;
