import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import { useHistory } from 'react-router-dom';
import { foodContext, drinkContext } from '../context';
import getFoodsByIngredient from '../services/getFoodsByIngredient';
import getDrinksByIngredient from '../services/getDrinksByIngredient';

function IngredientCard({ name, index }) {
  const { setFoodRecipes } = useContext(foodContext);
  const { setDrinkRecipes } = useContext(drinkContext);
  const history = useHistory();
  const { location: { pathname } } = history;

  const searchByIngredient = async () => {
    if (pathname === '/explore/foods/ingredients') {
      const recipes = await getFoodsByIngredient(name);
      await setFoodRecipes(recipes);
      history.push('/foods');
    } else {
      const recipes = await getDrinksByIngredient(name);
      await setDrinkRecipes(recipes);
      history.push('/drinks');
    }
  };

  return (
    <button
      type="button"
      onClick={ searchByIngredient }
      data-testid={ `${index}-ingredient-card` }
    >
      <div>
        <p data-testid={ `${index}-card-name` }>{name}</p>
        <img
          data-testid={ `${index}-card-img` }
          src={
            pathname === '/explore/foods/ingredients'
              ? `https://www.themealdb.com/images/ingredients/${name}-Small.png`
              : `https://www.thecocktaildb.com/images/ingredients/${name}-Small.png`
          }
          alt={ `imagem do ${name}` }
          width={ `${100}px` }
        />
      </div>
    </button>
  );
}

IngredientCard.propTypes = {
  name: PropTypes.string.isRequired,
  index: PropTypes.number.isRequired,
};

export default IngredientCard;
