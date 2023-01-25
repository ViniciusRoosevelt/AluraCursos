import { useState } from "react";
import { Button } from "../button";
import { DropDownMenuItem } from "../dropDownMenuItem";
import TextInput from "../textinput";
import "./style.css";

export const Form = (props: { addColaborador: any; times: string[] }) => {
  let [nome, setNome] = useState<string>("");
  let [cargo, setCargo] = useState<string>("");
  let [image, setImage] = useState<string>("");
  let [time, setTime] = useState<string>("Front-End");

  const onSave: React.FormEventHandler<HTMLFormElement> = (
    event: React.SyntheticEvent<EventTarget>
  ) => {
    if (nome == "" || cargo == "" || image == "") {
      alert("Preencha todos os campos!");
    }
    props.addColaborador({ nome, cargo, image, time });

    event.preventDefault();
    setNome("");
    setCargo("");
    setImage("");
    debugger;
  };
  return (
    <section className="form">
      <form onSubmit={onSave}>
        <h2>Preencha os dados para criar o card do colaborador</h2>
        <TextInput
          label="Nome"
          required={true}
          placeholder="Digite Seu Nome"
          value={nome}
          onChange={(event) => setNome(event.target!.value)}
        />
        <TextInput
          label="Cargo"
          placeholder="Digite Seu Cargo"
          required={true}
          value={cargo}
          onChange={(event) => setCargo(event.target!.value)}
        />
        <TextInput
          label="Image"
          placeholder="Informe o endereço da image"
          required={true}
          value={image}
          onChange={(event) => setImage(event.target!.value)}
        />
        <DropDownMenuItem
          required={true}
          label="Times"
          itens={props.times}
          value={time}
          onChange={(event) => setTime(event.target!.value)}
        />
        <Button>Criar Card</Button>
      </form>
    </section>
  );
};
