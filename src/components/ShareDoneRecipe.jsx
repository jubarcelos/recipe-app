import React, { useState } from 'react';
import PropTypes from 'prop-types';
import copy from 'clipboard-copy';
import ShareIcon from '../images/shareIcon.svg';

function ShareDoneRecipe(recipe) {
  const [copiedLink, setCopiedLink] = useState(false);
  const url = 'http://localhost:3000';
  const { type, id } = recipe;

  const handleShareClick = async () => {
    await copy(`${url}/${type}s/${id}`);
    return setCopiedLink(true);
  };

  return (
    <div>
      <button
        data-testid={ `${index}-horizontal-share-btn` }
        type="button"
        onClick={ () => handleShareClick() }
      >
        <img data-testid="share-btn" src={ ShareIcon } alt="share" />
      </button>
      { copiedLink && <p>Link copied!</p> }

    </div>
  );
}

export default ShareDoneRecipe;

ShareDoneRecipe.propTypes = {
  // index: PropTypes.number.isRequired,
  recipe: PropTypes.shape({
    id: PropTypes.number,
    type: PropTypes.string,
  }).isRequired,
};
