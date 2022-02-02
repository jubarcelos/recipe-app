import React from 'react';
import shareRecipe from '../images/shareIcon.svg';
import favoriteRecipe from '../images/whiteHeartIcon.svg';

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
    </div>
  );
}

export default DetailsCard;

// O texto da categoria deve possuir o atributo data-testid="recipe-category";
// Os ingredientes devem possuir o atributo data-testid="${index}-ingredient-name-and-measure";
// O texto de instruções deve possuir o atributo data-testid="instructions";
// O vídeo, presente somente na tela de comidas, deve possuir o atributo data-testid="video";
// O card de receitas recomendadas deve possuir o atributo data-testid="${index}-recomendation-card";
// O botão de iniciar receita deve possuir o atributo data-testid="start-recipe-btn";