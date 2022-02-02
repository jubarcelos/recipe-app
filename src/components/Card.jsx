import React from 'react';
import PropTypes from 'prop-types';

function Card({ index, recipeImage, recipeName }) {
  return (
    <div data-testid={ `${index}-recipe-card` }>
      <img
        data-testid={ `${index}-card-img` }
        src={ recipeImage }
        alt="recipeImage"
        width="80"
      />
      <p
        data-testid={ `${index}-card-name` }
      >
        { recipeName }
      </p>
    </div>
  );
}

export default Card;

Card.propTypes = {
  recipeImage: PropTypes.string.isRequired,
  recipeName: PropTypes.string.isRequired,
  index: PropTypes.number.isRequired,
};
