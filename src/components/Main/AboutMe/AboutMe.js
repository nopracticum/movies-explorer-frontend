import React from "react";
import { Link } from "react-router-dom";
import image from "../../../images/pic.png";
import "./AboutMe.css";
import SectionHeader from "../../General/SectionHeader/SectionHeader";
import Portfolio from '../Portfolio/Portfolio';

function AboutMe() {
  return (
    <div  id="AboutMe" className="about">
      <SectionHeader headerTitle={"Студент"} />
      <div className="about__wrapper">
        <img
          src={image}
          className="about__image"
          alt="Фото профиля"
        />
        <div className="about__info">
          <h3 className="about__title">Виталий</h3>
          <p className="about_subtitle">Фронтенд-разработчик, 30 лет</p>
          <p className="about__description">
          Я&nbsp;родился и&nbsp;живу в&nbsp;Саратове, закончил факультет экономики СГУ. У&nbsp;меня есть жена
          и&nbsp;дочь. Я&nbsp;люблю слушать музыку, а&nbsp;ещё увлекаюсь бегом. Недавно начал кодить. 
          С&nbsp;2015 года работал в&nbsp;компании &laquo;СКБ Контур&raquo;. 
          После того, как прошёл курс&nbsp;по&nbsp;веб-разработке,&nbsp;начал&nbsp;
          заниматься&nbsp;фриланс-заказами и&nbsp;ушёл с&nbsp;постоянной работы.
          </p>
          <Link 
            to={"https://github.com/nopracticum"}
            className="about__github-link link"
            target="_blank"
            rel="noreferrer"
          >
            Github
          </Link>
        </div>
      </div>
      <Portfolio />
    </div>
  );
}

export default AboutMe;
