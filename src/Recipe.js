import React from "react";
import style from './recipe.module.css';

const Recipe = ({title, calories, img, ingredients}) => {
	return (
		<div className={style.recipe}>
			<h1>{title}</h1>
			<ul>
				{ingredients.map(ingredient =>(
				<li>{ingredient.text}</li>
				))}
			</ul>
			<p>Calories: {Number((calories).toFixed(0))}</p>
			<img className={style.image} src={img} alt={title} />
		</div>
	);
};

export default Recipe;