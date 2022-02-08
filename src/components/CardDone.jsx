import React from 'react';
import { useHistory } from 'react-router';
import ShareDoneRecipe from './ShareDoneRecipe';

function CardDone() {
  const history = useHistory();
  const redirect = (type, id) => (
    history.push(`/${type}s/${id}`)
  );
  return (
    <div>
      {
        allDoneRecipes.length > 0 && allDoneRecipes.map((recipe, index) => (
          <div key={ index }>
            <ShareDoneRecipe index={ index } recipe={ recipe } />
            <button
              type="button"
              onClick={ () => redirect(recipe.type, recipe.id) }
            >
              <img
                data-testid={ `${index}-horizontal-image` }
                src={ recipe.image }
                alt="recipe"
                width="50"
              />
            </button>
            <button
              type="button"
            >
              <h1
                data-testid={ `${index}-horizontal-name` }
              >
                { recipe.name }
              </h1>
            </button>

            <p data-testid={ `${index}-horizontal-top-text` }>
              { recipe.type === 'meal' ? recipe.category : recipe.alcoholicOrNot }
            </p>
            <p data-testid={ `${index}-horizontal-done-date` }>{ recipe.doneDate }</p>
            {
              recipe.tags.map((tag, i) => (
                <button
                  key={ i }
                  type="button"
                  data-testid={ `${index}-${tag}-horizontal-tag` }
                >
                  { tag }
                </button>
              ))
            }
          </div>
        ))
      }
    </div>
  )
}

export default CardDone;
