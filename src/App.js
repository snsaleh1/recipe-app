import React, { useEffect, useState } from "react";
import Recipe from './Recipe';
import "./index.css";

const App = () => {

    const APP_ID = process.env.REACT_APP_APP_ID;
    const APP_KEY = process.env.REACT_APP_API_KEY;

    const [recipes, setRecipes] = useState([]);
    const [search, setSearch] = useState("");
    const [query, setQuery] = useState('steak');

    useEffect(() =>{
        getRecipes(query);
    }, [query]);

    const getRecipes = async (query) => {
        const response = await fetch(
            `https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`
        );
        const data = await response.json();
        setRecipes(data.hits);
        console.log(data.hits);
    };

    const updateSearch = e => {
        setSearch(e.target.value);
    }

    const getSearch = e => {
        e.preventDefault();
        setQuery(search);
        setSearch('');
    }

    return (
        <div className="App">
            <h1 className='top-title'>Caleb's Recipe Finder</h1>
          <form onSubmit={getSearch} className="search-form">
              <input className="search-bar" type="text" value={search} onChange={updateSearch} />
              <button className="search-button" type="submit">Search</button>
          </form>
          <div className="recipes">
          {recipes.map(recipe => (
              <Recipe
              key={recipe.recipe.label}
              title={recipe.recipe.label} 
              calories={recipe.recipe.calories}
              image={recipe.recipe.image}
              ingredients={recipe.recipe.ingredients}
              healthLabels={recipe.recipe.healthLabels}
              />
          ))};
          </div>
        </div>
    );
};

export default App;