# 🛒 Teste Front-End - Econverse

Este projeto foi desenvolvido como parte do **processo seletivo da Econverse**.  
A aplicação foi construída em **React com TypeScript** e **Sass**, com foco em componentização, organização do código, boas práticas de SEO e experiência do usuário.

---

## 🚀 Tecnologias utilizadas
- ⚛️ **React + TypeScript**  
- 🎨 **Sass** (estilos modulares por componente)  
- 🔍 **Boas práticas de SEO**  
- 📦 **Splide.js** para carrosséis  
- 🌐 **Proxy para consumo de API** (resolvendo CORS em ambiente local)  

---

## 📂 Estrutura do projeto

O projeto foi totalmente **componentizado**, cada parte da interface possui seu próprio diretório e arquivo de estilos.  
Segue a estrutura detalhada com destaques das principais mudanças:

```text
src/
├─ assets/                # Imagens, ícones e logotipos
│  ├─ icones/
│  ├─ marcas/
│  └─ parceiros/
├─ components/
│  ├─ Header/
│  │  ├─ Header.tsx
│  │  ├─ Header.scss
│  │  ├─ IconTopo.tsx          # Subcomponente dos ícones do topo
│  │  └─ headerData.ts         # Dados dos ícones e links
│  ├─ Footer/
│  │  ├─ Footer.tsx
│  │  ├─ Footer.scss
│  │  └─ footerData.ts         # Dados de links e redes sociais
│  ├─ IconesHome/
│  │  ├─ IconesHome.tsx
│  │  ├─ IconesHome.scss
│  │  └─ IconeHomeItem.tsx     # Subcomponente de cada ícone
│  ├─ Marcas/
│  │  ├─ Marcas.tsx
│  │  ├─ Marcas.scss
│  │  └─ marcasData.ts         # Dados das marcas
│  ├─ Newsletter/
│  │  ├─ Newsletter.tsx
│  │  └─ Newsletter.scss
│  ├─ Parceiros/
│  │  ├─ Parceiros.tsx
│  │  ├─ Parceiros.scss
│  │  └─ parceirosData.ts      # Dados dos parceiros
│  └─ Produtos/
│     ├─ Produtos.tsx           # Componente principal
│     ├─ ProdutosModal.tsx      # Modal de produto
│     ├─ Produtos.scss
│     ├─ ProdutoData.ts         # Tipos e links do produto
│     └─ @types/
│        └─ splidejs__react-splide.d.ts
├─ hooks/
│  └─ useProdutos.ts            # Hook para consumo da API de produtos
└─ App.tsx

````
## 🎯 Funcionalidades e Destaques
- ✅ **Header fixo (HeaderFIXED):** facilita a navegação sem precisar rolar até o topo.  
- ✅ **Componentização completa:** cada componente isolado, com seu próprio arquivo de estilos Sass.  
- ✅ **Boas práticas de SEO:** HTML semântico, uso correto de atributos `alt` em imagens e estrutura clara.  
- ✅ **Carrosséis responsivos** implementados com **Splide.js**, adaptando-se a diferentes telas.  
- ✅ **Consumo de API via proxy**, garantindo funcionamento local mesmo com restrições de CORS.  
- ✅ **Organização de dados** em arquivos separados (`headerData.ts`, `footerData.ts`, `marcasData.ts`, `parceirosData.ts`, `ProdutoData.ts`) para maior clareza e manutenção.  
- ✅ **Modal de produtos** com controle de quantidade, botão de compra e fallback de imagens.  
- ✅ **Reutilização de subcomponentes** (ex.: `IconeHomeItem.tsx`) para maior modularidade e manutenção mais fácil.  
- ✅ **Estilos reutilizáveis e consistentes:** uso de mixins (`@mixin button`) e classes utilitárias (`.container`) em todo o projeto.

## ⚙️ Como rodar o projeto localmente

1. Clone este repositório:
   ```bash
   git clone https://github.com/seu-usuario/teste-front-end.git

2. Entre na pasta do projeto:
   ```bash
   cd teste-front-end
   
3. Instale as dependências:
   ```bash
   npm install
   
4. Execute o projeto:
   ```bash
   npm run dev
   

## 📝 Conclusão

Este projeto foi uma ótima oportunidade para aplicar conhecimentos em **React, TypeScript e Sass**, reforçando boas práticas de **componentização, organização de código e SEO**.  



