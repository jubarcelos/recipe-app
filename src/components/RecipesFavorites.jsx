import React, { useState, useContext } from 'react';
import copy from 'clipboard-copy';
import { Link } from 'react-router-dom';
import { userContext } from '../context';
import BlackHeartIcon from '../images/blackHeartIcon.svg';
import ShareIcon from '../images/shareIcon.svg';
// import ButtonFilters from '../components/ButtonFilters';
import { removeLocalStorageFavorites,
  getLocalStorageInfo } from '../services/localStorage';

function RecipesFavorites() {
  const favoriteRecipe = getLocalStorageInfo('favoriteRecipes');
  const [copiedLink, setCopiedLink] = useState('');
  const { setDeletFavRecipe } = useContext(userContext);

  const handleShareClick2 = async (index) => {
    const url = `http://localhost:3000/foods/${index}`;
    await copy(url);
    return setCopiedLink('copied');
  };

  const removeFav = (favorite) => {
    removeLocalStorageFavorites(favorite);
    setDeletFavRecipe((prevState) => !prevState);
  };

  return (
    <div>
      {/* <ButtonFilters  allRecipes={ favoriteRecipe }  /> */}
      <div>
        {favoriteRecipe.map((favorite, index) => (
          <div key={ favorite.id }>
            <p data-testid={ `${index}-horizontal-top-text` }>
              {favorite.type === 'drink'
                ? favorite.alcoholicOrNot
                : `${favorite.nationality} - ${favorite.category}`}
            </p>
            <div>
              {favorite.type === 'drink' ? (
                <Link to={ `/drinks/${favorite.id}` }>
                  <h3 data-testid={ `${index}-horizontal-name` }>{favorite.name}</h3>
                  <img
                    data-testid={ `${index}-horizontal-image` }
                    src={ favorite.image }
                    alt={ `${favorite.name}` }
                    width="100px"
                  />
                </Link>
              ) : (
                <Link to={ `/foods/${favorite.id}` }>
                  <h3 data-testid={ `${index}-horizontal-name` }>{favorite.name}</h3>
                  <img
                    data-testid={ `${index}-horizontal-image` }
                    src={ favorite.image }
                    alt={ `${favorite.name}` }
                    width="100px"
                  />
                </Link>
              )}
            </div>
            <button
              type="button"
              onClick={ () => handleShareClick2(favorite.id) }
            >
              <img
                data-testid={ `${index}-horizontal-share-btn` }
                src={ ShareIcon }
                alt="share"
              />
            </button>
            <button
              type="button"
              onClick={ () => removeFav(favorite) }
            >
              <img
                data-testid={ `${index}-horizontal-favorite-btn` }
                src={ BlackHeartIcon }
                alt="heart"
              />
            </button>
            {copiedLink && <p>Link copied!</p>}
          </div>
        ))}
      </div>
    </div>
  );
}

export default RecipesFavorites;
