import React from "react";

import "./Navigation.css";

export default function Nav() {
  return (
    <section className="navigation">
      <ul className="navigation__container">
        <li className="navigation__li">
          <a className="navigation__link" href="#about">О проекте</a>
        </li>
        <li className="navigation__li">
          <a className="navigation__link" href="#tech">Технологии</a>
        </li>
        <li className="navigation__li">
          <a className="navigation__link" href="#portfolio">Студент</a>
        </li>
      </ul>
    </section>
  );
}
