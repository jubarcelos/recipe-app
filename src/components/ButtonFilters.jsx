import React from 'react';
import CardDone from './CardDone';

function ButtonFilters() {
  return (
    <div>
      <button
        type="button"
        data-testid="filter-by-all-btn"
        onClick={ () => <CardDone allDoneRecipes={ allDoneRecipes } /> }
      >
        All
      </button>
      <button
        type="button"
        data-testid="filter-by-food-btn"
        onClick={ () => allDoneRecipes.filter((recipes) => recipes.type === 'food') }
      >
        Food
      </button>
      <button
        type="button"
        data-testid="filter-by-drink-btn"
        onClick={ () => allDoneRecipes.filter((recipes) => recipes.type === 'drink') }
      >
        Drinks
      </button>
    </div>
  );
}

export default ButtonFilters;
