import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { drinkContext } from '.';

function DrinksProvider({ children }) {
  const [drinkRecipes, setDrinkRecipes] = useState([]);
  const [drinkCategories, setDrinkCategories] = useState([]);

  const setInitialRecipes = async () => {
    const firstRecipes = await fetch('https://www.thecocktaildb.com/api/json/v1/1/search.php?s=');
    const JSON = await firstRecipes.json();
    const ELEVEN = 11;
    const twoelvRecipes = JSON.drinks.filter((__, index) => index <= ELEVEN);
    setDrinkRecipes(twoelvRecipes);
  };

  const getCategories = async () => {
    const response = await fetch('https://www.thecocktaildb.com/api/json/v1/1/list.php?c=list');
    const JSON = await response.json();
    const categories = JSON.drinks.map((category) => category.strCategory);
    const FOUR = 4;
    const fiveCategories = categories.filter((__, index) => index <= FOUR);
    setDrinkCategories(fiveCategories);
  };

  useEffect(() => {
    setInitialRecipes();
    getCategories();
  }, []);

  const value = {
    drinkRecipes,
    setDrinkRecipes,
    drinkCategories,
    setInitialRecipes,
  };

  return (
    <drinkContext.Provider value={ value }>
      { children }
    </drinkContext.Provider>
  );
}

export default DrinksProvider;

DrinksProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
