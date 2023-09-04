import { Link } from "react-router-dom";
import logo from "../../images/logo.svg";
function Register() {
  return (
    <main className="main">
      <section className="register">
        <Link to="/">
          <img src={logo} alt="Логотип" className="register__logo button-opacity" />
        </Link>
        <h1 className="register__greeting">Добро пожаловать!</h1>
        <form action="#" className="register__form">
          <div className="register__field">
            <label className="register__label">Имя</label>
            <input
              name="name"
              type="text"
              className="register__input"
              minLength={2}
              maxLength={20}
              placeholder="Имя"
              required
            />
            <span className="register__error"></span>
          </div>
          <div className="register__field">
            <label className="register__label">E-mail</label>
            <input
              name="email"
              type="email"
              placeholder="Email"
              minLength={6}
              className="register__input"
              required
            />
            <span className="register__error"></span>
          </div>
          <div className="register__field">
            <label className="register__label">Пароль</label>
            <input
              name="password"
              type="password"
              className="register__input"
              minLength={8}
              maxLength={20}
              placeholder="Пароль"
              required
            />
            <span className="register__error">Что-то пошло не так...</span>
          </div>
          <button className="register__submit button-opacity" type="submit">
            Зарегистрироваться
          </button>
          <h4 className="register__question">
            Уже зарегистрированы?{" "}
            <Link to="/signin" className="register__link button-opacity">
              Войти
            </Link>
          </h4>
        </form>
      </section>
    </main>
  );
}

export default Register;
