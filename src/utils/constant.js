const MENU_ICON_SCREEN_WIDTH = 769;

const BASE_URL = 'https://api.nomoremoviesexplorer.nomoredomainsicu.ru';

const ERROR_MESSAGE_SEARCH_MOVIES_API = "Во время запроса произошла ошибка. Возможно, проблема с соединением или сервер недоступен. Подождите немного и попробуйте ещё раз.";
const ERROR_MESSAGE_NOT_FOUND = "Ничего не найдено.";
const ERROR_MESSAGE_NOT_KEY_SEARCH = "Необходимо ввести ключевое слово.";
const ERROR_MESSAGE_INVALID_EMAIL = "Пожалуйста, укажите корректный email в формате 'xxx@xx.xx'.";
const SUCCESS_MESSAGE_UPDATE_PROFILE = "Новые данные профиля успешно сохранены.";
const SHORT_MOVIE_DURATION = 40;

const EMAIL_REGEX = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/;

const SCREEN_WIDTH = {
	LARGE: window.innerWidth >= 1280,
	TABLET: window.innerWidth >= 1028,
	TABLET_SMALL: window.innerWidth >= 768,
	MOBILE: window.innerWidth >= 480,
}

const ADD_MORE_CARDS = {
	FOUR: 4,
	THREE: 3,
	TWO: 2,
}

const CARDS_AMMOUNT = {
	LARGE: 16,
	MEDIUM: 12,
	SMALL: 8,
	X_SMALL: 5,
}

module.exports = {
  MENU_ICON_SCREEN_WIDTH,
  BASE_URL,
  ERROR_MESSAGE_SEARCH_MOVIES_API,
  ERROR_MESSAGE_NOT_FOUND,
  SHORT_MOVIE_DURATION,
  ERROR_MESSAGE_NOT_KEY_SEARCH,
  ERROR_MESSAGE_INVALID_EMAIL,
  SUCCESS_MESSAGE_UPDATE_PROFILE,
  EMAIL_REGEX,
  SCREEN_WIDTH,
  ADD_MORE_CARDS,
  CARDS_AMMOUNT
};
