import { Link } from "react-router-dom";
import "./NotFound.css";

function NotFound() {
  return (
    <main>
      <section className="not-found">
        <h1 className="not-found__title">404</h1>
        <p className="not-found__descrintion">Страница не найдена</p>
        <Link to="/" className="not-found__button button-opacity">
          Назад
        </Link>
      </section>
    </main>
  );
}

export default NotFound;
