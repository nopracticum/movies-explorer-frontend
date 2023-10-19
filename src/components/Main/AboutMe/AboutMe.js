import React from "react";
import "./AboutMe.css";

function AboutMe() {
    return (
        <section id="AboutMe"  className="about">
            <h2 className="landing-subtitle">Студент</h2>
            <article className="about__content">
                <div className="about__text">
                    <h3 className="about__title">Виталий</h3>
                    <h4 className="about__subtitle">Фронтенд-разработчик, 30 лет</h4>
                    <p className="about__description">
                    Я&nbsp;родился и&nbsp;живу в&nbsp;Саратове, закончил факультет экономики СГУ. У&nbsp;меня есть жена
                    и&nbsp;дочь. Я&nbsp;люблю слушать музыку, а&nbsp;ещё увлекаюсь бегом. Недавно начал кодить. 
                    С&nbsp;2015 года работал в&nbsp;компании &laquo;СКБ Контур&raquo;. 
                    После того, как прошёл курс&nbsp;по&nbsp;веб-разработке,&nbsp;начал&nbsp;
                    заниматься&nbsp;фриланс-заказами и&nbsp;ушёл с&nbsp;постоянной работы.
                    </p>
                    <a className="about__link" href="https://github.com/nopracticum" target="blank">Github</a>
                </div>
                <div className="about__photo"></div>
            </article>
        </section>
    );
}

export default AboutMe;