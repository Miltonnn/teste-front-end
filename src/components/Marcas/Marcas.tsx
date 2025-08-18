import './Marcas.scss';
import { marcas, type Marca } from './MarcasData';

const Marcas = () => {

    const MarcaItem = ({ marca }: { marca: Marca }) => (
        <img
            src={marca.imagem}
            alt={marca.nome}
            title={marca.nome}
        />
    );

    return (
        <section className='marcas-home'>
            <div className="marcas-home__content">
                <h2>Navegue por marcas</h2>
            </div>
            <div className="marcas-home__logos">
                {marcas.map((marca) => (
                    <MarcaItem key={marca.id} marca={marca} />
                ))}
            </div>
        </section>
    );
};

export default Marcas;
