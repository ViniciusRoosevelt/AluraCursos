import { TextField } from "@mui/material";
import { ChangeEvent } from "react";
type InputStyle = {
  id: any;
  fullwidth?: boolean;
  margin?: "normal" | "dense" | "none";
  placeholder?: string;
  label?: string;
  size: "small" | "medium" | undefined;
  value: any;
  Onchange: (
    event: ChangeEvent<HTMLTextAreaElement | HTMLInputElement>
  ) => void;
  type: string;
};
export const TextFieldDifferent = ({
  id,
  fullwidth,
  margin,
  placeholder,
  label,
  size,
  value,
  Onchange,

  type,
}: InputStyle) => {
  return (
    <TextField
      onChange={Onchange}
      type={type}
      label={label}
      id={id}
      fullWidth={fullwidth}
      margin={margin}
      placeholder={placeholder}
      size={size}
      value={value}
    />
  );
};
