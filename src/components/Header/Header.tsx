import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import logo from "../../assets/logo.png";
import "./Header.scss";


const iconsModules = import.meta.glob("../../assets/icons/*.png", { eager: true });


const icons = Object.values(iconsModules).map((module: any, index) => ({
    src: module.default,
    alt: `Icone ${index + 1}`,
}));

const Header: React.FC = () => {
    return (
        <header className="header">
            <div className="header__content">
                <div className="header__logo">
                    <img src={logo} alt="Logo econverse" title="Logo econverse" />
                </div>
                <div className="header__input">
                    <input
                        type="text"
                        placeholder="O que você está buscando?"
                        aria-label="Pesquisa"
                    />
                    <button type="button">
                        <FontAwesomeIcon icon={faMagnifyingGlass} />
                    </button>
                </div>
                <div className="header__icons">
                    {icons.map((icon, index) => (
                        <img key={index} src={icon.src} alt={icon.alt} title={icon.alt} />
                    ))}
                </div>
            </div>
        </header>
    );
};

export default Header;
