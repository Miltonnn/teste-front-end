import { iconsTopo } from "./HeaderData";

const HeaderTopIcons = () => (
    <div className="header__itens">
        {iconsTopo.map((icon, index) => (
            <div key={index} className="header__itens-box">
                <div className="header__itens__icon">
                    <img src={icon.src} alt={icon.alt} title={icon.title} />
                </div>
                <div className="header__itens__text">
                    <p>{icon.before}<span>{icon.highlight}</span>{icon.after}</p>
                </div>
            </div>
        ))}
    </div>
);

export default HeaderTopIcons;
