import { Button, TextField, Switch, FormControlLabel } from "@mui/material/";
import { useState } from "react";

export const Form = (props: { onChange: any }) => {
  const [nome, setName] = useState<string>("");
  const [sobrenome, setSobrenome] = useState<string>("");
  const [cpf, setCpf] = useState<string>("");
  const [novidade, setNovidade] = useState<boolean>(true);
  const [promocoes, setPromocoes] = useState<boolean>(true);

  const [erros, setErros] = useState({
    cpf: { valido: true, erroMenssage: "" },
    nome: { valido: true, erroMenssage: "" },
    sobrenome: { valido: true, erroMenssage: "" },
  });

  const onSave = (event: any) => {
    event.preventDefault();
    console.log(
      `Nome: ${nome}, Sobrenome: ${sobrenome}, CPF: ${cpf}, Novidade: ${novidade},Promocoes: ${promocoes}`
    );
    props.onChange({ nome, sobrenome, cpf, novidade, promocoes });
    setName("");
    setSobrenome("");
    setCpf("");
    setNovidade(true);
    setPromocoes(true);
  };

  return (
    <div className="form">
      <form onSubmit={onSave}>
        <TextField
          value={nome}
          onChange={(event) => {
            setName(event.target.value);
          }}
          margin="normal"
          fullWidth
          error={!erros.nome.valido}
          helperText={erros.nome.erroMenssage}
          type="text"
          label="Name"
          required
          placeholder="Name"
          variant="outlined"
          onBlur={(event) => {
            if (event.target.value.length <= 3) {
              setErros({
                ...erros,
                nome: {
                  valido: false,
                  erroMenssage: "Sobrenome deve conter mais de 3 digitos",
                },
              });
            } else {
              setErros({
                ...erros,
                nome: {
                  valido: true,
                  erroMenssage: "",
                },
              });
            }
          }}
        />

        <TextField
          value={sobrenome}
          fullWidth
          error={!erros.sobrenome.valido}
          helperText={erros.sobrenome.erroMenssage}
          onChange={(event) => {
            setSobrenome(event.target.value);
          }}
          onBlur={(event) => {
            if (event.target.value.length <= 5) {
              setErros({
                ...erros,
                sobrenome: {
                  valido: false,
                  erroMenssage: "Sobrenome deve conter mais de 5 digitos",
                },
              });
            } else {
              setErros({
                ...erros,
                sobrenome: {
                  valido: true,
                  erroMenssage: "",
                },
              });
            }
          }}
          margin="normal"
          type="text"
          label="Sobrenome"
          placeholder="Sobrenome"
          variant="outlined"
        />

        <TextField
          value={cpf}
          fullWidth
          onChange={(event) => {
            setCpf(event.target.value);
          }}
          error={!erros.cpf.valido}
          helperText={!erros.cpf.valido ? erros.cpf.erroMenssage : ""}
          onBlur={(event) => {
            if (event.target.value.length < 11) {
              setErros({
                ...erros,
                cpf: {
                  valido: false,
                  erroMenssage: "Cpf deve conter 11 digítos",
                },
              });
            } else {
              setErros({ ...erros, cpf: { valido: true, erroMenssage: "" } });
            }
          }}
          margin="normal"
          type="text"
          label="CPF"
          placeholder="CPF"
          variant="outlined"
        />

        <FormControlLabel
          onChange={(event) => {
            console.log(event);
          }}
          label="Novidades"
          control={
            <Switch
              onChange={(event) => {
                setNovidade(event.target.checked);
              }}
              checked={novidade}
              defaultChecked={novidade}
              name="text"
              placeholder="Novidades"
              color="primary"
            />
          }
        />
        <FormControlLabel
          label="Promoções"
          control={
            <Switch
              onChange={(event) => {
                setPromocoes(event.target.checked);
              }}
              checked={promocoes}
              defaultChecked={promocoes}
              name="text"
              placeholder="Promoções"
              color="primary"
            />
          }
        />

        <Button color="primary" variant="contained" type="submit">
          Cadastrar
        </Button>
      </form>
    </div>
  );
};
