import { useState } from "react";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMinus, faPlus, faTimes } from "@fortawesome/free-solid-svg-icons";
import "./Produtos.scss";
import "@splidejs/splide/dist/css/splide.min.css";

import produto1 from "../../assets/produtos/img-produto.webp";
import produto2 from "../../assets/produtos/img-produto.webp";
import produto3 from "../../assets/produtos/img-produto.webp";
import produto4 from "../../assets/produtos/img-produto.webp";
import produto5 from "../../assets/produtos/img-produto.webp";

interface Link {
    href: string;
    label: string;
    icon?: string;
}

interface Produto {
    id: number;
    nome: string;
    descricao: string;
    preco: string;
    imagem: string;
    link: string;
}

const links: Link[] = [
    { href: "#", label: "celular" },
    { href: "#", label: "acessórios" },
    { href: "#", label: "tablets" },
    { href: "#", label: "NOTEBOOKS" },
    { href: "#", label: "TVs" },
    { href: "#", label: "Ver todos" },
];

const produtos: Produto[] = [
    {
        id: 1,
        nome: "Smartphone X",
        descricao: "Descrição breve do produto.",
        preco: "R$ 2.499,99",
        imagem: produto1,
        link: "#",
    },
    {
        id: 2,
        nome: "Notebook Y",
        descricao: "Descrição breve do produto.",
        preco: "R$ 4.199,99",
        imagem: produto2,
        link: "#",
    },
    {
        id: 3,
        nome: "Tablet Z",
        descricao: "Descrição breve do produto.",
        preco: "R$ 1.899,99",
        imagem: produto3,
        link: "#",
    },
    {
        id: 4,
        nome: "Tablet W",
        descricao: "Descrição breve do produto.",
        preco: "R$ 1.899,99",
        imagem: produto4,
        link: "#",
    },
    {
        id: 5,
        nome: "Tablet K",
        descricao: "Descrição breve do produto.",
        preco: "R$ 1.899,99",
        imagem: produto5,
        link: "#",
    },
];

interface ProdutosProps {
    mostrarLinks?: boolean;
}


export const Produtos = ({ mostrarLinks = false }: ProdutosProps) => {
    const [produtoSelecionado, setProdutoSelecionado] = useState<Produto | null>(null);

    const abrirModal = (produto: Produto) => {
        setProdutoSelecionado(produto);
    };

    const fecharModal = () => {
        setProdutoSelecionado(null);
    };

    const [quantidade, setQuantidade] = useState(1);

    const aumentar = () => setQuantidade((prev) => prev + 1);
    const diminuir = () => setQuantidade((prev) => (prev > 1 ? prev - 1 : 1));


    return (
        <section className="produtos-home">
            <div className="produtos-home__title">
                <span></span>
                <h2>Produtos relacionados</h2>
                <span></span>
            </div>

            {mostrarLinks ? (
                <div className="produtos-home__link">
                    <ul>
                        {links.map((link, index) => (
                            <li key={index}>
                                <a href={link.href} title={link.label}>{link.label}</a>
                            </li>
                        ))}
                    </ul>
                </div>
            ) : (
                <div className="produtos-home__link">
                    <a className="produtos__item" href="#" title="Ver todos os produtos" >
                        Ver todos
                    </a>
                </div>
            )}

            <div className="produtos-home__carousel">
                <Splide
                    options={{
                        perPage: 4,
                        gap: "10px",
                        breakpoints: {
                            1200: { perPage: 3 },
                            900: { perPage: 2 },
                            600: { perPage: 1 },
                        },
                        pagination: false,
                        arrows: true,
                        drag: "free",
                    }}
                >
                    {produtos.map((produto) => (
                        <SplideSlide key={produto.id}>
                            <div className="card-produto">
                                <div className="card-produto__img">
                                    <img src={produto.imagem} alt={produto.nome} />
                                </div>
                                <div className="card-produto__info">
                                    <h3>{produto.nome}</h3>
                                    <p>{produto.descricao}</p>
                                    <span>{produto.preco}</span>
                                    <button
                                        className="btn--secondary"
                                        onClick={() => abrirModal(produto)}
                                    >
                                        Comprar
                                    </button>
                                </div>
                            </div>
                        </SplideSlide>
                    ))}
                </Splide>
            </div>

            {/* Modal */}
            {produtoSelecionado && (
                <div className="modal">
                    <div className="modal__overlay" onClick={fecharModal}></div>
                    <div className="modal__content">
                        <button className="modal__close" onClick={fecharModal} aria-label="Fechar modal">
                            <FontAwesomeIcon icon={faTimes} />
                        </button>
                        <div className="modal__grid">
                            <div className="modal__image">
                                <img src={produtoSelecionado.imagem} alt={produtoSelecionado.nome} />
                            </div>
                            <div className="modal__info">
                                <h2>{produtoSelecionado.nome}</h2>
                                <p>{produtoSelecionado.descricao}</p>
                                <span>{produtoSelecionado.preco}</span>
                                <div className="modal__btns">
                                    {/* Quantidade */}
                                    <div className="quantidade">
                                        <button onClick={diminuir} aria-label="Diminuir quantidade">
                                            <FontAwesomeIcon icon={faMinus} />
                                        </button>
                                        <span>{quantidade}</span>
                                        <button onClick={aumentar} aria-label="Aumentar quantidade">
                                            <FontAwesomeIcon icon={faPlus} />
                                        </button>
                                    </div>
                                    {/* Botão de compra */}
                                    <button
                                        className="btn--primary"
                                        title={`Comprar ${produtoSelecionado.nome} (${quantidade} un.)`}
                                    >
                                        Comprar
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </section>
    );
};
