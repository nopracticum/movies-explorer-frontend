import React, { useContext, useEffect, useState } from "react";

import { MovieContext } from "../../contexts/MovieContext";
import "./SavedMovies.css";
import MoviesCardList from "../General/MoviesCardList/MoviesCardList";
import SearchForm from "../Movies/SearchForm/SearchForm";
import Header from "../General/Header/Header";
import Footer from "../General/Footer/Footer";
import { PreloaderContext } from "../../contexts/PreloaderContext";
import { SearchContext } from "../../contexts/SearchContext";
import { ERROR_MESSAGE_NOT_FOUND, SHORT_MOVIE_DURATION } from "../../utils/constant";


function SavedMovies({ onRowsCounter, rows, onMenuButtonClick, errorMessage, setErrorMessage, searchFilter }) {
  const {savedMovies, removeSavedMovie } = useContext(MovieContext);
  const {searchTermSavedMovies, setSearchTermSavedMovies} = useContext(SearchContext);
  const {switcherModeSaved, setSwitcherModeSaved} = useContext(SearchContext);
  const {setStatePreloader} = useContext(PreloaderContext);

  const [savedMoviesList, setSavedMovieList] = useState([]);

  function findMovieByTitle(storedMovies) {
    let sortedMovies = storedMovies.filter((movie) => {
      if (movie.title) {
        return movie.title.toLowerCase().includes(searchTermSavedMovies.toLowerCase());
      }
      if (movie.nameRU) {
        return movie.nameRU.toLowerCase().includes(searchTermSavedMovies.toLowerCase());
      }
      return null;
    });

    return sortedMovies;
  }

  function findMovieByDuration(storedMovies) {
    let sortedMovies = storedMovies.filter(
      (movie) => movie.duration < SHORT_MOVIE_DURATION
    );

    return sortedMovies;
  }

  function searchFilterList(isCheckedSwitcher, movieListName) {
    const storedMovies = JSON.parse(localStorage.getItem(movieListName));

    if(!storedMovies){
      return;
    }

    let sortedMovies;

    sortedMovies = findMovieByTitle(storedMovies);

    if (isCheckedSwitcher) {
      sortedMovies = findMovieByDuration(sortedMovies);
    }

    if (sortedMovies.length === 0) {
      setErrorMessage(ERROR_MESSAGE_NOT_FOUND);
    } else {
      setErrorMessage("");
    }

    return sortedMovies;
  }


  function handleSearch() {
    const optionsData = {
      searchQuery: searchTermSavedMovies,
      switcherMode: switcherModeSaved,
    };

    localStorage.setItem("options-saved-movies", JSON.stringify(optionsData));

    setStatePreloader(true);

    try {
      if (savedMoviesList.length === 0) {
        searchFilter(switcherModeSaved, "saved-movies");
      } else {
        const result = searchFilterList(switcherModeSaved, "saved-movies");

        setSavedMovieList(result)
      }
    } catch (error) {
      setErrorMessage(error.message);
    } finally {
      setStatePreloader(false);
    }
  }

  useEffect(() => {
    setSavedMovieList(savedMovies);
  }, [savedMovies])


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
            movies={savedMoviesList}
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
