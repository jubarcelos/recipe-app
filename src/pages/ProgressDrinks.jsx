import React, { useState, useEffect, useContext } from 'react';
import { useParams, useHistory } from 'react-router-dom';
import copy from 'clipboard-copy';
import ShareIcon from '../images/shareIcon.svg';
import WhiteHeartIcon from '../images/whiteHeartIcon.svg';
import BlackHeartIcon from '../images/blackHeartIcon.svg';
import {
  appendRecipe,
  getLocalStorageInfo,
  removeLocalStorageFavorites,
} from '../services/localStorage';
import IngredientsDrink from '../components/IngredientsDrink';
import { foodContext } from '../context';

function ProgressDrinks() {
  const [recipeInProgress, setRecipeInProgress] = useState({});
  const [ingredients, setIngredients] = useState([]);
  const [isFavorite, setIsFavorite] = useState(false);
  const [copiedLink, setCopiedLink] = useState('');
  const [isDisabled, setIsDisabled] = useState(true);
  const { id } = useParams();
  const { ingrChecked, setIngrChecked } = useContext(foodContext);
  const history = useHistory();

  const saveCheckedOnState = () => {
    if (ingrChecked === {}) {
      let ingrState = {};
      ingredients.forEach((ingr) => {
        ingrState = {
          ...ingrChecked,
          [id]: { [ingr]: false },
        };
      });
      setIngrChecked(ingrState);
    }
  };

  useEffect(() => {
    saveCheckedOnState();
  }, [ingredients]);

  useEffect(() => {
    const saveRecipeOnState = async () => {
      const recipe = await fetch(`https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${id}`)
        .then((response) => response.json())
        .then((data) => data.drinks[0])
        .catch((error) => error);
      setRecipeInProgress(recipe);
      const entries = Object.entries(recipe);
      const listIngredients = entries.filter((item) => item[0]
        .includes('strIngredient') && item[1] !== '' && item[1] !== null)
        .map((ingredient) => ingredient[1]);
      setIngredients(listIngredients);
    };
    saveRecipeOnState();
  }, [id]);

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
      id: recipeInProgress.idDrink,
      type: 'drink',
      nationality: '',
      category: recipeInProgress.strCategory,
      alcoholicOrNot: recipeInProgress.strAlcoholic,
      name: recipeInProgress.strDrink,
      image: recipeInProgress.strDrinkThumb,
    };
    if (isFavorite === false) {
      appendRecipe(favoriteRecipe, 'favoriteRecipes');
      setIsFavorite(true);
    } else {
      removeLocalStorageFavorites(favoriteRecipe);
      setIsFavorite(false);
    }
  };

  const handleShareClick = async () => {
    await copy(`http://localhost:3000/drinks/${id}`);
    return setCopiedLink('copied');
  };
  const whiteHeart = (
    <img data-testid="favorite-btn" src={ WhiteHeartIcon } alt="heart" />
  );
  const blackHeart = (
    <img data-testid="favorite-btn" src={ BlackHeartIcon } alt="heart" />
  );

  return (
    <div>
      <img
        data-testid="recipe-photo"
        src={ recipeInProgress.strDrinkThumb }
        alt="recipe"
        width="350"
      />
      <div>
        <h1 data-testid="recipe-title">
          { recipeInProgress.strDrink }
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
      <h3 data-testid="recipe-category">{ recipeInProgress.strCategory }</h3>
      <h2>Instructions</h2>
      <p data-testid="instructions">
        { recipeInProgress.strInstructions }
      </p>
      <h2>Ingredients</h2>
      <IngredientsDrink
        ingredients={ ingredients }
        id={ id }
        setIsDisabled={ setIsDisabled }
      />
      <button
        type="button"
        disabled={ isDisabled }
        onClick={ () => history.push('/done-recipes') }
        data-testid="finish-recipe-btn"
      >
        Finish Recipe
      </button>
    </div>);
}

export default ProgressDrinks;
