import React from 'react';
import PropTypes from 'prop-types';
import ShareIcon from '../images/shareIcon.svg';
import WhiteHeartIcon from '../images/whiteHeartIcon.svg';

function FoodDetails({
  actualRecipe,
  renderRecipeDetails,
  ingredients }) {
  const cutVideoAddress = actualRecipe.strYoutube.split('watch?v=');
  const newVideoAddress = cutVideoAddress.join('embed/');

  return (
    <div>
      <img
        data-testid="recipe-photo"
        src={ actualRecipe.strMealThumb }
        alt="recipe"
        width="390"
      />
      <div>
        <h1 data-testid="recipe-title">
          { actualRecipe.strMeal }
        </h1>
        <button type="button">
          <img data-testid="share-btn" src={ ShareIcon } alt="share" />
        </button>
        <button type="button">
          <img data-testid="favorite-btn" src={ WhiteHeartIcon } alt="heart" />
        </button>
      </div>
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
      {/* data-testid="${index}-recomendation-card" */}
    </div>
  );
}

export default FoodDetails;

FoodDetails.propTypes = {
  actualRecipe: PropTypes.objectOf.isRequired,
  ingredients: PropTypes.arrayOf(PropTypes.array).isRequired,
  renderRecipeDetails: PropTypes.func.isRequired,
  // actualRecommendation: PropTypes.arrayOf(PropTypes.object).isRequired,
};
