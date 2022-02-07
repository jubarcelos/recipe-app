import React from 'react';
// import { useParams } from 'react-router-dom';
import Header from '../components/Header';
// import { setDoneRecipe } from '../services/localStorage';

// a chave doneRecipes deve conter a seguinte estrutura:
// [{
//     id: id-da-receita,
//     type: comida-ou-bebida,
//     nationality: nacionalidade-da-receita-ou-texto-vazio,
//     category: categoria-da-receita-ou-texto-vazio,
//     alcoholicOrNot: alcoholic-ou-non-alcoholic-ou-texto-vazio,
//     name: nome-da-receita,
//     image: imagem-da-receita,
//     doneDate: quando-a-receita-foi-concluida,
//     tags: array-de-tags-da-receita-ou-array-vazio
// }]

function DoneRecipes() {
  // const [recipes, setRecipes] = useState([]);
  // const { id } = useParams();

  // useEffect(() => {
  //   setRecipes(id);
  //   console.log(recipes);
  // });
  return (
    <div>
      <Header title="Done Recipes" />
      <h1>done</h1>
      {/* { setDoneRecipe(recipes) } */}
    </div>
  );
}

export default DoneRecipes;
