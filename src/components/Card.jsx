import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

function Card({ index, recipeImage, recipeName, id, type }) {
  return (
    <div>
      <Link
        to={ {
          pathname: `/${type}s/${id}`,
        } }
        data-testid={ `${index}-recipe-card` }
      >
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
      </Link>
    </div>
  );
}

export default Card;

Card.propTypes = {
  recipeImage: PropTypes.string.isRequired,
  recipeName: PropTypes.string.isRequired,
  index: PropTypes.number.isRequired,
  id: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
};
