import icon1 from "/images/icons/icon-tecnologia.png";
import icon2 from "/images/icons/icon-supermercados.png";
import icon3 from "/images/icons/icon-whiskey.png";
import icon4 from "/images/icons/icon-ferramentas.png";
import icon5 from "/images/icons/icon-cuidados-saude.png";
import icon6 from "/images/icons/icon-corrida.png";
import icon7 from "/images/icons/icon-moda.png";

export interface IconeHome {
  src: string;
  alt: string;
  title: string;
}

export const iconesHome: IconeHome[] = [
  { src: icon1, alt: "Tecnologia", title: "Tecnologia" },
  { src: icon2, alt: "Supermercado", title: "Supermercado" },
  { src: icon3, alt: "Bebidas", title: "Bebidas" },
  { src: icon4, alt: "Ferramentas", title: "Ferramentas" },
  { src: icon5, alt: "Saúde", title: "Saúde" },
  { src: icon6, alt: "Esportes e Fitness", title: "Esportes e Fitness" },
  { src: icon7, alt: "Moda", title: "Moda" },
];
