import React from "react";


import "./Portfolio.css";
import Title from "../Title/Title";
import photo from "../../images/pic.png";

export default function Portfolio() {

  return (
    <section id="portfolio" className="portfolio">
      <Title title="Студент" />
      <div className="portfolio__about">
        <div className="portfolio__about-container">
          <h2 className="portfolio__title">Виталий</h2>
          <p className="portfolio__subtitle">Фронтенд-разработчик, 30 лет</p>
          <p className="portfolio__text">
          Я&nbsp;родился и&nbsp;живу в&nbsp;Саратове, закончил факультет экономики СГУ. У&nbsp;меня есть жена
            и&nbsp;дочь. Я&nbsp;люблю слушать музыку, а&nbsp;ещё увлекаюсь бегом. Недавно начал кодить. 
            С&nbsp;2015 года работал в&nbsp;компании &laquo;СКБ Контур&raquo;. 
            После того, как прошёл курс&nbsp;по&nbsp;веб-разработке,&nbsp;начал&nbsp;
            заниматься&nbsp;фриланс-заказами и&nbsp;ушёл с&nbsp;постоянной работы.
          </p>
          <a
            className="portfolio__github"
            href="https://github.com/nopracticum"
						target="_blank"
					  rel="noopener noreferrer"
          >
            Github
          </a>
        </div>
        <img src={photo} className="portfolio__img" alt="Фото профиля" />
      </div>
      
      <span className="portfolio__sign">Портфолио</span>
      <div className="portfolio__exaples-container">
        
      <a className="portfolio__exaple-container portfolio__example-link portfolio__example-underline"
            href="https://github.com/nopracticum/how-to-learn"
						target="_blank"
					  rel="noopener noreferrer"
          >
      <p className="portfolio__example-sample">Статичный сайт</p>
      <span>&#x2197;</span>
          </a>
      <a className="portfolio__exaple-container portfolio__example-link portfolio__example-underline"
            href="https://github.com/nopracticum/russian-travel"
						target="_blank"
					  rel="noopener noreferrer"
          >
      <p className="portfolio__example-sample">Адаптивный сайт</p>
      <span>&#x2197;</span>
      </a>
      <a className="portfolio__exaple-container portfolio__example-link "
            href="https://github.com/nopracticum/react-mesto-api-full-gha"
						target="_blank"
					  rel="noopener noreferrer"
          >
      <p className="portfolio__example-sample">Одностраничное приложение</p>
      <span>&#x2197;</span>
          </a>
      </div>
    </section>
  );
}
