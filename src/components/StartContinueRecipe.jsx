import React from 'react';
import { useHistory, useParams } from 'react-router-dom';
// import { getLocalStorageInfo } from '../services/localStorage';

function StartContinueRecipe() {
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
          getLocalStorageInfo('inProgressRecipes').meals[iD]
            || getLocalStorageInfo('inProgressRecipes').drinks[iD]
            ? 'Continue Recipe' : 'Start Recipe'
        } */}
      </button>
    </div>
  );

  return (
    <div>
      {/* {
        getLocalStorageInfo('doneRecipes').some((recipe) => recipe.id === id)
          ? null : (
            startProgressButton(id)
          )
      } */}
      { startProgressButton(id) }
    </div>
  );
}

export default StartContinueRecipe;
