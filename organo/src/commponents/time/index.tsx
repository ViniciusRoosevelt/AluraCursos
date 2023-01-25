import { colaborador } from "../../App";
import { CardTime } from "../card";
import "./style.css";

export function Time(props: {
  nomeTime: string;
  corPrimaria: string;
  corSecundaria: string;
  colaboradores: colaborador[];
}) {
  return props.colaboradores.length > 0 ? (
    <section
      className="time-container"
      style={{ backgroundColor: props.corSecundaria }}
    >
      <h3 style={{ borderColor: props.corPrimaria }}>{props.nomeTime}</h3>

      <div className="colaborador">
        {props.colaboradores.map((colaborador) => (
          <CardTime key={colaborador.nome} colaborador={colaborador} />
        ))}
      </div>
    </section>
  ) : null;
}
