import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMinus, faPlus, faTimes } from "@fortawesome/free-solid-svg-icons";
import { type Produto } from "./ProdutosData";

interface ProdutosModalProps {
    produto: Produto;
    quantidade: number;
    onAlterarQuantidade: (delta: number) => void;
    onClose: () => void;
    formatarPreco: (preco: number) => string;
}

const ProdutosModal = ({
    produto,
    quantidade,
    onAlterarQuantidade,
    onClose,
    formatarPreco,
}: ProdutosModalProps) => {
    return (
        <div className="modal">
            <div className="modal__overlay" onClick={onClose}></div>

            <div className="modal__content">
                <button className="modal__close" onClick={onClose} aria-label="Fechar modal">
                    <FontAwesomeIcon icon={faTimes} />
                </button>

                <div className="modal__grid">
                    <div className="modal__image">
                        <img
                            src={produto.photo}
                            alt={produto.productName}
                            onError={(e) => {
                                (e.target as HTMLImageElement).src =
                                    "https://via.placeholder.com/500x500?text=Produto";
                            }}
                        />
                    </div>

                    <div className="modal__info">
                        <h2>{produto.productName}</h2>
                        <p>{produto.descriptionShort}</p>
                        <span>{formatarPreco(produto.price)}</span>

                        <div className="modal__btns">
                            <div className="quantidade">
                                <button onClick={() => onAlterarQuantidade(-1)} aria-label="Diminuir quantidade">
                                    <FontAwesomeIcon icon={faMinus} />
                                </button>
                                <span>{quantidade}</span>
                                <button onClick={() => onAlterarQuantidade(1)} aria-label="Aumentar quantidade">
                                    <FontAwesomeIcon icon={faPlus} />
                                </button>
                            </div>

                            <button
                                className="btn--primary"
                                title={`Comprar ${produto.productName} (${quantidade} un.)`}
                            >
                                Comprar
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProdutosModal;
