import React from "react";

import Promo from "./Promo/Promo";
import NavTab from "./NavTab/NavTab";
import AboutProject from "./AboutProject/AboutProject";
import Techs from "./Techs/Techs";
import AboutMe from "./AboutMe/AboutMe";
import Header from "../General/Header/Header";
import Footer from "../General/Footer/Footer";
import "./Main.css";

function Main(props) {
  return (
    <div className="page__container">
      <Header isLoggedIn={props.isLoggedIn} onClickMenuButton={props.onMenuButtonClick}/>
      <main className="content">
        {/* <section className="main"> */}
          <Promo />
          <NavTab />
          <AboutProject />
          <Techs />
          <AboutMe />
        {/* </section> */}
      </main>
      <Footer />
    </div>
  );
}

export default Main;
