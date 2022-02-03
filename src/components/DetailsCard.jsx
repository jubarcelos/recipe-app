import React, { useEffect } from 'react';
import { useParams, useHistory } from 'react-router-dom';
// import shareRecipe from '../images/shareIcon.svg';
// import favoriteRecipe from '../images/whiteHeartIcon.svg';
import getRecipeById from '../services/getRecipeById';

function DetailsCard() {
  const history = useHistory();
  const { location: { pathname } } = history;
  const { id } = useParams();

  useEffect(() => {
    const test = async () => {
      const datas = await getRecipeById(pathname, id);
      console.log(datas);
    };
    test();
  }, [pathname, id]);

  return (
    <h1>
      oi
    </h1>
    // <div>
    //   <img
    //     data-testid="recipe-photo"
    //     src={ recipeImage }
    //     alt="recipe"
    //   />
    //   <div>
    //     <h1 data-testid="recipe-title">
    //       { recipeTitle }
    //     </h1>
    //     <button type="button">
    //       { shareRecipe }
    //     </button>
    //     <button type="button">
    //       { favoriteRecipe }
    //     </button>
    //   </div>
    //   <p data-testid="recipe-category">{ category }</p>
    //   <h2 data-testid="${index}-ingredient-name-and-measure"> oi </h2>
    //   <p data-testid="instructions"> oi</p>
    //   <video data-testid="video" src={ recipeVideo } controls>
    //     <track kind="captions" />
    //     O seu navegador não suporta o elemento
    //     <code>video</code>
    //   </video>
    // </div>
  );
}

export default DetailsCard;
