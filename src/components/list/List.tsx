import { HTMLAttributes } from "react";
import "./list.css";

const List = ({
  children,
  className,
  ...props
}: HTMLAttributes<HTMLElement>) => (
  <ul className={`c-list ${className ?? ""}`} {...props}>
    {children}
  </ul>
);

export default List;
