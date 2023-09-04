import React from "react";

import '../Movies/Movies.css'

import SearchForm from "../SearchForm/SearchForm";
import MoviesCardList from "../MoviesCardList/MoviesCardList";

export default function SavedMovies() {
	return(
		<section className="movies">
			<SearchForm />
			<MoviesCardList sampleItems={4}/>
		</section>
	);
}