
import { colaborador } from "../../App";
import "./style.css";

export const CardTime = (props: {
  colaborador: colaborador
}) => {
  return (
    <div className="colaborador">
      <div className="cabecalho">
        <img src={props.colaborador!.image} alt="avatar" />
        <div className="rodape">
          <h4>{props.colaborador.nome}</h4>
          <h5>{props.colaborador.cargo}</h5>
        </div>
      </div>
    </div>
  );
};
