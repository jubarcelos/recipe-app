import React from 'react';
import { useHistory, useParams } from 'react-router-dom';
import { getLocalStorageInfo } from '../services/localStorage';

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

  const saveRecipeInProgress = () => {
    const inProgressLS = JSON.parse(localStorage.getItem('inProgressRecipes'));
    if (pathname === `/foods/${id}`) {
      const newRecipe = {
        cocktails: { ...inProgressLS.cocktails },
        meals: { [id]: inProgressLS.meals[id] !== undefined
          ? [...inProgressLS.meals[id]] : [],
        ...inProgressLS.meals },
      };
      return localStorage.setItem('inProgressRecipes', JSON.stringify(newRecipe));
    }
    const newRecipe = {
      cocktails: { ...inProgressLS.cocktails, [id]: [] },
      meals: { ...inProgressLS.meals },
    };
    return localStorage.setItem('inProgressRecipes', JSON.stringify(newRecipe));
  };

  const startProgressButton = () => (
    <div>
      <button
        style={ { position: 'fixed', bottom: '0px' } }
        data-testid="start-recipe-btn"
        type="button"
        onClick={ () => {
          saveRecipeInProgress();
          redirectById(pathname, id);
        } }
      >
        {
          getLocalStorageInfo('inProgressRecipes').meals[id]
            || getLocalStorageInfo('inProgressRecipes').cocktails[id]
            ? 'Continue Recipe' : 'Start Recipe'
        }
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
      { startProgressButton() }
    </div>
  );
}

export default StartContinueRecipe;
