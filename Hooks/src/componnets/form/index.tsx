import { Button, TextField, Switch, FormControlLabel,  } from "@mui/material/";

export const Form = () => {
  return (
    <div className="form">
      <form>
        <TextField
          margin="normal"
          fullWidth
          id="outlined-basic"
          type="text"
          label="Name"
          required
          placeholder="Name"
          variant="outlined"
        />

        <TextField
          fullWidth
          margin="normal"
          id="outlined-basic"
          type="text"
          label="Email"
          placeholder="Sobrenome"
          variant="outlined"
        />

        <TextField
          fullWidth
          margin="normal"
          id="outlined-basic"
          type="text"
          label="CPF"
          placeholder="CPF"
          variant="outlined"
        />

        <FormControlLabel
          label="Novidades"
          control={
            <Switch
              defaultChecked
              name="text"
              placeholder="Novidades"
              color="primary"
            />
          }
        />
        <FormControlLabel
          label="Promoções"
          control={
            <Switch
              defaultChecked
              name="text"
              placeholder="Promoções"
              color="primary"
            />
          }
        />

        <Button color="primary" variant="contained" type="submit">
          Cadastrar
        </Button>
      </form>
    </div>
  );
};
