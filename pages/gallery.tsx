import {
  Alert,
  Avatar,
  Button,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  CardMedia,
  CircularProgress,
  Grid,
  IconButton,
  Typography,
} from "@mui/material";
import { GetServerSideProps } from "next/types";
import { parseCookies } from "nookies";
import { useContext, useEffect, useState } from "react";
import internal from "stream";
import { AppBarDifferent } from "../src/componnets/appbar";
import { CardDifferent } from "../src/componnets/card";
import { AuthContext } from "../src/context/AuthContext";
import { api } from "../src/service/api";
import { getApiClient } from "../src/service/axios";
type Card = {
  id: number;
  title: string;
  creator: "Vinicius";
  creator_id: number;
  description: string;
  image_url: string;
};
export default function Gallery() {
  const apiClient = getApiClient();
  const { user, changePage } = useContext(AuthContext);
  const [card, setCard] = useState<Card[]>([]);

  useEffect(() => {
    api.get("/images/").then((response) => {
      console.log(card), setCard(response.data);
    });
  }, []);
  const handleDeleteCard = (id_card: number, id_user: number) => {
    api.delete(`/api/users/${id_user}/images/${id_card}`);
    const copy = card.filter((item) => item.id != id_card);
    setCard(copy);
    alert("Card deleted");
  };
  return (
    <>
      <AppBarDifferent
        title={`Olá,${user?.username}`}
        buttonLabel={"Forms"}
        onClickButton={() => {
          changePage("/formimages");
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
        <Grid display="flex" flexDirection="row">
          {card.length === 0 ? (
            <Typography>Não há Cards Disponíveis</Typography>
          ) : (
            card.map((item) => (
              <CardDifferent
                image_url={item.image_url}
                alt={item.title}
                title={item.title}
                description={item.description}
                onClick={() => {
                  handleDeleteCard(item.id, item.creator_id);
                }}
              />
            ))
          )}
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
