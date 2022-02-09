import React, { useContext, useEffect } from 'react';
import PropTypes from 'prop-types';
import { foodContext } from '../context';

function IngredientsFood({
  ingredients, id, setIsDisabled }) {
  const { ingrChecked, setIngrChecked } = useContext(foodContext);

  const handleIngredientCheckbox = ({ target }) => {
    const progress = JSON.parse(localStorage.getItem('inProgressRecipes'));
    if (progress.meals[id] && progress.meals[id].includes(target.name)) {
      const newIngr = progress.meals[id].filter((ingr) => ingr !== target.name);
      const newLS = {
        cocktails: { ...progress.cocktails },
        meals: { ...progress.meals, [id]: newIngr },
      };
      return localStorage.setItem('inProgressRecipes', JSON.stringify(newLS));
    }
    if (progress.meals[id]) {
      const newLS = {
        cocktails: { ...progress.cocktails },
        meals: { ...progress.meals, [id]: [...progress.meals[id], target.name] },
      };
      return localStorage.setItem('inProgressRecipes', JSON.stringify(newLS));
    }
  };

  useEffect(() => {
    const progress = JSON.parse(localStorage.getItem('inProgressRecipes'));
    if (progress === null) {
      const newLS = {
        cocktails: {},
        meals: { [id]: [] },
      };
      localStorage.setItem('inProgressRecipes', JSON.stringify(newLS));
    }
  }, []);

  useEffect(() => {
    const localIngr = JSON.parse(localStorage.getItem('inProgressRecipes'));
    if (localIngr.meals[id] && localIngr.meals[id].length > 1
      && localIngr.meals[id].length === ingredients.length) {
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
                  .meals[id]
                  && JSON.parse(localStorage.getItem('inProgressRecipes'))
                    .meals[id]
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
                  .meals[id]
                    && JSON.parse(localStorage.getItem('inProgressRecipes'))
                      .meals[id].includes(ingredient) }
              />
              { ingredient }
            </li>
          </div>
        ))
      }
    </ol>
  );
}

IngredientsFood.propTypes = {
  ingredients: PropTypes.arrayOf(PropTypes.string).isRequired,
  id: PropTypes.string.isRequired,
  setIsDisabled: PropTypes.func.isRequired,
};

export default IngredientsFood;
