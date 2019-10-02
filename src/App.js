import React, { useEffect, useState } from "react";
import "./App.css";
import Recipe from './Recipe';

const App = () => {
	const APP_ID = "88966184";
	const APP_KEY = "8583c11c70bb4b734b3b037d141c146c";
  const exampleReq = `https://api.edamam.com/search?q=chicken&app_id=${APP_ID}&app_key=${APP_KEY}`;
  //Using a CORS proxy to get around CORS errors
	const proxyurl = "https://cors-anywhere.herokuapp.com/";

	const [recipes, setRecipes] = useState([]);

	useEffect(() => {
		getRecipes();
	}, []);

	const getRecipes = async () => {
		//const response = await fetch(proxyurl+exampleReq);
		const data = await response.json();
		setRecipes(data.hits);
	};

	return (
		<div className="App">
			<form className="search-form">
				<input type="text" className="search-bar" />
				<button className="search-button" type="submit">
					Search
				</button>
			</form>
		</div>
	);
};

export default App;
