import React from 'react';
import PropTypes from 'prop-types';

export default function CategoryButton({ name, handleButtonsFilter }) {
  return (
    <button
      type="button"
      data-testid={ `${name}-category-filter` }
      onClick={ () => {
        handleButtonsFilter(name);
      } }
    >
      {name}
    </button>
  );
}

CategoryButton.propTypes = {
  name: PropTypes.string.isRequired,
  handleButtonsFilter: PropTypes.func.isRequired,
};
