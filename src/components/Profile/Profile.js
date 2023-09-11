import { Link } from "react-router-dom";
function Profile() {
  return (
    <main className="main">
      <section className="account">
        <div className="account__wrapper">
          <h1 className="account__greeting">Привет, Виталий!</h1>
          <form className="account__fields">
            <div className="account__field account__field-name">
              <label className="account__name-label">Имя</label>
              <input
                className="account__name"
                type="text"
                name="name"
                placeholder="Имя"
                minLength={2}
                maxLength={30}
                defaultValue="Виталий"
                required
              />
            </div>
            <div className="account__field">
              <label className="account__email-label">E-mail</label>
              <input
                className="account__email"
                placeholder="Email"
                type="email"
                name="email"
                minLength={6}
                defaultValue="pochta@yandex.ru"
                required
              ></input>
            </div>
          </form>
          <div className="account-links">
            <Link className="account-links__edit link">Редактировать</Link>
            <Link to="/" className="account-links__exit button-opacity">
              Выйти из аккаунта
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}

export default Profile;
