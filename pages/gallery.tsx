import { Button, Card, Grid, Typography } from "@mui/material";
import { GetServerSideProps } from "next/types";
import { parseCookies } from "nookies";
import { useContext, useEffect, useState } from "react";
import { AppBarDifferent } from "../src/componnets/appbar";
import { CardDifferent } from "../src/componnets/card";
import { AuthContext } from "../src/context/AuthContext";
import { api } from "../src/service/api";
import { getApiClient } from "../src/service/axios";
import jwt_decode from "jwt-decode";
type Card = {
  id: number;
  title: string;
  creator: string;
  creator_id: number;
  description: string;
  image_url: string;
};

type UserToken = {
  user_id: string;
  email: String;
  username: String;
};

type PageProps = {
  cardFetch: Card[];
  user_id: number;
};
export default function Gallery({ cardFetch, user_id }: PageProps) {
  const { user, changePage } = useContext(AuthContext);
  const [card, setCard] = useState<Card[]>([]);
  const apiClient = getApiClient();
  useEffect(() => {
    setCard(cardFetch);
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
        title={!user?.username ? `Seja Bem-vindo` : `Olá,${user?.username}`}
        buttonLabel={"Forms"}
        onClickButton={() => {
          changePage("/formimages");
        } } children={<Button
          color="inherit"
          onClick={() => {
            changePage("/users");
          }}
        >
          Users
        </Button>}      />

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

  const user: UserToken = jwt_decode(token);

  const response: any = await fetch(
    `http://localhost:3001/api/users/${user.user_id}/images/`,
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  ).catch((error) => {
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
  const card = await response.json();
  return {
    props: {
      cardFetch: card,
    },
  };
};
