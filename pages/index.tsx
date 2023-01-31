import {
  Typography, FormControl,
  Grid
} from "@mui/material";
import { useState } from "react";
import { ButtonDiferent } from "../src/componnets/button";
import { TextFieldDifferent } from "../src/componnets/textfield";
type SignInRequest = {
  Email: string;
  Password: string;
};
export default function Home() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function handleSignIn({ Email, Password }: SignInRequest) {
    console.log(Email, Password);
    // setEmail(Email)
    // setPassword(Password)
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
        <form onSubmit={(event) => {
          event.preventDefault();
          console.log(email,password)
        }}>
        <FormControl >
          <TextFieldDifferent
            label="Email Address"
            type="email"
            placeholder="johndoe@gmail.com"
            id="outlined-basic"
            fullwidth={true}
            margin="dense"
            size="small"
            value={email}
            Onchange={(event) => {
              setEmail(event.target.value);
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
          <ButtonDiferent />
        </FormControl>
        </form>
      </Grid>
    </Grid>
  );
}
