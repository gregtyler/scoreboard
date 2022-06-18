import { HTMLAttributes, ReactNode } from "react";

interface Props {
  children: ReactNode | undefined;
}

const Icon = ({ children, className, ...props }: HTMLAttributes<HTMLSpanElement>) => (
  <span className={`material-symbols-outlined ${className}`} {...props}>
    {children}
  </span>
);

export default Icon;
