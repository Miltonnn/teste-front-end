import instagramIcon from '../../assets/icons/instagram.png';
import facebookIcon from '../../assets/icons/facebook.png';
import linkedinIcon from '../../assets/icons/linkedin.png';

export interface Social {
    id: number;
    nome: string;
    link: string;
    icone: string;
}

export const redesSociais: Social[] = [
    { id: 1, nome: "Facebook", link: "https://facebook.com", icone: facebookIcon },
    { id: 2, nome: "Linkedin", link: "https://linkedin.com", icone: linkedinIcon },
    { id: 3, nome: "Instagram", link: "https://instagram.com", icone: instagramIcon },
];

export interface FooterLinkGroup {
    title: string;
    links: { label: string; href: string }[];
}

export const footerLinkGroups: FooterLinkGroup[] = [
    {
        title: "Intitucional",
        links: [
            { label: "Sobre Nós", href: "#" },
            { label: "Movimento", href: "#" },
            { label: "Trabalhe conosco", href: "#" },
        ],
    },
    {
        title: "Ajuda",
        links: [
            { label: "Suporte", href: "#" },
            { label: "Fale Conosco", href: "#" },
            { label: "Perguntas Frequentes", href: "#" },
        ],
    },
    {
        title: "Termos",
        links: [
            { label: "Termos e Condições", href: "#" },
            { label: "Política de Privacidade", href: "#" },
            { label: "Troca e Devolução", href: "#" },
        ],
    },
];
