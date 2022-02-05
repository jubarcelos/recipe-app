import React, { useState } from 'react';
import PropTypes from 'prop-types';
import copy from 'clipboard-copy';
import ShareIcon from '../images/shareIcon.svg';
import WhiteHeartIcon from '../images/whiteHeartIcon.svg';

function DrinkDetails({
  actualRecipe,
  ingredients,
  renderRecipeDetails }) {
  const [copiedLink, setCopiedLink] = useState('');
  const handleShareClick = async () => {
    await copy(window.location.href);
    console.log(copiedLink, copy);
    return setCopiedLink('copied');
  };

  return (
    <div>
      <img
        data-testid="recipe-photo"
        src={ actualRecipe.strDrinkThumb }
        alt="recipe"
        width="350"
      />
      <div>
        <h1 data-testid="recipe-title">
          { actualRecipe.strDrink }
        </h1>
        <button
          type="button"
          onClick={ () => handleShareClick() }
        >
          <img data-testid="share-btn" src={ ShareIcon } alt="share" />
        </button>
        <button type="button">
          <img data-testid="favorite-btn" src={ WhiteHeartIcon } alt="heart" />
        </button>
        { copiedLink && global.alert('Link copied!')}
      </div>
      <p data-testid="recipe-category">{ actualRecipe.strAlcoholic }</p>
      <p data-testid="instructions">
        { actualRecipe.strInstructions }
      </p>
      { renderRecipeDetails(ingredients) }
    </div>
  );
}

export default DrinkDetails;

DrinkDetails.propTypes = {
  actualRecipe: PropTypes.objectOf.isRequired,
  ingredients: PropTypes.arrayOf(PropTypes.array).isRequired,
  renderRecipeDetails: PropTypes.func.isRequired,
};
