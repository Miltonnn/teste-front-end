import parceiro from "../../assets/parceiros/img-parceiros.webp";

export interface Parceiro {
    id: number;
    titulo: string;
    descricao: string;
    imagem: string;
    link: string;
}

export const parceiros: Parceiro[] = [
    {
        id: 1,
        titulo: "Parceiros",
        descricao: "Lorem ipsum dolor sit amet, consectetur",
        imagem: parceiro,
        link: "#",
    },
    {
        id: 2,
        titulo: "Parceiros",
        descricao: "Lorem ipsum dolor sit amet, consectetur",
        imagem: parceiro,
        link: "#",
    },
];
