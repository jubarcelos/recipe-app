import React, { useState } from 'react';
import { useHistory } from 'react-router';
import PropTypes from 'prop-types';
import ShareDoneRecipe from './ShareDoneRecipe';
import ButtonFilters from './ButtonFilters';

function CardDone({ allRecipes }) {
  const [actualFiltered, setActualFiltered] = useState(allRecipes);
  const history = useHistory();
  const redirect = (type, id) => (
    history.push(`/${type}s/${id}`)
  );
  return (
    <div>
      <ButtonFilters
        setActualFiltered={ setActualFiltered }
        allRecipes={ allRecipes }
      />

      {
        actualFiltered.length > 0 && actualFiltered.map((recipe, index) => (
          <div key={ index }>
            <ShareDoneRecipe index={ index } recipe={ recipe } />
            <p data-testid={ `${index}-horizontal-top-text` }>
              { recipe.type === 'food'
                ? `${recipe.nationality} - ${recipe.category}`
                : recipe.alcoholicOrNot }

            </p>
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
              onClick={ () => redirect(recipe.type, recipe.id) }
            >
              <h1
                data-testid={ `${index}-horizontal-name` }
              >
                { recipe.name }
              </h1>
            </button>

            <p data-testid={ `${index}-horizontal-done-date` }>{ recipe.doneDate }</p>
            {
              recipe.tags.length > 0
                && recipe.tags.map((tag, i) => (
                  <button
                    key={ i }
                    type="button"
                    data-testid={ `0-${tag}-horizontal-tag` }
                  >
                    { tag }
                  </button>
                ))
            }
          </div>
        ))
      }
    </div>
  );
}

export default CardDone;

CardDone.propTypes = {
  allRecipes: PropTypes.arrayOf(PropTypes.any).isRequired,
};
