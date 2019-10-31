import React from 'react';
import style from './recipe.module.css';


const Recipe = ({title, calories, image, ingredients, healthLabels }) => {
    return(
        <div className={style.recipe}>
                <h1>{title}</h1>
                <h3>Ingredients</h3>
                <ol>
                    {ingredients.map(ingredient => (
                      <li>{ingredient.text}</li>
                    ))}
                </ol>
                <h3>Calorie Count</h3>
                <p>{Math.floor(calories)} Calories</p>
                <img className={style.image}src={image} alt=""/>
                <h3>Health Notes</h3>
                <ol>
                {healthLabels.map(healthLabel => (
                  <li>{healthLabel}</li>
                ))}
                </ol>
        </div>
      );
}

export default Recipe;