import React from 'react';
import PropTypes from 'prop-types';
import { useHistory } from 'react-router-dom';
import shareRecipe from '../images/shareIcon.svg';
import favoriteRecipe from '../images/whiteHeartIcon.svg';
import getRecipeById from '../services/getRecipeById';

function DetailsCard(props) {
  const history = useHistory();
  const { location: { pathname } } = history;

  useEffect(() => {
    const { match: { params: { id } } } = props;
    console.log('oi');
    getRecipeById(pathname, id);
  }, [pathname, props]);

  return (
    <div>
      <img
        data-testid="recipe-photo"
        src={ recipeImage }
        alt="recipe"
      />
      <div>
        <h1 data-testid="recipe-title">
          { recipeTitle }
        </h1>
        <button type="button">
          { shareRecipe }
        </button>
        <button type="button">
          { favoriteRecipe }
        </button>
      </div>
      <p data-testid="recipe-category">{ category }</p>
      {/* <h2 data-testid="${index}-ingredient-name-and-measure"> oi </h2> */}
      <p data-testid="instructions"> oi</p>
      <video data-testid="video" src={ recipeVideo } controls>
        <track kind="captions" />
        O seu navegador não suporta o elemento
        <code>video</code>
      </video>
    </div>
  );
}

export default DetailsCard;

DetailsCard.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.string,
    }),
  }).isRequired,
};
