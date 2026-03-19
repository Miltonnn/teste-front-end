import Header from "./components/Header/Header";
import Hero from "./components/Hero/Hero";
import IconesHome from "./components/IconesHome/IconesHome";
import { Produtos } from "./components/Produtos/Produtos";
import Parceiros from "./components/Parceiros/Parceiros";
import Marcas from "./components/Marcas/Marcas";
import Newsletter from "./components/Newsletter/Newsletter";
import BotaoFlutuante from "./components/BotaoFlutuante/BotaoFlutuante";
import BotoesRedesSociais from "./components/BotoesRedesSociais/BotoesRedesSociais";
import Footer from "./components/Footer/Footer";
import "./styles/global.scss";

export default function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <IconesHome />
        <Produtos mostrarLinks={true} />
        <Parceiros />
        <Produtos />
        <Parceiros />
        <Marcas />
        <Produtos />
        <Newsletter />
      </main>
      <BotaoFlutuante />
      <BotoesRedesSociais />
      <Footer />
    </>
  );
}
