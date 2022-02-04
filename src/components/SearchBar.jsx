import React, { useState, useContext } from 'react';
import { useHistory } from 'react-router-dom';
import { foodContext, drinkContext, userContext } from '../context';
import { getFoodRecipes, getDrinkRecipes } from '../services/getSearch';

function SearchBar() {
  const [searchInput, setSearchInput] = useState('');
  const [filter, setFilter] = useState('');

  const { setFoodRecipes } = useContext(foodContext);
  const { setDrinkRecipes } = useContext(drinkContext);
  const { setSearch } = useContext(userContext);

  const history = useHistory();

  const handleInputChange = (e) => {
    setSearchInput(e.target.value);
  };

  const handleRadioChange = (e) => {
    setFilter(e.target.value);
  };

  const searchWithFilter = async ({ location: { pathname } }) => {
    setFoodRecipes([]);
    setSearch(true);
    const ELEVEN = 11;
    const MESSAGE = 'Sorry, we haven\'t found any recipes for these filters.';

    if (searchInput.length > 1 && filter === 'firstLetter') {
      return global.alert('Your search must have only 1 (one) character');
    }
    if (pathname === '/foods') {
      const recipes = await getFoodRecipes(filter, searchInput);
      if (recipes.meals === null) {
        return global.alert(MESSAGE);
      }
      const twelveRecipes = recipes.meals.filter((_meal, index) => index <= ELEVEN);
      return setFoodRecipes(twelveRecipes);
    }
    try {
      const recipes = await getDrinkRecipes(filter, searchInput);
      if (recipes.drinks === null) {
        return global.alert(MESSAGE);
      }
      const twelveRecipes = recipes.drinks.filter((_drink, index) => index <= ELEVEN);
      return setDrinkRecipes(twelveRecipes);
    } catch {
      global.alert(MESSAGE);
    }
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
    </div>
  );
}

export default SearchBar;
