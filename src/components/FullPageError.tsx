import { HTMLAttributes } from "react";

const FullPageError = ({
  title,
  children,
  ...props
}: HTMLAttributes<HTMLDivElement>) => (
  <div {...props}>
    <h1 className="display-medium">{title || "An error occurred"}</h1>
    {children}
  </div>
);

export default FullPageError;
