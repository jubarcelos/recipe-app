import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { drinkContext } from '.';

function DrinksProvider({ children }) {
  const [drinkRecipes, setDrinkRecipes] = useState([]);

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
