import { getApiClient } from "./axios";
import { api } from "./api";
import jwt_decode from "jwt-decode";
type LoginRequestData = {
  username: string;
  password: string;
};

type User = {
  email: String;
  username: String;
};

export default async function LoginRequest(data: LoginRequestData) {
  try {
    const response = await api.post("http://localhost:3001/api/token/", {
      username: data.username,
      password: data.password,
    });
    const refresh = response.data["refresh"];
    const acess = response.data["access"];
    const user: User = jwt_decode(acess);
    console.log(user.email);
    console.log(acess)
    return {
      token: acess,
      user: {
        username: user.username,
        email: user.email,
      },
    };
  } catch (err) {
    console.log(err);
  }
}

export async function recoverUserInformation(token: string) {
  const user: User = jwt_decode(token);
  return {
    user: {
      username: user.username,
      email: user.email,
    },
  };
}
