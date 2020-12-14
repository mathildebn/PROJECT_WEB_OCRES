import React from 'react';
import { useEffect, useState } from 'react';
import './Recipes.css';

const Recipes = () => {

    const [query, setQuery] = useState('pancake');
    const [search, setSearch] = useState("");
    const [recipes, setRecipes] = useState([]);

    useEffect(() => {
      getRecipes();
    },
    [query]
    );

    const getRecipes = async () => {
      const response = await fetch(`https://api.edamam.com/search?q=${query}&app_id=004fe251&app_key=ceff49f44eb4e6fce12e3c35a86d7db4`);
      const data = await response.json();
      setRecipes(data.hits);
    };

    const updateSearch = e => {
      setSearch(e.target.value);
    };

    const getSearch = e => {
      e.preventDefault();
      setQuery(search);
      setSearch("");
    }
 
    return (
        <div className="recipes">
          <h2>Recipes</h2>
          <form onSubmit={getSearch}>
            <input
              className="search-bar"
              type="text"
              placeholder="Search..."
              onChange={updateSearch}
              value={search}
            />
            <button>Search</button>
          </form>
          {recipes.slice(0, 3).map(recipe => (
                <div id="recette" style ={{textAlign: "left"}}>
                  <br></br>
                  <img alt="" src={recipe.recipe.image} style={{width: "5vw", borderRadius: 10}}/>
                  <a style ={{fontSize: 15}} href={recipe.recipe.url}>{recipe.recipe.label}</a>
                </div>
          ))}
        </div>
    );
}

export default Recipes;