import React from 'react';
import PropTypes from 'prop-types';
import { Link, useHistory } from 'react-router-dom';

function Card({ index, recipeImage, recipeName, id }) {
  const card = (
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

  const history = useHistory();
  const { location: { pathname } } = history;
  return (
    <div>
      {
        pathname === '/foods'
          ? <Link to={ `${pathname}/${id}` }>{ card }</Link>
          : <Link to={ `drinks/${id}` }>{ card }</Link>
      }
    </div>

  );
}

export default Card;

Card.propTypes = {
  recipeImage: PropTypes.string.isRequired,
  recipeName: PropTypes.string.isRequired,
  index: PropTypes.number.isRequired,
  id: PropTypes.string.isRequired,
};
