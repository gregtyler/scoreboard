import "./list.css";

import { HTMLAttributes, ReactNode } from "react";

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
      <span
        className="c-list__item-avatar"
        style={avatarColor ? { backgroundColor: avatarColor } : {}}
      >
        {avatar}
      </span>
    )}
    <span className="c-list__item-body">{children}</span>
    {action ?? ""}
  </li>
);

export default ListItem;
