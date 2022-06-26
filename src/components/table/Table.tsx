import "./table.css";

import { TableHTMLAttributes } from "react";

const Table = ({
  className,
  children,
  ...props
}: TableHTMLAttributes<HTMLTableElement>) => {
  return (
    <div className="c-table__wrapper">
      <table className={`c-table ${className ?? ""}`} {...props}>
        {children}
      </table>
    </div>
  );
};

export default Table;
