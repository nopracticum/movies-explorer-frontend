import SearchForm from "../SearchForm/SearchForm";
import MoviesCardList from "../MoviesCardList/MoviesCardList";

function Movies() {
  return (
    <main className="main">
      <SearchForm />
      <MoviesCardList sampleItems={5} />
    </main>
  );
}

export default Movies;
