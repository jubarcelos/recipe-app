import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { drinkContext } from '.';

function DrinksProvider({ children }) {
  const [drinkRecipes, setDrinkRecipes] = useState([]);

  const setInitialRecipes = async () => {
    const firstRecipes = await fetch('https://www.thecocktaildb.com/api/json/v1/1/search.php?s=');
    const JSON = await firstRecipes.json();
    const ELEVEN = 11;
    const twoelvRecipes = JSON.drinks.filter((__, index) => index <= ELEVEN);
    setDrinkRecipes(twoelvRecipes);
  };

  useEffect(() => {
    setInitialRecipes();
  }, []);

  return (
    <drinkContext.Provider value={ { drinkRecipes, setDrinkRecipes } }>
      { children }
    </drinkContext.Provider>
  );
}

export default DrinksProvider;

DrinksProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
