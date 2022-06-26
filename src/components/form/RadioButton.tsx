import { InputHTMLAttributes } from "react";

interface Props extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
}

const RadioButton = ({ label, className, ...props }: Props) => {
  const id = `f-id-${Math.random().toString(36).substring(2)}`;

  return (
    <div className="c-radio__container">
      <input
        type="radio"
        id={id}
        className={`c-radio ${className ?? ""}`}
        {...props}
      />{" "}
      <label htmlFor={id} className="c-radio__label">
        {label}
      </label>
    </div>
  );
};

export default RadioButton;
