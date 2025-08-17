import './Marcas.scss';

import marca1 from '../../assets/marcas/img-marcas.webp';
import marca2 from '../../assets/marcas/img-marcas.webp';
import marca3 from '../../assets/marcas/img-marcas.webp';
import marca4 from '../../assets/marcas/img-marcas.webp';
import marca5 from '../../assets/marcas/img-marcas.webp';

interface Marca {
    id: number;
    nome: string;
    imagem: string;
}

const marcas: Marca[] = [
    { id: 1, nome: "Marca da Econverse", imagem: marca1 },
    { id: 2, nome: "Marca da Econverse", imagem: marca2 },
    { id: 3, nome: "Marca da Econverse", imagem: marca3 },
    { id: 4, nome: "Marca da Econverse", imagem: marca4 },
    { id: 5, nome: "Marca da Econverse", imagem: marca5 },
];

const Marcas = () => {
    return (
        <div className='marcas-home'>
            <div className="marcas-home__content">
                <h2>Navegue por marcas</h2>
            </div>
            <div className="marcas-home__logos">
                {marcas.map((marca) => (
                    <img
                        key={marca.id}
                        src={marca.imagem}
                        alt={marca.nome}
                        title={marca.nome}
                    />
                ))}
            </div>
        </div>
    )
}

export default Marcas