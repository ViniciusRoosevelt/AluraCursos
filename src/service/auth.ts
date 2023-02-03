import { getApiClient } from "./axios";
import { api } from "./api";
import jwt_decode from "jwt-decode";
type LoginRequestData = {
  username: string;
  password: string;
};
type RegisterRequestData = {
  username: string;
  password: string;
  password2: string;
  email: string;
  firstname: string;
  lastname: string;
};

type User = {
  user_id: string;
  email: String;
  username: String;
};

export default async function LoginRequest(data: LoginRequestData) {
  try {
    const response = await api.post("api/token/", {
      username: data.username,
      password: data.password,
    });
    if (response.status == 404) {
      return null;
    }
    const refresh = response.data["refresh"];
    const acess = response.data["access"];
    const user: User = jwt_decode(acess);
    console.log(user.email);
    console.log(acess);
    return {
      token: acess,
      user: {
        id: user.user_id,
        username: user.username,
        email: user.email,
      },
    };
  } catch (err) {
    console.log(err);
  }
}

export async function RegisterRequest(data: RegisterRequestData) {
  const response = await api
    .post("api/register/", {
      username: data.username,
      password: data.password,
      password2: data.password2,
      email: data.email,
      first_name: data.firstname,
      last_name: data.lastname,
    })
    .catch((error) => {
      if (error.response.status === 400) {
        alert("Campos inválidos tente novamente");
      }
    });
}

export async function recoverUserInformation(token: string) {
  const user: User = jwt_decode(token);
  return {
    user: {
      id: user.user_id,
      username: user.username,
      email: user.email,
    },
  };
}
