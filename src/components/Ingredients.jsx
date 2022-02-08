import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import { foodContext } from '../context';

function Ingredients({ ingredients, handleIngredientCheckbox, id }) {
  const { ingrChecked, setIngrChecked } = useContext(foodContext);

  return (
    <ol>
      {
        ingredients.map((ingredient) => (
          <div key={ ingredient }>
            <li>
              <input
                type="checkbox"
                name={ ingredient }
                onChange={ (e) => {
                  handleIngredientCheckbox(e);
                  setIngrChecked({
                    ...ingrChecked,
                    [id]: { ...ingrChecked[id], [ingredient]: true } });
                } }
                defaultChecked={ ingrChecked[id]
                  ? ingrChecked[id][ingredient] : null }
              />
              { ingredient }
            </li>
          </div>
        ))
      }
    </ol>
  );
}

Ingredients.propTypes = {
  ingredients: PropTypes.arrayOf(PropTypes.string).isRequired,
  handleIngredientCheckbox: PropTypes.func.isRequired,
  id: PropTypes.string.isRequired,
};

export default Ingredients;
