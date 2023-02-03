import { AppBarDifferent } from "../src/componnets/appbar";
import { AuthContext } from "../src/context/AuthContext";
import { useContext } from "react";
import { Box, Button, Grid } from "@mui/material";
import { DataGrid, GridColDef, GridValueGetterParams } from "@mui/x-data-grid";
import { GetServerSideProps } from "next";
import { getApiClient } from "../src/service/axios";
import { parseCookies } from "nookies";
import jwt_decode from "jwt-decode";
type UserToken = {
  user_id: string;
  email: String;
  username: String;
};
export default function UserPage({ users }: any) {
  const { user, changePage } = useContext(AuthContext);
  const columns: GridColDef[] = [
    { field: "id", headerName: "ID", width: 90 },
    {
      field: "username",
      headerName: "Username",
      width: 150,
      editable: false,
    },
    {
      field: "email",
      headerName: "Email",
      width: 150,
      editable: false,
    },
    {
      field: "first_name",
      headerName: "FirstName",
      width: 110,
      editable: false,
    },
    {
      field: "last_name",
      headerName: "LastName",
      width: 160,
    },
  ];
  return (
    <>
      <AppBarDifferent
        title={"Usuarios"}
        buttonLabel={"Galeria"}
        onClickButton={() => {
          changePage("/gallery");
        }}
        children={
          <Button
            color="inherit"
            onClick={() => {
              changePage("/formimages");
            }}
          >
            Form
          </Button>
        }
      />

      <Grid

        style={{ minHeight: "100vh", background: "#1c1917" }}
        display="flex"
        flexDirection="column"
        justifyContent="center"
        justifyItems="center"
        alignItems="center"
      >
        <Box sx={{ height: 400, width: "100%" }}>
          <DataGrid
            rows={users}
            columns={columns}
            pageSize={5}
            rowsPerPageOptions={[5]}
            checkboxSelection
            disableSelectionOnClick
            experimentalFeatures={{ newEditingApi: true }}
          />
        </Box>
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

  const user: UserToken = jwt_decode(token);

  const response: any = await fetch(`http://localhost:3001/api/users/`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  }).catch((error) => {
    if (error.response.status === 401) {
      alert("Usuário não está logado");
      return {
        redirect: {
          destination: "/",
          permanent: false,
        },
      };
    }
  });
  const users = await response.json();
  return {
    props: {
      users: users,
    },
  };
};
