import { InputHTMLAttributes } from "react";
import Icon from "../Icon";
import "./form.css";

interface Props extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
  leadIcon?: string;
  supportText?: string;
}

const TextField = ({
  className,
  label,
  leadIcon,
  value,
  supportText,
  ...props
}: Props) => {
  const id = `f-id-${Math.random().toString(36).substring(2)}`;

  return (
    <div className="c-text-field__container">
      <div className="c-text-field">
        <label
          htmlFor={id}
          className={`c-text-field__label ${
            value == ""
              ? "c-text-field__label--no-value"
              : "c-text-field__label--has-value"
          }`}
        >
          {label}
        </label>
        {leadIcon && <Icon>{leadIcon}</Icon>}
        <input
          id={id}
          value={value}
          placeholder={label}
          className={`c-text-field__input ${className || ""}`}
          {...props}
        />
      </div>
      <div className="c-text-field__support-text">{supportText}</div>
    </div>
  );
};

export default TextField;
