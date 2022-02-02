import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { foodContext } from '.';

function FoodsProvider({ children }) {
  const [foodRecipes, setFoodRecipes] = useState([]);
  const [foodCategories, setFoodCategories] = useState([]);

  const setInitialRecipes = async () => {
    const firstRecipes = await fetch('https://www.themealdb.com/api/json/v1/1/search.php?s=');
    const JSON = await firstRecipes.json();
    const ELEVEN = 11;
    const twoelvRecipes = JSON.meals.filter((__, index) => index <= ELEVEN);
    setFoodRecipes(twoelvRecipes);
  };

  const getCategories = async () => {
    const response = await fetch('https://www.themealdb.com/api/json/v1/1/list.php?c=list');
    const JSON = await response.json();
    const categories = JSON.meals.map((category) => category.strCategory);
    const FOUR = 4;
    const fiveCategories = categories.filter((__, index) => index <= FOUR);
    setFoodCategories(fiveCategories);
  };

  useEffect(() => {
    setInitialRecipes();
    getCategories();
  }, []);

  return (
    <foodContext.Provider value={ { foodRecipes, setFoodRecipes, foodCategories } }>
      { children }
    </foodContext.Provider>
  );
}

export default FoodsProvider;

FoodsProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
