import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import exitImg from "../../images/exit.svg";
function NavTab({ handleClose }) {
  return (
    <menu className="menu">
      < div className="menu__wrapper">
          <img src={exitImg} alt="Выход из меню" className="menu__exit" onClick={handleClose} />
        <nav className="menu__selection">
          <li className="menu__film-links">
            <Link to="/" className="link" onClick={handleClose}>
              Главная
            </Link>
          </li>
          <li className="menu__film-links">
            <Link to="/movies" className="link" onClick={handleClose}>
              Фильмы
            </Link>
          </li>
          <li className="menu__film-links">
            <Link to="/saved-movies" className="link" onClick={handleClose}>
              Сохранённые фильмы
            </Link>
          </li>
        </nav>
        <div className="menu__space"></div>
        <Link
          to="/profile"
          className="menu__selection menu__selection-account"
          onClick={handleClose}
        >
          <li className="menu__link button-opacity menu__button_account">Аккаунт</li>
        </Link>
      </div>
    </menu>
  );
}
NavTab.propTypes = {
  handleClose: PropTypes.func,
};

export default NavTab;
