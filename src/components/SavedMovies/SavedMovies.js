import React from "react";

import SearchForm from "../SearchForm/SearchForm";
import MoviesCardList from "../MoviesCardList/MoviesCardList";

export default function SavedMovies() {
	return(
		<section className="movies">
			<SearchForm />
			<MoviesCardList sampleItems={6}/>
		</section>
	);
}