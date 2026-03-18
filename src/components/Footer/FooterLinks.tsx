import { footerLinkGroups } from "./FooterData";

const FooterLinks = () => (
    <div className="footer-links__group">
        {footerLinkGroups.map((group, index) => (
            <div key={index} className="footer__links-box">
                <h3>{group.title}</h3>
                <ul className="footer__links">
                    {group.links.map((link, idx) => (
                        <li key={idx}>
                            <a title={link.label} href={link.href}>{link.label}</a>
                        </li>
                    ))}
                </ul>
            </div>
        ))}
    </div>
);

export default FooterLinks;
