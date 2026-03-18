import "./Parceiros.scss";
import { parceiros, type Parceiro } from "./ParceirosData";

const Parceiros = () => {
  const ParceiroItem = ({ item }: { item: Parceiro }) => (
    <div
      className="parceiros-home__image"
      style={{ backgroundImage: `url(${item.imagem})` }}
    >
      <div className="parceiros-home__content">
        <h2>{item.titulo}</h2>
        <p>{item.descricao}</p>
        <a
          href={item.link}
          className="btn--primary"
          title={`Confira nossos ${item.titulo.toLowerCase()}`}
        >
          Confira
        </a>
      </div>
    </div>
  );

  return (
    <section className="container parceiros-home">
      {parceiros.map((item) => (
        <ParceiroItem key={item.id} item={item} />
      ))}
    </section>
  );
};

export default Parceiros;
