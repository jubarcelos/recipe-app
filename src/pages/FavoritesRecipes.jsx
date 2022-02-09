import React from 'react';
import Header from '../components/Header';
import RecipesFavorites from '../components/RecipesFavorites';

function FavoritesRecipes() {
  return (
    <div>
      <Header title="Favorite Recipes" />
      <RecipesFavorites />
    </div>
  );
}

export default FavoritesRecipes;
