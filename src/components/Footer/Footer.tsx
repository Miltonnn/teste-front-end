import './Footer.scss';
import FooterLogo from './FooterLogo';
import FooterSocial from './FooterSocial';
import FooterLinks from './FooterLinks';

const Footer = () => {
    return (
        <footer>
            <div className="footer">
                <div className="container footer__content">
                    <div className="footer__box">
                        <FooterLogo />
                        <FooterSocial />
                    </div>
                    <FooterLinks />
                </div>
            </div>
            <div className="footer-copyright">
                <p>
                    &copy; {new Date().getFullYear()} Econverse. Desenvolvido por{' '}
                    <a
                        href="https://github.com/Miltonnn"
                        target="_blank"
                        rel="noopener noreferrer"
                        title="Perfil do desenvolvedor Milton Andrade"
                    >
                        <span>@Milton Andrade</span>
                    </a>
                </p>
            </div>
        </footer>
    );
};

export default Footer;
