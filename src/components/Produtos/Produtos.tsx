import { useState } from "react";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMinus, faPlus, faTimes } from "@fortawesome/free-solid-svg-icons";
import "./Produtos.scss";
import "@splidejs/splide/dist/css/splide.min.css";
import { useProdutos, type Produto } from "../../hooks/useProdutos";


const links = ["celular", "acessórios", "tablets", "NOTEBOOKS", "TVs", "Ver todos"];

interface ProdutosProps {
    mostrarLinks?: boolean;
}

export const Produtos = ({ mostrarLinks = false }: ProdutosProps) => {
    const { produtos, loading, error } = useProdutos();
    const [produtoSelecionado, setProdutoSelecionado] = useState<Produto | null>(null);
    const [quantidade, setQuantidade] = useState(1);

    const formatarPreco = (preco: number) =>
        new Intl.NumberFormat("pt-BR", { style: "currency", currency: "BRL" }).format(preco / 100);

    const alterarQuantidade = (delta: number) =>
        setQuantidade((q) => Math.max(1, q + delta));

    if (loading || error) {
        return (
            <section className="produtos-home">
                <div className="produtos-home__title">
                    <span></span><h2>Produtos relacionados</h2><span></span>
                </div>
                <div className={loading ? "loading-container" : "error-container"}>
                    <p>{loading ? "Carregando produtos..." : error}</p>
                    {error && <button onClick={() => window.location.reload()} className="btn--secondary">Recarregar</button>}
                </div>
            </section>
        );
    }

    return (
        <section className="container produtos-home">
            <div className="produtos-home__title">
                <span></span><h2>Produtos relacionados</h2><span></span>
            </div>

            <div className="produtos-home__link">
                {mostrarLinks ? (
                    <ul>{links.map((label, i) => <li key={i}><a href="#" title={label}>{label}</a></li>)}</ul>
                ) : (
                    <a className="produtos__item" href="#" title="Ver todos os produtos">Ver todos</a>
                )}
            </div>

            <div className="produtos-home__carousel">
                <Splide options={{ perPage: 4, gap: "10px", breakpoints: { 1200: { perPage: 3 }, 900: { perPage: 2 }, 600: { perPage: 1 } }, pagination: false, arrows: true, drag: "free" }}>
                    {produtos.map((p) => (
                        <SplideSlide key={p.id}>
                            <div className="card-produto">
                                <div className="card-produto__img">
                                    <img src={p.photo} alt={p.productName} onError={(e) => { (e.target as HTMLImageElement).src = "https://via.placeholder.com/300x300?text=Produto"; }} />
                                </div>
                                <div className="card-produto__info">
                                    <h3>{p.productName}</h3>
                                    <p>{p.descriptionShort}</p>
                                    <span>{formatarPreco(p.price)}</span>
                                    <button className="btn--secondary" onClick={() => { setProdutoSelecionado(p); setQuantidade(1); }}>
                                        Comprar
                                    </button>
                                </div>
                            </div>
                        </SplideSlide>
                    ))}
                </Splide>
            </div>

            {produtoSelecionado && (
                <div className="modal">
                    <div className="modal__overlay" onClick={() => setProdutoSelecionado(null)}></div>
                    <div className="modal__content">
                        <button className="modal__close" onClick={() => setProdutoSelecionado(null)}>
                            <FontAwesomeIcon icon={faTimes} />
                        </button>
                        <div className="modal__grid">
                            <div className="modal__image">
                                <img src={produtoSelecionado.photo} alt={produtoSelecionado.productName} onError={(e) => { (e.target as HTMLImageElement).src = "https://via.placeholder.com/500x500?text=Produto"; }} />
                            </div>
                            <div className="modal__info">
                                <h2>{produtoSelecionado.productName}</h2>
                                <p>{produtoSelecionado.descriptionShort}</p>
                                <span>{formatarPreco(produtoSelecionado.price)}</span>
                                <div className="modal__btns">
                                    <div className="quantidade">
                                        <button onClick={() => alterarQuantidade(-1)}><FontAwesomeIcon icon={faMinus} /></button>
                                        <span>{quantidade}</span>
                                        <button onClick={() => alterarQuantidade(1)}><FontAwesomeIcon icon={faPlus} /></button>
                                    </div>
                                    <button className="btn--primary" title={`Comprar ${produtoSelecionado.productName} (${quantidade} un.)`}>Comprar</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </section>
    );
};
