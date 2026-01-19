import { InputHTMLAttributes } from "react";

const TableCellInput = ({
  value,
  ...props
}: InputHTMLAttributes<HTMLInputElement>) => (
  <td className="c-table__cell--no-padding">
    <input
      {...props}
      className="c-text-field__input"
      style={{ padding: "0 12px", textAlign: "right" }}
      value={value}
    />
  </td>
);

export default TableCellInput;
