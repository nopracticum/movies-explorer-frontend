import React from "react";

import './Title.css'

export default function Title({ title }) {
	return(
		<h2 className="title title_line">{title}</h2>
	);
}