import Router from "next/router";
import { parseCookies, setCookie } from "nookies";
import { createContext, useEffect, useState } from "react";
import { api } from "../service/api";
import LoginRequest, {
  recoverUserInformation,
  RegisterRequest,
} from "../service/auth";
type User = {
  username: string;
  email: string;
};
type LoginData = {
  username: string;
  password: string;
};
type RegisterData = {
  username: string;
  password: string;
  password2: string;
  email: string;
  firstname: string;
  lastname: string;
};
type AuthContextType = {
  isAuthenticated: boolean;
  user: User;
  LogIn: (data: LoginData) => Promise<void>;
  Register: (data: RegisterData) => Promise<void>;
};

export const AuthContext = createContext({} as AuthContextType);

export function AuthProvider({ children }: any) {
  const [user, setUser] = useState<any | null>(null);
  const isAuthenticated = !!user;

  useEffect(() => {
    const { "nextauth.token": token } = parseCookies();

    if (token) {
      recoverUserInformation(token).then((response) => {
        setUser(response.user);
      });
    }
  }, []);

  async function LogIn({ username, password }: LoginData) {
    const reseponse = await LoginRequest({ username, password });
    const token = reseponse?.token;
    const user = reseponse?.user;
    setCookie(undefined, "next-auth", token, {
      maxAge: 60 * 5, // 5 minutos
    });
    console.log(token);

    api.defaults.headers["Authorization"] = `Bearer ${token}`;

    setUser(user);

    Router.push("/teste");
  }
  async function Register({
    username,
    password,
    password2,
    email,
    firstname,
    lastname,
  }: RegisterData) {

    const response = await RegisterRequest({
      username,
      password,
      password2,
      email,
      firstname,
      lastname,
    });
    Router.push("/");
  }
  return (
    <AuthContext.Provider value={{ user, isAuthenticated, LogIn, Register }}>
      {children}
    </AuthContext.Provider>
  );
}
