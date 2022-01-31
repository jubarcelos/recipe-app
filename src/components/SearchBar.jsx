import React, { useState, useContext } from 'react';
import { useHistory } from 'react-router-dom';
import { foodContext, drinkContext } from '../context';
import { getFoodRecipes, getDrinkRecipes } from '../services/getSearch';

function SearchBar() {
  const [searchInput, setSearchInput] = useState('');
  const [filter, setFilter] = useState('');

  const { setFoodRecipes } = useContext(foodContext);
  const { setDrinkRecipes } = useContext(drinkContext);

  const history = useHistory();

  const handleInputChange = (e) => {
    setSearchInput(e.target.value);
  };

  const handleRadioChange = (e) => {
    setFilter(e.target.value);
  };

  const searchWithFilter = async ({ location: { pathname } }) => {
    console.log(pathname);
    if (pathname === '/foods') {
      const recipes = await getFoodRecipes(filter, searchInput);
      console.log(recipes);
      return setFoodRecipes(recipes.meals);
    }
    const recipes = await getDrinkRecipes(filter, searchInput);
    return setDrinkRecipes(recipes.drinks);
  };

  return (
    <div>
      <input
        type="text"
        name="search"
        data-testid="search-input"
        placeholder="Search something"
        value={ searchInput }
        onChange={ handleInputChange }
      />
      <div>
        <label htmlFor="ingredient">
          <input
            id="ingredient"
            name="searchFilter"
            data-testid="ingredient-search-radio"
            type="radio"
            value="ingredient"
            onChange={ handleRadioChange }

          />
          Ingredients
        </label>
        <label htmlFor="name">
          <input
            id="name"
            name="searchFilter"
            data-testid="name-search-radio"
            type="radio"
            value="name"
            onChange={ handleRadioChange }
          />
          Name
        </label>
        <label htmlFor="firstLetter">
          <input
            id="firstLetter"
            name="searchFilter"
            data-testid="first-letter-search-radio"
            type="radio"
            value="firstLetter"
            onChange={ handleRadioChange }
          />
          First Letter
        </label>
      </div>
      <button
        type="button"
        data-testid="exec-search-btn"
        onClick={ () => searchWithFilter(history) }
      >
        Search
      </button>
      <h1>
        { filter }
      </h1>
    </div>
  );
}

export default SearchBar;
