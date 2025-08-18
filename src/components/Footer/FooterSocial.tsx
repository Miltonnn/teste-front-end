import { redesSociais } from "./FooterData";

const FooterSocial = () => (
    <div className="footer__social">
        {redesSociais.map((rede) => (
            <a
                key={rede.id}
                href={rede.link}
                target="_blank"
                rel="noopener noreferrer"
                title={rede.nome}
            >
                <img src={rede.icone} alt={rede.nome} />
            </a>
        ))}
    </div>
);

export default FooterSocial;
