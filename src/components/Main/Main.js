import Promo from "../Promo/Promo";
import Navigation from "../Navigation/Navigation";
import AboutProject from "../AboutProject/AboutProject";
import Techs from "../Tech/Tech";
import Portfolio from "../Portfolio/Portfolio";

function Main() {
  return (
    <main className="main">
      <Promo />
      <Navigation />
      <AboutProject />
      <Techs />
      <Portfolio />
    </main>
  );
}
export default Main;
