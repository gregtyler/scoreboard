import { HTMLAttributes } from "react";

const ButtonStrip = ({
  children,
  className,
  ...props
}: HTMLAttributes<HTMLDivElement>) => (
  <div className={`c-button-strip ${className ?? ""}`} {...props}>
    {children}
  </div>
);

export default ButtonStrip;
