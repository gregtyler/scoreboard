import "./form.css";

import { InputHTMLAttributes, ReactNode } from "react";

interface Props extends InputHTMLAttributes<HTMLElement> {
  label: string;
  prefix?: ReactNode;
  suffix?: ReactNode;
  supportText?: string;
  options?: [string, string][];
  backgroundColor?: string;
}

const TextField = ({
  className,
  label,
  prefix,
  suffix,
  value,
  supportText,
  options,
  backgroundColor,
  ...props
}: Props) => {
  const id = `f-id-${Math.random().toString(36).substring(2)}`;

  return (
    <div className="c-text-field__container">
      <label
        className="c-text-field"
        htmlFor={id}
        style={backgroundColor ? { "--background": backgroundColor } : {}}
      >
        <span
          className={`c-text-field__label ${
            value == ""
              ? "c-text-field__label--no-value"
              : "c-text-field__label--has-value"
          }`}
        >
          {label}
        </span>
        {prefix}
        {options ? (
          <select
            id={id}
            value={value}
            placeholder={label}
            className={`c-text-field__input ${
              value === "" ? "c-text-field__select--empty" : ""
            } ${className || ""}`}
            {...props}
          >
            {value === "" && (
              <option value="" disabled hidden>
                {label}
              </option>
            )}
            {options.map(([optionValue, optionLabel]) => (
              <option key={optionValue} value={optionValue}>
                {optionLabel}
              </option>
            ))}
          </select>
        ) : (
          <input
            id={id}
            value={value}
            placeholder={label}
            className={`c-text-field__input ${className || ""}`}
            {...props}
          />
        )}
        {suffix}
      </label>
      <div className="c-text-field__support-text">{supportText}</div>
    </div>
  );
};

export default TextField;
