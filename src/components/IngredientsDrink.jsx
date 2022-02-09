import React, { useContext, useEffect } from 'react';
import PropTypes from 'prop-types';
import { foodContext } from '../context';

function IngredientsDrink({
  ingredients, id, setIsDisabled }) {
  const { ingrChecked, setIngrChecked } = useContext(foodContext);

  const handleIngredientCheckbox = ({ target }) => {
    const progress = JSON.parse(localStorage.getItem('inProgressRecipes'));
    if (progress && progress.cocktails[id].includes(target.name)) {
      const newIngr = progress.cocktails[id].filter((ingr) => ingr !== target.name);
      const newLS = {
        cocktails: { ...progress.cocktails, [id]: newIngr },
        meals: { ...progress.meals },
      };
      return localStorage.setItem('inProgressRecipes', JSON.stringify(newLS));
    }
    if (progress) {
      const newLS = {
        cocktails: { ...progress.cocktails,
          [id]: [...progress.cocktails[id], target.name] },
        meals: { ...progress.meals },
      };
      return localStorage.setItem('inProgressRecipes', JSON.stringify(newLS));
    }
  };

  useEffect(() => {
    const progress = JSON.parse(localStorage.getItem('inProgressRecipes'));
    if (progress === null) {
      const newLS = {
        cocktails: { [id]: [] },
        meals: { },
      };
      localStorage.setItem('inProgressRecipes', JSON.stringify(newLS));
    }
  }, []);

  useEffect(() => {
    const localIngr = JSON.parse(localStorage.getItem('inProgressRecipes'));
    if (localIngr && localIngr.cocktails[id].length > 1
      && localIngr.cocktails[id].length === ingredients.length) {
      setIsDisabled(false);
    }
  }, [ingrChecked]);

  return (
    <ol>
      {
        ingredients.map((ingredient, index) => (
          <div key={ ingredient }>
            <li
              data-testid={ `${index}-ingredient-step` }
              style={ {
                textDecoration: JSON.parse(localStorage.getItem('inProgressRecipes'))
                && JSON.parse(localStorage.getItem('inProgressRecipes'))
                  .cocktails[id]
                  .some((ingr) => ingr === ingredient)
                  ? 'line-through' : 'none' } }
            >
              <input
                type="checkbox"
                name={ ingredient }
                onChange={ (e) => {
                  handleIngredientCheckbox(e);
                  setIngrChecked({
                    ...ingrChecked,
                    [id]: { ...ingrChecked[id], [ingredient]: true } });
                } }
                defaultChecked={ JSON.parse(localStorage.getItem('inProgressRecipes'))
                  && JSON.parse(localStorage.getItem('inProgressRecipes'))
                    .cocktails[id].includes(ingredient) }
              />
              { ingredient }
            </li>
          </div>
        ))
      }
    </ol>
  );
}

IngredientsDrink.propTypes = {
  ingredients: PropTypes.arrayOf(PropTypes.string).isRequired,
  id: PropTypes.string.isRequired,
  setIsDisabled: PropTypes.func.isRequired,
};

export default IngredientsDrink;
