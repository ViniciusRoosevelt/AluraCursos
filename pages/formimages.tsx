import { Button, FormControl, Grid, Typography } from "@mui/material";
import { error } from "console";
import { GetServerSideProps } from "next";
import { parseCookies } from "nookies";
import { useContext, useState } from "react";
import { AppBarDifferent } from "../src/componnets/appbar";
import { ButtonDiferent } from "../src/componnets/button";
import { TextFieldDifferent } from "../src/componnets/textfield";
import { AuthContext } from "../src/context/AuthContext";
import { getApiClient } from "../src/service/axios";

export default function FormImage() {
  const { changePage, user } = useContext(AuthContext);
  console.log(user?.id);
  const [selectedFile, setSelectedFile] = useState<any>();
  const [isFilePicked, setIsFilePicked] = useState(false);
  const [title, setTitle] = useState<String>("");
  const [description, setDescription] = useState<String>("");
  const apiClient = getApiClient();

  const changeHandler = (event: any) => {
    setSelectedFile(event.target.files[0]);
    console.log(event.target.files[0]);
    setIsFilePicked(true);
  };
  const handleSubmission = async () => {
    const formData = new FormData();
    formData.append("image_url", selectedFile);
    formData.append("title", `${title}`);
    formData.append("description", `${description}`);

    const response = await apiClient
      .post(`/api/users/${user?.id}/images/file/`, formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      })
      .then((response) => {
        if (response != undefined) {
          alert("Image Criada Com Sucesso");
          setIsFilePicked(false);
          setTitle("");
          setDescription("");
        }
      })
      .catch((error) => {
        console.log(error);
        if (error.response.status === 409) {
          alert("Title image already exists");
        }
        if (error.response.status === 401) {
          alert("Usuário não está logado"), changePage("/");
        }
        if (error.response.status === 400) {
          alert("Image format invalid");
        }
      });
  };
  return (
    <>
      <AppBarDifferent
        title={"Form Image"}
        buttonLabel={"Gallery"}
        onClickButton={() => {
          changePage("/gallery");
        }}
        children={
          <Button
            color="inherit"
            onClick={() => {
              changePage("/users");
            }}
          >
            Users
          </Button>
        }
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
            Form Image
          </Typography>
          <form
            onSubmit={(event) => {
              event.preventDefault();
              handleSubmission();
            }}
          >
            <FormControl>
              <TextFieldDifferent
                label="Título da Image"
                type="name"
                placeholder="Imagem Maneira"
                id="outlined-basic"
                fullwidth={true}
                margin="dense"
                size="small"
                value={title}
                Onchange={(event) => setTitle(event.target.value)}
              />
              <TextFieldDifferent
                label="Descrição"
                placeholder="Descrição Maneira"
                id="outlined-basic"
                fullwidth={true}
                margin="dense"
                size="small"
                type="name"
                value={description}
                Onchange={(event) => setDescription(event.target.value)}
              />
              <Button
                style={{ marginBottom: 12, marginTop: 12 }}
                variant="contained"
                component="label"
              >
                {isFilePicked == false
                  ? "Selecione Arquivo"
                  : "Arquivo Selecionado"}
                <input
                  type="file"
                  name="file"
                  onChange={changeHandler}
                  hidden
                />
              </Button>

              <ButtonDiferent
                type="submit"
                variant="contained"
                placeholder="Enviar Imagem"
              />
            </FormControl>
          </form>
        </Grid>
      </Grid>
    </>
  );
}

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const apiClient = getApiClient(ctx);
  const { ["next-auth"]: token } = parseCookies(ctx);

  if (!token) {
    return {
      redirect: {
        destination: "/",
        permanent: false,
      },
    };
  }

  // await apiClient.get('/users')

  return {
    props: {},
  };
};
