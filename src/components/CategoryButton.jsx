import React from 'react';
import PropTypes from 'prop-types';

export default function CategoryButton({ name }) {
  return (
    <button
      type="button"
      data-testid={ `${name}-category-filter` }
    >
      {name}
    </button>
  );
}

CategoryButton.propTypes = {
  name: PropTypes.string.isRequired,
};
