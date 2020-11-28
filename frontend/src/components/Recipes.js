import { useEffect, useState } from 'react';

const Recipes = () => {

    const [recipes, setRecipes] = useState([]);

    useEffect(() => {
      getRecipes();
    },
    []
    );

    const getRecipes = async () => {
      const response = await fetch("https://api.edamam.com/search?q=christmas&app_id=004fe251&app_key=ceff49f44eb4e6fce12e3c35a86d7db4");
      const data = await response.json();
      setRecipes(data.hits);
    };
 
    return (
        <div>
          <h3>Recipes</h3>
          {recipes.slice(0, 3).map(recipe => (
                <div style ={{textAlign: "left"}}>
                  <br></br>
                  <img src={recipe.recipe.image} style={{width: "5vw", borderRadius: 10}}/>
                  <a style ={{fontSize: 15}} href={recipe.recipe.url}>{recipe.recipe.label}</a>
                </div>
          ))}
        </div>
    );
}

export default Recipes;