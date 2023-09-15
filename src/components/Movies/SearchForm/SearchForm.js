import React, { useState, useEffect, useContext } from "react";
import logo from '../../../images/search_icon.svg'
import { useLocation } from "react-router-dom";

import "./SearchForm.css";
import Switcher from "./Switcher/Switcher";
import { ERROR_MESSAGE_NOT_KEY_SEARCH } from "../../../utils/constant";
import { VisibleRowsContext } from "../../../contexts/VisibleRowsContext";

function SearchForm({
  onSearch,
  errorMessage,
  setErrorMessage,
  setSwitcherMode,
  switcherMode,
  searchQuery,
  setSearchQuery,
  localStorageName,
  isSaved,
  disabled,
}) {
  const [errorMessageNotFound, setErrorMessageNotFound] = useState("");
  const location = useLocation();

  const {
    setCardCount,
    calculateStartColumnsAndRowsCount,
  } = useContext(VisibleRowsContext);

  const calculateColumns = () => {
    const { columns, rows } = calculateStartColumnsAndRowsCount();
    const requiredCardCount = columns * rows;
    setCardCount(requiredCardCount);
  };

  function handleCheckboxChange() {
    setSwitcherMode(!switcherMode);
  }

  useEffect(() => {
    if(location.pathname === "/saved-movies"){
      setSearchQuery("");
      setSwitcherMode(false);
    }
  }, [location.pathname, setSwitcherMode]);

  useEffect(() => {
    if (searchQuery !== "" || isSaved) {
      onSearch();
    }
  }, [isSaved, switcherMode]);  

  const handleChangeInput = (event) => {
    event.preventDefault();
    const value = event.target.value;
    setErrorMessageNotFound("");
    setErrorMessage("");
    setSearchQuery(value);
  };

  const handleSearch = (event) => {
    if (event) {
      event.preventDefault();
    }
    setErrorMessageNotFound(
      (searchQuery === "" && !isSaved) ? ERROR_MESSAGE_NOT_KEY_SEARCH : ""
    );
    if (searchQuery !== "" || isSaved) {
      calculateColumns();
      onSearch();
    }
  };

  useEffect(() => {
    const optionsLocalCopy = JSON.parse(localStorage.getItem("options-beatfilm-movies"));
    if (optionsLocalCopy && !isSaved) {
      setSwitcherMode(
        optionsLocalCopy.switcherMode ? optionsLocalCopy.switcherMode : false
      );
      setSearchQuery(
        optionsLocalCopy.searchQuery ? optionsLocalCopy.searchQuery : ""
      );
    }
  }, []);

  return (
    <section className="search-form">
      <form
        className="search-form__search-container"
        onSubmit={handleSearch}
        noValidate
      >
        <div className="search-form__container">
          <input
            className="search-form__input-field"
            type="text"
            placeholder="Фильм"
            value={searchQuery}
            required
            onChange={handleChangeInput}
            disabled={ disabled }
          ></input>
          <button type="submit" className="search-form__search-btn link">
          <img className="search-form__icon" src={logo} alt="поиск"/>
          </button>
        </div>
      </form>
      <span className="search-form__error-text">
        {errorMessage === "" ? errorMessageNotFound : errorMessage}
      </span>
      <div className="search-form__switcher-container">
          <Switcher onChecked={handleCheckboxChange} isChecked={switcherMode} />
          <span className="search-form__switcher-text">Короткометражки</span>
        </div>
    </section>
  );
}

export default SearchForm;
