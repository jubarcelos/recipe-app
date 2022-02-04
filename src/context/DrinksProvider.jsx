import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { drinkContext } from '.';

function DrinksProvider({ children }) {
  const [drinkRecipes, setDrinkRecipes] = useState([]);
  // const [drinkRecommendations, setDrinkRecommendations] = useState([]);

  const value = {
    drinkRecipes,
    setDrinkRecipes,
    // drinkRecommendations,
    // setDrinkRecommendations,
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
