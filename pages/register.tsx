import { Typography, FormControl, Grid } from "@mui/material";
import { Router } from "next/router";
import { useState, useContext } from "react";
import { AppBarDifferent } from "../src/componnets/appbar";

import { ButtonDiferent } from "../src/componnets/button";
import { TextFieldDifferent } from "../src/componnets/textfield";
import { AuthContext } from "../src/context/AuthContext";

type User = {
  username: string;
  password: string;
  password2?: string;
  email: string;
  firstname: string;
  lastname: string;
};
export default function RegisterPage() {
  const { Register, changePage } = useContext(AuthContext);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [password2, setPassword2] = useState("");

  const [email, setEmail] = useState("");
  const [firstname, setFirstName] = useState("");
  const [lastname, setLastName] = useState("");

  async function handleRegister({
    username,
    password,
    password2,
    email,
    firstname,
    lastname,
  }: User) {
    if (password != password2) {
      return alert("Passwords not match");
    }
    return await Register({
      username,
      password,
      password2,
      email,
      firstname,
      lastname,
    });
  }

  return (
    <>
      <AppBarDifferent
        title={"Register"}
        buttonLabel={"Log-In"}
        onClickButton={() => {
          changePage("/");
        }}
      />
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
            Register
          </Typography>
          <form
            onSubmit={(event) => {
              event.preventDefault();
              handleRegister({
                username,
                password,
                password2,
                email,
                firstname,
                lastname,
              });
            }}
          >
            <FormControl>
              <TextFieldDifferent
                label="Username"
                type="name"
                placeholder="Petrus"
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
              <TextFieldDifferent
                label="Confirm Password"
                placeholder="********"
                id="outlined-basic"
                fullwidth={true}
                margin="dense"
                size="small"
                type="password"
                value={password2}
                Onchange={(event) => setPassword2(event.target.value)}
              />
              <TextFieldDifferent
                label="Email"
                placeholder="jonhdoe@gmail.com"
                id="outlined-basic"
                fullwidth={true}
                margin="dense"
                size="small"
                type="text"
                value={email}
                Onchange={(event) => setEmail(event.target.value)}
              />
              <TextFieldDifferent
                label="Primeiro Nome"
                placeholder="Presto"
                id="outlined-basic"
                fullwidth={true}
                margin="dense"
                size="small"
                type="text"
                value={firstname}
                Onchange={(event) => setFirstName(event.target.value)}
              />

              <TextFieldDifferent
                label="Ultimo Nome"
                placeholder="Louis"
                id="outlined-basic"
                fullwidth={true}
                margin="dense"
                size="small"
                type="text"
                value={lastname}
                Onchange={(event) => setLastName(event.target.value)}
              />

              <ButtonDiferent
                type="submit"
                variant="contained"
                placeholder="Register"
              />
            </FormControl>
          </form>
        </Grid>
      </Grid>
    </>
  );
}
