import "./IconesHome.scss";
import { iconesHome, type IconeHome } from "./IconesHomeData";

const IconesHome = () => {

    const IconeHomeItem = ({ icone }: { icone: IconeHome }) => (
        <div className="icones-home__item">
            <div className="icones-home__item-img">
                <img src={icone.src} alt={icone.alt} title={icone.title} />
            </div>
            <span>{icone.title}</span>
        </div>
    );

    return (
        <section className="container">
            <div className="icones-home">
                {iconesHome.map((icone, index) => (
                    <IconeHomeItem key={index} icone={icone} />
                ))}
            </div>
        </section>
    );
};

export default IconesHome;
