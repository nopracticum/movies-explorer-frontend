import { BASE_URL } from "../utils/constant";

class Api {
  constructor(config) {
    this.baseUrl = config.baseUrl;
    this.headers = config.headers;
  }

  _handleResponse(response, errorMessage) {
    if (response.ok) {
      return response.json();
    } else {
      return response.json().then((data) => {
        const error = new Error(errorMessage);
        error.status = response.status;
        error.message = data.message;
        throw error;
      });
    }
  }

  saveMovie(movie) {
    const token = localStorage.getItem('token');

    return fetch(`${this.baseUrl}/movies`, {
      headers: {
        'Content-Type': 'application/json',
        authorization: `Bearer ${token}`,
      },
      method: "POST",
      body: JSON.stringify(movie),
    }).then((response) => {
      return this._handleResponse(
        response,
        "Данные о фильме не были успешно получены сервером"
      );
    });
  }

  deleteMovie(movieId) {
    const token = localStorage.getItem('token');

    return fetch(`${this.baseUrl}/movies/${movieId}`, {
      headers: {
        'Content-Type': 'application/json',
        authorization: `Bearer ${token}`,
      },
      method: "DELETE",
    }).then((response) => {
      return this._handleResponse(
        response,
        "Данные о фильме не были успешно удалены на сервере"
      );
    });
  }

  getMovieList() {
    const token = localStorage.getItem('token');

    return fetch(`${this.baseUrl}/movies`, {
      headers: {
        'Content-Type': 'application/json',
        authorization: `Bearer ${token}`,
      },
      method: "GET",
    }).then((response) => {
      return this._handleResponse(
        response,
        "Данные о списке фильмов не были успешно получены"
      );
    });
  }

  getUserInfo(token) {
    return fetch(`${this.baseUrl}/users/me`, {
      headers: {
        'Content-Type': 'application/json',
        authorization: `Bearer ${token}`,
      },
      method: "GET",
    }).then((response) => {
      return this._handleResponse(
        response,
        "Данные о пользователе не были успешно получены"
      );
    });
  }

  updateUserInfo(data) {
    const token = localStorage.getItem('token');

    return fetch(`${this.baseUrl}/users/me`, {
      headers: {
        'Content-Type': 'application/json',
        authorization: `Bearer ${token}`,
      },
      method: "PATCH",
      body: JSON.stringify({
        name: data.name,
        email: data.email,
      }),
    }).then((response) => {
      return this._handleResponse(
        response,
        "Данные о пользователе не были успешно обновлены на сервере"
      );
    });
  }

  login(userData) {
    return fetch(`${this.baseUrl}/signin`, {
      headers: this.headers,
      method: "POST",
      body: JSON.stringify(userData),
    }).then((response) => {
      return this._handleResponse(
        response,
        "Не удалось успешно авторизоваться"
      );
    });
  }


  register(userData) {
    return fetch(`${this.baseUrl}/signup`, {
      headers: this.headers,
      method: "POST",
      body: JSON.stringify(userData),
    }).then((response) => {
      return this._handleResponse(
        response,
        "Не удалось успешно зарегистрироваться"
      );
    });
  }
}

const apiConfig = {
  baseUrl: BASE_URL,
  headers: {
    "Content-Type": "application/json",
  },
};

const mainApi = new Api(apiConfig);

export default mainApi;
