import { Link } from "react-router-dom";
import logo from "../../images/logo.svg";
function Login() {
  return (
    <main className="main">
      <section className="login">
        <Link to="/">
          <img src={logo} alt="Логотип" className="login__logo button-opacity" />
        </Link>
        <h1 className="login__greeting">Рады видеть!</h1>
        <form action="#" className="login__form">
          <div className="login__field">
            <label className="login__label">Имя</label>
            <input
              name="name"
              type="text"
              placeholder="Имя"
              className="login__input"
              minLength={2}
              maxLength={20}
              required
            />
            <span className="login__error"></span>
          </div>
          <div className="login__field">
            <label className="login__label">Пароль</label>
            <input
              name="password"
              type="password"
              className="login__input"
              minLength={8}
              maxLength={20}
              placeholder="Пароль"
              required
            />
            <span className="login__error"></span>
          </div>
          <button className="login__submit button-opacity" type="submit">Войти</button>
          <h4 className="login__question">
            Ещё не зарегистрированы?{" "}
            <Link to="/signup" className="login__link button-opacity">
              Регистрация
            </Link>
          </h4>
        </form>
      </section>
    </main>
  );
}

export default Login;
