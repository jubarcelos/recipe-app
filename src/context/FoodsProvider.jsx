import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { foodContext } from '.';

function FoodsProvider({ children }) {
  const [foodRecipes, setFoodRecipes] = useState([]);

  const setInitialRecipes = async () => {
    const firstRecipes = await fetch('https://www.themealdb.com/api/json/v1/1/search.php?s=');
    const JSON = await firstRecipes.json();
    const ELEVEN = 11;
    const twoelvRecipes = JSON.meals.filter((__, index) => index <= ELEVEN);
    setFoodRecipes(twoelvRecipes);
  };

  useEffect(() => {
    setInitialRecipes();
  }, []);

  return (
    <foodContext.Provider value={ { foodRecipes, setFoodRecipes } }>
      { children }
    </foodContext.Provider>
  );
}

export default FoodsProvider;

FoodsProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
