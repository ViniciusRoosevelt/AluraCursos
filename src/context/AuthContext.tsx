import Router from "next/router";
import { parseCookies, setCookie } from "nookies";
import { createContext, useEffect, useState } from "react";
import { api } from "../service/api";
import LoginRequest, { recoverUserInformation } from "../service/auth";
type User = {
  username: string;
  email: string;
};
type LoginData = {
  username: string;
  password: string;
};
type AuthContextType = {
  isAuthenticated: boolean;
  user: User;
  LogIn: (data: LoginData) => Promise<void>;
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
    console.log(token)


    
    api.defaults.headers["Authorization"] = `Bearer ${token}`;

    setUser(user);

    Router.push('/teste')
  }
  return (
    <AuthContext.Provider value={{ user, isAuthenticated, LogIn }}>
      {children}
    </AuthContext.Provider>
  );
}
