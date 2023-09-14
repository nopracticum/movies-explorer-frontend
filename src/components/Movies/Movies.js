import React, { useContext, useEffect, useState } from "react";

import "./Movies.css";
import SearchForm from "./SearchForm/SearchForm";
import MoviesCardList from "../General/MoviesCardList/MoviesCardList";
import Header from "../General/Header/Header";
import Footer from "../General/Footer/Footer";
import Preloader from "../Preloader/Preloader";
import { PreloaderContext } from "../../contexts/PreloaderContext";
import { MovieContext } from "../../contexts/MovieContext";
import { SearchContext } from "../../contexts/SearchContext";
import getAllMovies from "../../utils/MoviesApi";


function Movies({ onMenuButtonClick, searchFilter, errorMessage, setErrorMessage}) {
  const [ isFetching, setIsFetching ] = useState(false);
  const {isActivePreloader, setStatePreloader} = useContext(PreloaderContext);
  const {movies, downloadMovies} = useContext(MovieContext);
  const {searchTermMovies, setSearchTermMovies} = useContext(SearchContext);
  const {switcherMode, setSwitcherMode} = useContext(SearchContext);
 

  useEffect(() => {
    if (downloadMovies()){
      handleSearch();
    }
  }, []);
  
  async function handleSearch() {
    const optionsData = {
      searchQuery: searchTermMovies,
      switcherMode: switcherMode,
    };

    localStorage.setItem(
      "options-beatfilm-movies",
      JSON.stringify(optionsData)
    );

    const storedMovies = JSON.parse(localStorage.getItem("beatfilm-movies"));

    setStatePreloader(true);

    if (!storedMovies) {

      setIsFetching(true);

      getAllMovies()
        .then((data) => {
          localStorage.setItem("beatfilm-movies", JSON.stringify(data));

          searchFilter(switcherMode, "beatfilm-movies");
        })
        .catch((error) => {
          setErrorMessage(error.message);
        })
        .finally(() => {
          setStatePreloader(false);
          setIsFetching(false);

        });
    } else {
      try {
        searchFilter(switcherMode, "beatfilm-movies");
      } catch (error) {
        setErrorMessage(error.message);
      } finally {
        setStatePreloader(false);
      }
    }
  }

  return (
    <div className="page__container">
      <Header onClickMenuButton={onMenuButtonClick}></Header>
      <main className="content">
        <section className="movies">
          <SearchForm 
            onSearch={handleSearch}
            errorMessage={errorMessage}
            setErrorMessage={setErrorMessage}
            setSwitcherMode={setSwitcherMode}
            switcherMode={switcherMode}
            setSearchQuery={setSearchTermMovies}
            searchQuery={searchTermMovies}
            localStorageName={"options-beatfilm-movies"}
            isSaved={false}
            disabled={ isFetching }
          />
          {!isActivePreloader && <MoviesCardList
            movies={movies}
            isActive={isActivePreloader}
            loadMoreButtomMove={true}
          />}
          {isActivePreloader && <Preloader/>}
        </section>
      </main>
      <Footer />
    </div>
  );
}

export default Movies;
