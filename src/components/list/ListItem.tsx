import "./list.css";

import { HTMLAttributes, ReactNode } from "react";

import Avatar from "../avatar/Avatar";

interface Props extends HTMLAttributes<HTMLLIElement> {
  action?: ReactNode;
  avatar?: ReactNode;
  avatarColor?: string;
}

const ListItem = ({
  action,
  avatar = "",
  avatarColor = "",
  children,
  className,
  ...props
}: Props) => (
  <li className={`c-list__item ${className ?? ""}`} {...props}>
    {(avatar || avatarColor) && (
      <Avatar colour={avatarColor ?? ""}>{avatar}</Avatar>
    )}
    <span className="c-list__item-body">{children}</span>
    {action ?? ""}
  </li>
);

export default ListItem;
