import { HTMLAttributes, ReactNode } from "react";
import "./card.css";

const CardGrid = ({
  children,
  className,
  ...props
}: HTMLAttributes<HTMLDivElement>) => (
  <div className={`c-card-grid ${className || ""}`} {...props}>
    {children}
  </div>
);

export default CardGrid;
