import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { useParams } from 'react-router-dom';
import copy from 'clipboard-copy';
import ShareIcon from '../images/shareIcon.svg';
import WhiteHeartIcon from '../images/whiteHeartIcon.svg';
import BlackHeartIcon from '../images/blackHeartIcon.svg';
import {
  appendRecipe,
  getLocalStorageInfo,
  removeLocalStorageFavorites,
} from '../services/localStorage';

function FoodDetails({
  actualRecipe,
  renderRecipeDetails,
  ingredients }) {
  const cutVideoAddress = actualRecipe.strYoutube.split('watch?v=');
  const newVideoAddress = cutVideoAddress.join('embed/');
  const [copiedLink, setCopiedLink] = useState('');

  const handleShareClick = async () => {
    await copy(window.location.href);
    return setCopiedLink('copied');
  };
  const { id } = useParams();
  const whiteHeart = (
    <img data-testid="favorite-btn" src={ WhiteHeartIcon } alt="heart" />
  );
  const blackHeart = (
    <img data-testid="favorite-btn" src={ BlackHeartIcon } alt="heart" />
  );
  const [isFavorite, setIsFavorite] = useState(false);
  const { idMeal, strCategory, strMeal, strArea,
    strMealThumb } = actualRecipe;

  useEffect(() => {
    if (localStorage.getItem('favoriteRecipes')
      && localStorage.getItem('favoriteRecipes') !== []) {
      return setIsFavorite(getLocalStorageInfo('favoriteRecipes')
        .some((recipe) => recipe.id === id));
    }
    return setIsFavorite(false);
  }, [id]);

  const handleFavoriteClick = () => {
    const favoriteRecipe = {
      id: idMeal,
      type: 'food',
      nationality: strArea,
      category: strCategory,
      alcoholicOrNot: '',
      name: strMeal,
      image: strMealThumb,
    };
    console.log(favoriteRecipe);
    if (isFavorite === false) {
      appendRecipe(favoriteRecipe, 'favoriteRecipes');
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
        src={ actualRecipe.strMealThumb }
        alt="recipe"
        width="350"
      />
      <div>
        <h1 data-testid="recipe-title">
          { actualRecipe.strMeal }
        </h1>
        <button
          type="button"
          onClick={ () => handleShareClick() }
        >
          <img data-testid="share-btn" src={ ShareIcon } alt="share" />
        </button>
        <button
          type="button"
          onClick={ () => handleFavoriteClick() }

        >
          { isFavorite ? blackHeart : whiteHeart }
        </button>
      </div>
      { copiedLink && <p>Link copied!</p> }
      <h3 data-testid="recipe-category">{ actualRecipe.strCategory }</h3>
      <h2>Instructions</h2>
      <p data-testid="instructions">
        { actualRecipe.strInstructions }
      </p>
      <h2>Ingredients</h2>
      { renderRecipeDetails(ingredients) }
      <div className="iframe-container">
        <h2>Video</h2>
        <iframe
          data-testid="video"
          width="560"
          height="315"
          src={ newVideoAddress }
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer;
          autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
      </div>
    </div>
  );
}

export default FoodDetails;

FoodDetails.propTypes = {
  actualRecipe: PropTypes.objectOf(PropTypes.string).isRequired,
  ingredients: PropTypes.arrayOf(PropTypes.array).isRequired,
  renderRecipeDetails: PropTypes.func.isRequired,
};
