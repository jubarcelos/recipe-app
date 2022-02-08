import React, { useState, useEffect, useContext } from 'react';
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
import Ingredients from '../components/Ingredients';
import { foodContext } from '../context';

function ProgressFood() {
  const [recipeInProgress, setRecipeInProgress] = useState({});
  const [ingredients, setIngredients] = useState([]);
  const [isFavorite, setIsFavorite] = useState(false);
  const [copiedLink, setCopiedLink] = useState('');
  // const [firstAccess, setFirstAccess] = useState(true);
  const { id } = useParams();
  const { ingrChecked, setIngrChecked } = useContext(foodContext);

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
      const recipe = await fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`)
        .then((response) => response.json())
        .then((data) => data.meals[0])
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

  /* useEffect(() => {
    const progress = JSON.parse(localStorage.getItem('inProgressRecipes'));
    if (progress.meals[id]) {
      localStorage.setItem('inProgressRecipes', JSON.stringify({
        cocktails: { ...progress.cocktails },
        meals: { [id]: ingredientsInProgress } }));
    }
  }, [ingredientsInProgress, id]); */

  /* useEffect(() => {
    const progressLS = JSON.parse(localStorage.getItem('inProgressRecipes'));
    setProgressStorage(progressLS);
  }, [ingredientsInProgress]); */

  const handleFavoriteClick = () => {
    const favoriteRecipe = {
      id: recipeInProgress.idMeal,
      type: 'food',
      nationality: recipeInProgress.strArea,
      category: recipeInProgress.strCategory,
      alcoholicOrNot: '',
      name: recipeInProgress.strMeal,
      image: recipeInProgress.strMealThumb,
    };
    if (isFavorite === false) {
      appendRecipe(favoriteRecipe, 'favoriteRecipes');
      setIsFavorite(true);
    } else {
      removeLocalStorageFavorites(favoriteRecipe);
      setIsFavorite(false);
    }
  };

  /*   useEffect(() => {
    const progress = JSON.parse(localStorage.getItem('inProgressRecipes'));
    localStorage.setItem('inProgressRecipes', JSON.stringify({
      ...progress, meals: { ...progress.meals, [id]: [...progress.meals[id], ...inP] } }));
  }, [ingredientsInProgress]); */

  const handleIngredientCheckbox = ({ target }) => {
    const progress = JSON.parse(localStorage.getItem('inProgressRecipes'));
    if (progress.meals[id].includes(target.name)) {
      const newIngr = progress.meals[id].filter((ingr) => ingr !== target.name);
      const newLS = {
        cocktails: { ...progress.cocktails },
        meals: { ...progress.meals, [id]: newIngr },
      };
      return localStorage.setItem('inProgressRecipes', JSON.stringify(newLS));
    }
    const newLS = {
      cocktails: { ...progress.cocktails },
      meals: { ...progress.meals, [id]: [...progress.meals[id], target.name] },
    };
    return localStorage.setItem('inProgressRecipes', JSON.stringify(newLS));
  };

  const handleShareClick = async () => {
    await copy(window.location.href);
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
        src={ recipeInProgress.strMealThumb }
        alt="recipe"
        width="350"
      />
      <div>
        <h1 data-testid="recipe-title">
          { recipeInProgress.strMeal }
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
      <Ingredients
        ingredients={ ingredients }
        handleIngredientCheckbox={ handleIngredientCheckbox }
        id={ id }
      />
    </div>);
}

export default ProgressFood;
