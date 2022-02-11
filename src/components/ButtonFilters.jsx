import React from 'react';
import PropTypes from 'prop-types';

function ButtonFilters({ allRecipes, setActualFiltered }) {
  const filteredFood = allRecipes.filter((recipes) => recipes.type === 'food');
  const filteredDrink = allRecipes.filter((recipes) => recipes.type === 'drink');

  return (
    <div>
      <button
        type="button"
        data-testid="filter-by-all-btn"
        onClick={ () => setActualFiltered(allRecipes) }
      >
        All
      </button>
      <button
        type="button"
        data-testid="filter-by-food-btn"
        onClick={ () => setActualFiltered(filteredFood) }
      >
        Food
      </button>
      <button
        type="button"
        data-testid="filter-by-drink-btn"
        onClick={ () => setActualFiltered(filteredDrink) }
      >
        Drinks
      </button>
    </div>
  );
}

export default ButtonFilters;

ButtonFilters.propTypes = {
  allRecipes: PropTypes.arrayOf(PropTypes.any).isRequired,
  setActualFiltered: PropTypes.func.isRequired,
};
