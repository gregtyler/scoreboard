import { HTMLAttributes } from "react";

import AppBar from "./navigation/AppBar";
import Page from "../pages/Page";

interface Props extends HTMLAttributes<HTMLDivElement> {
  backTo?: string;
}

const FullPageError = ({ title, children, backTo, ...props }: Props) => (
  <div {...props}>
    <AppBar
      variant="center"
      title={title || "An error occurred"}
      backTo={backTo}
    ></AppBar>
    <Page>{children}</Page>
  </div>
);

export default FullPageError;
