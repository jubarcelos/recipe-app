import React from 'react';
import { useHistory, useParams } from 'react-router-dom';
// import { getInProgressRecipes, getDoneRecipes } from '../services/localStorage';

function StartRecipe() {
  const history = useHistory();
  const { location: { pathname } } = history;
  const { id } = useParams();

  const redirectById = (path, iD) => {
    if (path === `/foods/${iD}`) {
      return history.push(`/foods/${iD}/in-progress`);
    }
    if (path === `/drinks/${iD}`) {
      return history.push(`/drinks/${iD}/in-progress`);
    }
  };
  const startProgressButton = (iD) => (
    <div>
      <button
        style={ { position: 'fixed', bottom: '0px' } }
        data-testid="start-recipe-btn"
        type="button"
        onClick={ () => redirectById(pathname, iD) }
      >
        Start Recipe
        {/* {
          getInProgressRecipes().meals[iD] || getInProgressRecipes().drinks[iD]
            ? 'Continue Recipe' : 'Start Recipe'

        } */}
      </button>
    </div>
  );

  return (
    <div>
      {/* {
        getDoneRecipes().some((recipe) => recipe.id === id) ? null : (
          startProgressButton(id)
        )
      } */}
      { startProgressButton(id) }
    </div>
  );
}

export default StartRecipe;

// style = { display: none };
