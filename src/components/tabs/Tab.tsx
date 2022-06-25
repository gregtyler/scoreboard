import { HTMLAttributes } from "react";

const Tab = ({ children, ...props }: HTMLAttributes<HTMLDivElement>) => (
  <div {...props}>{children}</div>
);

export default Tab;
