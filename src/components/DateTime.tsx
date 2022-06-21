import { TimeHTMLAttributes } from "react";

interface Props extends TimeHTMLAttributes<HTMLTimeElement> {
  dateStyle?: string;
  timeStyle?: string;
}

const DateTime = ({ dateTime, dateStyle, timeStyle, ...props }: Props) => {
  const dateFormatter = new Intl.DateTimeFormat("en-GB", {
    dateStyle,
    timeStyle,
  } as Intl.DateTimeFormatOptions);

  return (
    <span {...props}>{dateFormatter.format(new Date(dateTime || ""))}</span>
  );
};

export default DateTime;
