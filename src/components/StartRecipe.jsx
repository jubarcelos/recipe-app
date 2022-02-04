import React from 'react';
import { useHistory } from 'react-router-dom';

function StartRecipe() {
  const history = useHistory();
  const redirectById = () => {
    if (history.location.pathname === '/foods') {
      return history.push('/foods/:id/in-progress');
    }
    if (history.location.pathname === '/drinks') {
      return history.push('/drinks/:id/in-progress');
    }
  };
  return (
    <div>
      <button
        data-testid="start-recipe-btn"
        type="button"
        onClick={ () => redirectById }
      >
        Start Recipe
      </button>
    </div>
  );
}

export default StartRecipe;
