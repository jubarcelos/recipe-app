import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { foodContext } from '.';
import getFoodIngredients from '../services/getFoodIngredients';

function FoodsProvider({ children }) {
  const [foodRecipes, setFoodRecipes] = useState([]);
  const [foodCategories, setFoodCategories] = useState([]);
  const [ingredientsFoods, setIngredientsFoods] = useState([]);

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

  const setIngredients = async () => {
    const ingredients = await getFoodIngredients();
    setIngredientsFoods(ingredients);
  };

  useEffect(() => {
    setInitialRecipes();
    getCategories();
  }, []);

  useEffect(() => {
    setIngredients();
  }, []);

  const value = {
    foodRecipes,
    setFoodRecipes,
    foodCategories,
    setInitialRecipes,
    ingredientsFoods,
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
