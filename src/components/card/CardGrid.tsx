import "./card.css";

import { HTMLAttributes, ReactNode } from "react";

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
