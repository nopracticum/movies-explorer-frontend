import React, { useState, useEffect, useContext } from "react";
import "./MoviesCardList.css";
import MoviesCard from "../MoviesCard/MoviesCard";
import { VisibleRowsContext } from "../../../contexts/VisibleRowsContext";
import { SCREEN_WIDTH } from "../../../utils/constant";

function MoviesCardList({ movies, isActive, loadMoreButtomMove }) {
  const {
    addRows,
    cardCount,
    setCardCount,
  } = useContext(VisibleRowsContext);
  const [visibleCards, setVisibleCards] = useState([]);

  const calculateColumns = () => {
    const { columns, rows } = calculateStartColumnsAndRowsCount();
    const requiredCardCount = columns * rows;
    setCardCount(requiredCardCount);
    console.log();
  };

  const calculateStartColumnsAndRowsCount = () => {
    if (window.innerWidth >= 1280) return { columns: 4, rows: 4 };
    if (window.innerWidth >= 988) return { columns: 3, rows: 4 };
    if (window.innerWidth >= 730) return { columns: 2, rows: 4 };
    if (window.innerWidth >= 480) return { columns: 2, rows: 2.5 };
    return { columns: 2, rows: 2.5 };
  };


  useEffect(() => {
    calculateColumns(); 

    window.addEventListener("resize", calculateColumns);

    return () => {
      window.removeEventListener("resize", calculateColumns);
    };
  }, []);

  const loadMoreCards = () => {
    const newCardCount =
      cardCount + calculateStartColumnsAndRowsCount().columns;
    setCardCount(newCardCount);
    addRows();
  };

  useEffect(() => {
    setVisibleCards(!loadMoreButtomMove ? movies : movies.slice(0, cardCount));
  }, [cardCount, loadMoreButtomMove, movies]);

  return (
    <section
      className={`movies-card-list ${
        cardCount < movies.length ? "" : "movies-card-list_padding"
      } ${isActive ? "disabled" : ""}`}
    >
      <ul className="movies-card-list__container">
        {visibleCards.length > 0 &&
          visibleCards.map((movie, index) => (
            <MoviesCard
              key={movie.movieId}
              movieId={movie.movieId}
              title={movie.title}
              duration={movie.duration}
              backdrop={movie.backdrop}
              trailerLink={movie.trailerLink}
            />
          ))}
      </ul>
      {cardCount < movies.length && loadMoreButtomMove && (
        
        <button
          type="button"
          className="movies-card-list__button link"
          onClick={loadMoreCards}
        >
          Ещё
        </button>

      )}
    </section>
  );
}

export default MoviesCardList;
