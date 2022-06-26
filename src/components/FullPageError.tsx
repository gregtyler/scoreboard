import { HTMLAttributes } from "react";

import AppBar from "./navigation/AppBar";

interface Props extends HTMLAttributes<HTMLDivElement> {
  backTo?: string;
}

const FullPageError = ({ title, children, backTo, ...props }: Props) => (
  <div {...props}>
    <AppBar
      variant="large"
      title={title || "An error occurred"}
      backTo={backTo}
    ></AppBar>
    {children}
  </div>
);

export default FullPageError;
