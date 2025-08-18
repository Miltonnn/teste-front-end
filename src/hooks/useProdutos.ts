import { useState, useEffect } from "react";

export interface Produto {
    id: number;
    productName: string;
    descriptionShort: string;
    price: number;
    photo: string;
}

export const useProdutos = () => {
    const [produtos, setProdutos] = useState<Produto[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const fetchProdutos = async () => {
            try {
                const res = await fetch(
                    "https://corsproxy.io/?" +
                    encodeURIComponent(
                        "https://app.econverse.com.br/teste-front-end/junior/tecnologia/lista-produtos/produtos.json"
                    )
                );

                if (!res.ok) throw new Error(`Erro HTTP: ${res.status}`);

                const data = await res.json();
                if (!data.success || !data.products) throw new Error("Estrutura da API inválida");

                setProdutos(
                    data.products.map((p: any, i: number) => ({
                        id: i + 1,
                        productName: p.productName || "Produto sem nome",
                        descriptionShort: p.descriptionShort || "Descrição não disponível",
                        price: Number(p.price) || 0,
                        photo: p.photo || "https://via.placeholder.com/300x300?text=Produto",
                    }))
                );
            } catch (err) {
                console.error(err);
                setError("Não foi possível carregar os produtos.");
            } finally {
                setLoading(false);
            }
        };

        fetchProdutos();
    }, []);

    return { produtos, loading, error };
};
