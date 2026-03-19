import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";

interface HeaderSearchProps {
    className?: string;
}

const HeaderSearch = ({ className = "" }: HeaderSearchProps) => (
    <div className={`header__input ${className}`}>
        <input type="text" placeholder="O que você está buscando?" aria-label="Campo de busca de produtos" />
        <button type="button" aria-label="Pesquisar produtos">
            <FontAwesomeIcon icon={faMagnifyingGlass} />
        </button>
    </div>
);

export default HeaderSearch;
