import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import "./BotoesRedesSociais.scss";

const BotoesRedesSociais = () => {
  return (
    <div className="botoes-redes">
      <a
        className="icons__social"
        href="https://github.com/Miltonnn/teste-front-end"
        target="_blank"
        title="Acessar projeto no Github"
        rel="noopener noreferrer"
      >
        <FontAwesomeIcon icon={faGithub} />
      </a>
    </div>
  );
};

export default BotoesRedesSociais;
