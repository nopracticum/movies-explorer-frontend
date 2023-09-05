import React from "react";

import '../Movies/Movies.css'

import SearchForm from "../SearchForm/SearchForm";
import MoviesCardList from "../MoviesCardList/MoviesCardList";

export default function SavedMovies() {
	return(
        <main className="main">
		<section className="movies">
			<SearchForm />
			<MoviesCardList sampleItems={3}/>
		</section>
        </main>
	);
}