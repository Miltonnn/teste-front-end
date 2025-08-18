import { links } from "./HeaderData";

interface HeaderLinksProps {
    className?: string;
}

const HeaderLinks = ({ className = "" }: HeaderLinksProps) => (
    <div className={`header__links ${className}`}>
        <ul>
            {links.map((link, index) => (
                <li key={index}>
                    <a href={link.href} title={link.label} className="header__links--box">
                        {link.icon && (
                            <img
                                src={typeof link.icon === "string" ? link.icon : link.icon.src}
                                alt={`${link.label} ícone`}
                                className="header__links--icon"
                            />
                        )}
                        {link.label}
                    </a>
                </li>
            ))}
        </ul>
    </div>
);

export default HeaderLinks;
