import { Button } from "@mui/material";
import { FormEventHandler, MouseEventHandler } from "react";
type ButtonStyle = {
  type: string;
  variant: string;
  placeholder: string;
  onClick?: MouseEventHandler<HTMLButtonElement> | undefined

};
export const ButtonDiferent = ({ type, variant, placeholder,onClick }: ButtonStyle) => {
  return (
    <Button onClick={onClick}  type="submit" variant="contained">
      {placeholder}
    </Button>
  );
};
