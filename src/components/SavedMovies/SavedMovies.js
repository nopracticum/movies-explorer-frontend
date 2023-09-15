import React, { useContext, useEffect } from "react";

import { MovieContext } from "../../contexts/MovieContext";
import "./SavedMovies.css";
import MoviesCardList from "../General/MoviesCardList/MoviesCardList";
import SearchForm from "../Movies/SearchForm/SearchForm";
import Header from "../General/Header/Header";
import Footer from "../General/Footer/Footer";
import { PreloaderContext } from "../../contexts/PreloaderContext";
import { SearchContext } from "../../contexts/SearchContext";


function SavedMovies({ onRowsCounter, rows, onMenuButtonClick, errorMessage, setErrorMessage, searchFilter }) {
  const {savedMovies, removeSavedMovie, downloadSavedMovies } = useContext(MovieContext);
  const {searchTermSavedMovies, setSearchTermSavedMovies} = useContext(SearchContext);
  const {switcherModeSaved, setSwitcherModeSaved} = useContext(SearchContext);
  const {setStatePreloader} = useContext(PreloaderContext);

  useEffect(() => {
    downloadSavedMovies();
  }, []);
  

  function handleSearch() {
    const optionsData = {
      searchQuery: searchTermSavedMovies,
      switcherMode: switcherModeSaved,
    };

    localStorage.setItem("options-saved-movies", JSON.stringify(optionsData));

    setStatePreloader(true);

    try {
      searchFilter(switcherModeSaved, "saved-movies");
    } catch (error) {
      setErrorMessage(error.message);
    } finally {
      setStatePreloader(false);
    }
  }

  return (
    <div className="page__container">
      <Header onClickMenuButton={onMenuButtonClick}></Header>
      <main className="content">
        <section className="saved-movies">
          <SearchForm
            onSearch={handleSearch}
            errorMessage={errorMessage}
            setErrorMessage={setErrorMessage}
            setSwitcherMode={setSwitcherModeSaved}
            switcherMode={switcherModeSaved}
            setSearchQuery={setSearchTermSavedMovies}
            searchQuery={searchTermSavedMovies}
            localStorageName={"options-saved-movies"}
            isSaved={true}
          />
          <MoviesCardList
            movies={savedMovies}
            rows={rows}
            onRowsCounter={onRowsCounter}
            onRemoveFromSaved={removeSavedMovie}
            loadMoreButtomMove={false}
          />
        </section>
      </main>
      <Footer />
    </div>
  );
}

export default SavedMovies;
