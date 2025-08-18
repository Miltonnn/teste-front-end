import { icons } from "./HeaderData";

interface HeaderIconsProps {
    className?: string;
}

const HeaderIcons = ({ className = "" }: HeaderIconsProps) => (
    <div className={`header__icons ${className}`}>
        {icons.map((icon, index) => (
            <img key={index} src={icon.src} alt={icon.alt} title={icon.title} />
        ))}
    </div>
);

export default HeaderIcons;
