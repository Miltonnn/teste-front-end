import { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronUp } from "@fortawesome/free-solid-svg-icons";
import "./BotaoFlutuante.scss";

const BotaoFlutuante = () => {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const toggleVisibility = () => {
            if (window.scrollY > 300) {
                setIsVisible(true);
            } else {
                setIsVisible(false);
            }
        };

        window.addEventListener("scroll", toggleVisibility);
        return () => window.removeEventListener("scroll", toggleVisibility);
    }, []);

    const BotaoFlutuante = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    };

    return (
        <button
            className={`botao-flutuante ${isVisible ? "show" : ""}`}
            onClick={BotaoFlutuante}
            aria-label="Voltar ao topo"
        >
            <FontAwesomeIcon icon={faChevronUp} />
        </button>
    );
};

export default BotaoFlutuante;
