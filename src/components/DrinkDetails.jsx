import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { useParams } from 'react-router-dom';
import copy from 'clipboard-copy';
import ShareIcon from '../images/shareIcon.svg';
import WhiteHeartIcon from '../images/whiteHeartIcon.svg';
import BlackHeartIcon from '../images/blackHeartIcon.svg';
import {
  setLocalStorageFavorites,
  getLocalStorageFavorites,
  removeLocalStorageFavorites,
} from '../services/localStorage';

function DrinkDetails({
  actualRecipe,
  ingredients,
  renderRecipeDetails }) {
  const { id } = useParams();
  const [copiedLink, setCopiedLink] = useState('');
  const whiteHeart = (
    <img data-testid="favorite-btn" src={ WhiteHeartIcon } alt="heart" />
  );
  const blackHeart = (
    <img data-testid="favorite-btn" src={ BlackHeartIcon } alt="heart" />
  );
  const handleShareClick = async () => {
    await copy(window.location.href);
    return setCopiedLink('copied');
  };

  const [isFavorite, setIsFavorite] = useState(false);
  const { idDrink, strCategory, strAlcoholic, strDrink,
    strDrinkThumb } = actualRecipe;

  useEffect(() => {
    setIsFavorite(getLocalStorageFavorites().some((recipe) => recipe.id === id));
    return setIsFavorite(false);
  }, [id]);

  const handleFavoriteClick = () => {
    const favoriteRecipe = {
      id: idDrink,
      type: 'drink',
      nationality: '',
      category: strCategory,
      alcoholicOrNot: strAlcoholic,
      name: strDrink,
      image: strDrinkThumb,
    };
    if (isFavorite === false) {
      setLocalStorageFavorites(favoriteRecipe);
      setIsFavorite(true);
    } else {
      removeLocalStorageFavorites(favoriteRecipe);
      setIsFavorite(false);
    }
  };

  return (
    <div>
      <img
        data-testid="recipe-photo"
        src={ actualRecipe.strDrinkThumb }
        alt="recipe"
        width="350"
      />
      <h1 data-testid="recipe-title">
        { actualRecipe.strDrink }
      </h1>
      <button
        type="button"
        onClick={ () => handleShareClick() }
      >
        <img data-testid="share-btn" src={ ShareIcon } alt="share" />
      </button>
      { copiedLink && global.alert('Link copied!') }
      <button
        type="button"
        onClick={ () => handleFavoriteClick() }
      >
        { isFavorite ? blackHeart : whiteHeart }
      </button>
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
  actualRecipe: PropTypes.objectOf(PropTypes.string).isRequired,
  ingredients: PropTypes.arrayOf(PropTypes.array).isRequired,
  renderRecipeDetails: PropTypes.func.isRequired,
};
