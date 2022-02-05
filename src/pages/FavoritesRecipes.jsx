import React from 'react';
import Header from '../components/Header';

// a chave favoriteRecipes deve conter a seguinte estrutura:
// [{
//     id: id-da-receita,
//     type: comida-ou-bebida,
//     nationality: nacionalidade-da-receita-ou-texto-vazio,
//     category: categoria-da-receita-ou-texto-vazio,
//     alcoholicOrNot: alcoholic-ou-non-alcoholic-ou-texto-vazio,
//     name: nome-da-receita,
//     image: imagem-da-receita
// }]

function FavoritesRecipes() {
  return (
    <div>
      <Header title="Favorite Recipes" />
    </div>);
}

export default FavoritesRecipes;
