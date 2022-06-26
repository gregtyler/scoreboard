import "./list.css";

import { HTMLAttributes, ReactNode } from "react";

interface Props extends HTMLAttributes<HTMLLIElement> {
  action?: ReactNode;
  avatar?: ReactNode;
}

const ListItem = ({ action, avatar, children, className, ...props }: Props) => (
  <li className={`c-list__item ${className ?? ""}`} {...props}>
    {avatar && <span className="c-list__item-avatar">{avatar}</span>}
    <span className="c-list__item-body">{children}</span>
    {action ?? ""}
  </li>
);

export default ListItem;
