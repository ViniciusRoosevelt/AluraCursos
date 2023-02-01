import { Button } from "@mui/material";
import { FormEventHandler } from "react";
type ButtonStyle = {
  type: string;
  variant: string;
  placeholder: string;
};
export const ButtonDiferent = ({ type, variant, placeholder }: ButtonStyle) => {
  return (
    <Button type="submit" variant="contained">
      {placeholder}
    </Button>
  );
};
