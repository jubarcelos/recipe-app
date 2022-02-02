import React from 'react';
import shareRecipe from '../images/shareIcon.svg';
import favoriteRecipe from '../images/whiteHeartIcon.svg';

const recipeImage = 'https://image.freepik.com/fotos-gratis/3d-rendem-de-uma-mesa-de-madeira-com-uma-imagem-defocussed-de-um-barco-em-um-lago_1048-3432.jpg?w=740';
const recipeVideo = 'https://www.youtube.com/embed/krR4rhjR75Y';

function DetailsCard() {
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

// O card de receitas recomendadas deve possuir o atributo data-testid="${index}-recomendation-card";
// O botão de iniciar receita deve possuir o atributo data-testid="start-recipe-btn";

{/* <a href={ recipeVideo } target="blank">
  <video
    data-testid="video"
    src={ recipeVideo }
    poster={ recipeImage }
  />
</a> */}
