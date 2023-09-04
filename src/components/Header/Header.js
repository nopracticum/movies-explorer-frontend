import React from "react";
import logo from "../../images/logo.svg";
import burger from "../../images/burger-menu.svg";
import { Link } from "react-router-dom";
import NavTab from "../NavTab/NavTab";
import { useLocation } from "react-router-dom";

function Header() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const location = useLocation();
  function handleClose() {
    setIsMenuOpen(false);
  }
  const handleMenuClick = () => {
    setIsMenuOpen(true);
  };

  const showFirstHeader = (pathname) => {
    if (
      pathname === "/movies" ||
      pathname === "/saved-movies" ||
      pathname === "/profile"
    ) {
      return false;
    }
    return true;
  };
  const renderFirstHeader = showFirstHeader(location.pathname);

  return (
    <>
      {renderFirstHeader && (
        <header className="header">
          <div className="header__container">
            <Link to="/">
              <img src={logo} alt="Логотип" className="header__logo button-opacity" />
            </Link>
            <nav className="header__auth">
              <Link to="/signup" className="header__link header__button_registration">
                Регистрация
              </Link>
              <Link to="/signin" className="header__link button-opacity">
                Войти
              </Link>
            </nav>
          </div>
        </header>
      )}
      {!renderFirstHeader && (
        <header className="header films">
          <div className="header__container">
            <Link to="/">
              <img src={logo} alt="Логотип" className="header__logo  button-opacity" />
            </Link>
            <nav className="header__selection">
              <Link to="/movies" className="link">
                Фильмы
              </Link>
              <Link to="/saved-movies" className="link">
                Сохранённые фильмы
              </Link>
            </nav>
              <Link to="/profile" className="header__link button-opacity header__button_account">
                Аккаунт
              </Link>
            <button className="header__burger button-opacity" type="button">
              <img
                src={burger}
                onClick={handleMenuClick}
                alt="Меню"
                className="header__burger-image"
              />
            </button>
            {isMenuOpen ? <NavTab handleClose={handleClose} /> : ""}
          </div>
        </header>
      )}
    </>
  );
}
export default Header;
