import { createTheme, Theme, ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import theme from "../src/theme";
import { AppProps } from "next/app";
import { NextComponentType, NextPageContext } from "next";
import { AuthProvider } from "../src/context/AuthContext";

export interface CustomPageProps {
  // <--- your custom page props
  darkTheme: Theme;
  Component: NextComponentType<NextPageContext, any, any>;
  pageProps: CustomPageProps;
}
export default function MyApp({
  Component,
  pageProps,
}: AppProps<CustomPageProps>) {
  const darkTheme = createTheme({
    palette: {
      mode: "dark",
    },
  });

  return (
    <ThemeProvider theme={darkTheme}>
        <CssBaseline />
        <AuthProvider>
        <Component {...pageProps} />
      </AuthProvider>
      </ThemeProvider>
  );
}
