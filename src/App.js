import React, { useEffect, useState } from "react";
import "./App.css";
import Recipe from "./Recipe";

const App = () => {
	const APP_ID = "88966184";
	const APP_KEY = "8583c11c70bb4b734b3b037d141c146c";
	//const exampleReq = `https://api.edamam.com/search?q=${query}chicken&app_id=${APP_ID}&app_key=${APP_KEY}`;
	//Using a CORS proxy to get around CORS errors
	const proxyurl = "https://cors-anywhere.herokuapp.com/";

  const [recipes, setRecipes] = useState([]);
  const [search, setSearch] = useState('');
  const [query, setQuery] = useState('chicken');

	useEffect(() => {
    getRecipes();
	}, [query]);

	const getRecipes = async () => {
		const response = await fetch(proxyurl + `https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`);
		const data = await response.json();
		setRecipes(data.hits);
		console.log(data.hits);
	};

  const updateSearch = (e) =>{
    setSearch(e.target.value)
  }

  const getSearch = (e) => {
    e.preventDefault();
    setQuery(search);
    setSearch('');
  }

	return (
		<div className="App">
			<form className="search-form" onSubmit={getSearch}>
				<input type="text" className="search-bar" value={search} onChange={updateSearch}/>
				<button className="search-button" type="submit">
					Search
				</button>
			</form>
      <div className='recipes'>
        {recipes.map(recipe => (
          <Recipe key={recipe.recipe.label} title={recipe.recipe.label} calories={recipe.recipe.calories} img={recipe.recipe.image} ingredients={recipe.recipe.ingredients}/>
        ))}
      </div>
		</div>
	);
};

export default App;
