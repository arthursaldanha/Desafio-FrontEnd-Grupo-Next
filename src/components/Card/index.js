import "./style.css";
import { GrFormClose, GrFormCheckmark } from "react-icons/gr";

const Card = ({ type, value, firstColor, secondColor }) => {
  return (
    <div
      className="card"
      style={{
        backgroundImage: `linear-gradient(to top, ${firstColor}, ${secondColor})`,
      }}
    >
      <div className="c-card">
        <h2 className="plan-type">{type}</h2>
        <div className="c-value">
          <p className="title-card-value">
            Para negócios que estão iniciando sua escala na internet
          </p>
          <div className="card-value">
            <span>R$</span>
            <span>{value}</span>
            <span>/mês</span>
          </div>
          <div className="sign-plan">
            <p>assine agora</p>
          </div>
        </div>
        <div className="c-descriptions">
          <div className="description">
            <GrFormCheckmark className="svg-check" />
            <div>
              <span>10 perfis</span>
            </div>
          </div>
          <div className="description">
            <GrFormCheckmark className="svg-check" />
            <div>
              <span>500 impressões digitais por dia</span>
            </div>
          </div>
          <div className="description">
            <GrFormClose className="svg-close" />
            <div>
              <span>Compartilhamento de perfis</span>
            </div>
          </div>
          <div className="description">
            <GrFormClose className="svg-close" />
            <div>
              <span>Contas de membros</span>
            </div>
          </div>
          <div className="description">
            <GrFormCheckmark className="svg-check" />
            <div>
              <span>Suporte em português do Brasil com pessoas reais</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
