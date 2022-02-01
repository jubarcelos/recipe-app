import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { foodContext } from '.';

function FoodsProvider({ children }) {
  const [foodRecipes, setFoodRecipes] = useState([]);

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
