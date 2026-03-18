import icon1 from "/images/icons/icon-01.png";
import icon2 from "/images/icons/icon-02.png";
import icon3 from "/images/icons/icon-03.png";
import icon4 from "/images/icons/icon-04.png";
import icon5 from "/images/icons/icon-05.png";
import icon6 from "/images/icons/icon-06.png";
import icon7 from "/images/icons/icon-07.png";
import icon8 from "/images/icons/icon-08.png";

export interface Icon {
  src: string;
  alt: string;
  title: string;
}

export interface IconTopo extends Icon {
  before: string;
  highlight: string;
  after: string;
}

export interface Link {
  href: string;
  label: string;
  icon?: Icon | string;
}

export const icons: Icon[] = [
  { src: icon1, alt: "Loja", title: "Loja" },
  { src: icon2, alt: "Avaliação", title: "Avaliação" },
  { src: icon3, alt: "Usuário", title: "Usuário" },
  { src: icon4, alt: "Carrinho", title: "Carrinho" },
];

export const iconsTopo: IconTopo[] = [
  {
    src: icon5,
    alt: "Compra 100% segura",
    title: "Compra 100% segura",
    before: "Compra ",
    highlight: "100% segura",
    after: "",
  },
  {
    src: icon6,
    alt: "Frete grátis acima de R$ 200",
    title: "Frete grátis acima de R$ 200",
    before: "",
    highlight: "Frete grátis",
    after: " acima de R$ 200",
  },
  {
    src: icon7,
    alt: "Parcele suas compras",
    title: "Parcele suas compras",
    before: "",
    highlight: "Parcele",
    after: " suas compras",
  },
];

export const links: Link[] = [
  { href: "#", label: "Todas Categorias" },
  { href: "#", label: "Supermercado" },
  { href: "#", label: "Livros" },
  { href: "#", label: "Moda" },
  { href: "#", label: "Lançamentos" },
  { href: "#", label: "Ofertas do dia" },
  { href: "#", label: "Assinatura", icon: icon8 },
];
