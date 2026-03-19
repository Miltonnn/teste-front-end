import { useState, useEffect } from "react";

export interface Produto {
  id: number;
  productName: string;
  descriptionShort: string;
  price: number;
  photo: string;
}

// CACHE GLOBAL
let cache: Produto[] | null = null;
let promise: Promise<Produto[]> | null = null;

export const useProdutos = () => {
  const [produtos, setProdutos] = useState<Produto[]>(cache || []);
  const [loading, setLoading] = useState(!cache);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (cache) {
      setProdutos(cache);
      setLoading(false);
      return;
    }

    if (!promise) {
      // Em desenvolvimento usa proxy (CORS), em produção usa API da Vercel
      const url = import.meta.env.DEV
        ? "https://corsproxy.io/?" +
          encodeURIComponent(
            "https://app.econverse.com.br/teste-front-end/junior/tecnologia/lista-produtos/produtos.json",
          )
        : "/api/produtos";

      promise = fetch(url)
        .then((res) => {
          if (!res.ok) throw new Error(`Erro HTTP: ${res.status}`);
          return res.json();
        })
        .then((data) => {
          if (!data.success || !data.products) {
            throw new Error("Estrutura da API inválida");
          }

          const mapped = data.products.map((p: any, i: number) => ({
            id: i + 1,
            productName: p.productName || "Produto sem nome",
            descriptionShort: p.descriptionShort || "Descrição não disponível",
            price: Number(p.price) || 0,
            photo:
              p.photo || "https://via.placeholder.com/300x300?text=Produto",
          }));

          cache = mapped;
          return mapped;
        });
    }

    promise
      .then((data) => {
        setProdutos(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error(err);
        setError("Não foi possível carregar os produtos.");
        setLoading(false);
      });
  }, []);

  return { produtos, loading, error };
};
