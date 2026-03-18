import marca1 from "/images/marcas/img-marcas.webp";
import marca2 from "/images/marcas/img-marcas.webp";
import marca3 from "/images/marcas/img-marcas.webp";
import marca4 from "/images/marcas/img-marcas.webp";
import marca5 from "/images/marcas/img-marcas.webp";

export interface Marca {
  id: number;
  nome: string;
  imagem: string;
}

export const marcas: Marca[] = [
  { id: 1, nome: "Marca da Econverse", imagem: marca1 },
  { id: 2, nome: "Marca da Econverse", imagem: marca2 },
  { id: 3, nome: "Marca da Econverse", imagem: marca3 },
  { id: 4, nome: "Marca da Econverse", imagem: marca4 },
  { id: 5, nome: "Marca da Econverse", imagem: marca5 },
];
