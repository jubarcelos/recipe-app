import React, { useContext } from 'react';
import getRecipesByNationality from '../services/getRecipesByNationality';
import { foodContext } from '../context';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Card from '../components/Card';

function FoodsNationalities() {
  const { nationalities,
    recipesByNationality, setRecipesByNationality } = useContext(foodContext);

  const handleChange = async ({ target }) => {
    if (target.value === 'All') {
      const firstRecipes = await fetch('https://www.themealdb.com/api/json/v1/1/search.php?s=');
      const JSON = await firstRecipes.json();
      const ELEVEN = 11;
      const twoelvRecipes = JSON.meals.filter((__, index) => index <= ELEVEN);
      return setRecipesByNationality(twoelvRecipes);
    }
    const recipes = await getRecipesByNationality(target.value);
    setRecipesByNationality(recipes);
  };

  return (
    <div>
      <Header title="Explore Nationalities" />
      <div>
        <select
          data-testid="explore-by-nationality-dropdown"
          onChange={ handleChange }
        >
          <option data-testid="All-option">All</option>
          {
            nationalities.map((nationality) => (
              <option
                data-testid={ `${nationality}-option` }
                key={ nationality }
              >
                {nationality}
              </option>
            ))
          }
        </select>
      </div>
      <div>
        {
          recipesByNationality.map((recipe, index) => (
            <Card
              key={ recipe.strMeal }
              recipeImage={ recipe.strMealThumb }
              recipeName={ recipe.strMeal }
              index={ index }
            />
          ))
        }
      </div>
      <Footer />
    </div>);
}

export default FoodsNationalities;
