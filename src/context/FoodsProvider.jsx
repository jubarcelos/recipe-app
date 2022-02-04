import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { foodContext } from '.';

function FoodsProvider({ children }) {
  const [foodRecipes, setFoodRecipes] = useState([]);
  // const [foodRecommendations, setFoodRecommendations] = useState([]);
  const value = {
    foodRecipes,
    setFoodRecipes,
    // foodRecommendations,
    // setFoodRecommendations,
  };

  return (
    <foodContext.Provider value={ value }>
      { children }
    </foodContext.Provider>
  );
}

export default FoodsProvider;

FoodsProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
