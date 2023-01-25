import { Form } from "./componnets/form";
import { Container, Typography } from "@mui/material/";
function App() {
  return (
    <>
      <Container component="article" maxWidth="sm">
        <Typography variant="h5" component="h2">
          Formulário de Cadastro
        </Typography>
        <Form />
      </Container>
    </>
  );
}

export default App;
