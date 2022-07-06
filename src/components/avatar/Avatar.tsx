import "./avatar.css";

import { ReactNode } from "react";

interface Props {
  children?: ReactNode;
  colour?: string;
}

const Avatar = ({ children, colour }: Props) => (
  <span className="c-avatar" style={colour ? { backgroundColor: colour } : {}}>
    {children}
  </span>
);

export default Avatar;
