import "./list.css";

import { HTMLAttributes } from "react";

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
