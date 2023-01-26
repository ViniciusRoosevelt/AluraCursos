import { Form } from "./componnets/form";
import { Container, Typography } from "@mui/material/";
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
function App() {
  const onSave = (dados: any) => {
    console.log(dados);
  };
  return (
    <>
      <Container component="article" maxWidth="sm">
        <Typography align="center" variant="h3" component="h2">
          Formulário de Cadastro
        </Typography>
        <Form onChange={onSave} />
      </Container>
    </>
  );
}

export default App;
