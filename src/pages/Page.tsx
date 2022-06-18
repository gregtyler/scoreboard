import { HTMLAttributes } from "react";

const Page = ({
  className,
  children,
  ...props
}: HTMLAttributes<HTMLDivElement>) => (
  <div className={`o-canvas ${className ?? ""}`} {...props}>
    {children}
  </div>
);

export default Page;
