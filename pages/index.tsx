import { Typography, FormControl, Grid } from "@mui/material";
import { ButtonDiferent } from "../src/componnets/button";
import { TextFieldDifferent } from "../src/componnets/textfield";



import { useState, useContext } from "react";
import { AuthContext } from "../src/context/AuthContext";



type SignInRequest = {
  username: string;
  password: string;
};
export default function Home() {
  const { LogIn } = useContext(AuthContext);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  async function handleSignIn({ username, password }: SignInRequest) {
    await LogIn({ username, password });
  }

  return (
    <Grid
      spacing={0}
      style={{ minHeight: "100vh", background: "#1c1917" }}
      display="flex"
      flexDirection="column"
      justifyContent="center"
      justifyItems="center"
      alignItems="center"
    >
      <Grid
        style={{
          borderRadius: 12,
          width: 500,
          height: 500,
          background: "#27272a",
        }}
        item
        xs={3}
        display="flex"
        flexDirection="column"
        justifyContent="center"
        justifyItems="center"
        alignItems="center"
      >
        <Typography
          style={{ color: "#e5e5e5" }}
          textAlign="center"
          variant="h4"
          component="h1"
        >
          Sign-In
        </Typography>
        <form
          onSubmit={(event) => {
            event.preventDefault();
            handleSignIn({ username, password });
          }}
        >
          <FormControl>
            <TextFieldDifferent
              label="username"
              type="name"
              placeholder="Teste"
              id="outlined-basic"
              fullwidth={true}
              margin="dense"
              size="small"
              value={username}
              Onchange={(event) => {
                setUsername(event.target.value);
              }}
            />
            <TextFieldDifferent
              label="Password"
              placeholder="********"
              id="outlined-basic"
              fullwidth={true}
              margin="dense"
              size="small"
              type="password"
              value={password}
              Onchange={(event) => setPassword(event.target.value)}
            />
            <ButtonDiferent type="submit" variant="contained" placeholder="Sign-In" />
          </FormControl>
        </form>
      </Grid>
    </Grid>
  );
}
