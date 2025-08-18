import { useState, useEffect } from "react";
import logo from "../../assets/logo.png";
import "./Header.scss";

import HeaderTopIcons from "./HeaderTopIcons";
import HeaderSearch from "./HeaderSearch";
import HeaderIcons from "./HeaderIcons";
import HeaderLinks from "./HeaderLinks";

const Header = () => {
    const [menuOpen, setMenuOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    const toggleMenu = () => setMenuOpen(!menuOpen);

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 100);
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <header className={`header ${scrolled ? "header--fixed" : ""}`}>
            <div className="container header__container">
                <HeaderTopIcons />

                <div className="header__content">
                    <div className="header__logo">
                        <img src={logo} alt="Logo econverse" title="Logo econverse" />
                    </div>

                    {/* Hamburger mobile */}
                    <button
                        className={`header__hamburger ${menuOpen ? "active" : ""}`}
                        onClick={toggleMenu}
                        aria-label="Abrir menu"
                    >
                        <span></span>
                        <span></span>
                        <span></span>
                    </button>

                    <HeaderSearch className="header__input--desktop" />
                    <HeaderIcons className="header__icons--desktop" />
                </div>

                <HeaderLinks className="header__links--desktop" />

                {/* Menu mobile */}
                <div className={`header__menu ${menuOpen ? "active" : ""}`}>
                    <HeaderSearch />
                    <HeaderIcons />
                    <HeaderLinks />
                </div>
            </div>
        </header>
    );
};

export default Header;
