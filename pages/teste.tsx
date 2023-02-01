import { GetServerSideProps } from "next/types";
import { parseCookies } from "nookies";
import { useContext } from "react";
import { AuthContext } from "../src/context/AuthContext";
import { getApiClient } from "../src/service/axios";

export default function Teste() {
  const { user } = useContext(AuthContext);
  return (<div>{user.email}</div>);
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
