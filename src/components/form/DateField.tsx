import { format, parse } from "date-fns";
import { ChangeEvent } from "react";
import TextField from "./TextField";

interface Props {
  label: string;
  value: Date;
  onChange: (value: Date) => void;
}

const ISO_DATE_FORMAT = "yyyy-MM-dd";
const ISO_TIME_FORMAT = "HH:mm";

const DateField = ({ label, value, onChange }: Props) => {
  const setValue = (type: "date" | "time", val: string) => {
    const newValue = new Date(value);

    if (type === "date") {
      const newDate = parse(val, ISO_DATE_FORMAT, new Date());
      newValue.setDate(newDate.getDate());
      newValue.setMonth(newDate.getMonth());
      newValue.setFullYear(newDate.getFullYear());
    } else {
      const newDate = parse(val, ISO_TIME_FORMAT, new Date());
      newValue.setHours(newDate.getHours());
      newValue.setMinutes(newDate.getMinutes());
    }

    onChange(newValue);
  };

  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "2fr 1fr",
        gridGap: "8px",
      }}
    >
      <TextField
        required
        type="date"
        label={`${label} date`}
        value={format(value, ISO_DATE_FORMAT)}
        onChange={(e: ChangeEvent<HTMLInputElement>) =>
          setValue("date", e.target.value)
        }
      ></TextField>
      <TextField
        required
        type="time"
        label={`${label} time`}
        value={format(value, ISO_TIME_FORMAT)}
        onChange={(e: ChangeEvent<HTMLInputElement>) =>
          setValue("time", e.target.value)
        }
      ></TextField>
    </div>
  );
};

export default DateField;
