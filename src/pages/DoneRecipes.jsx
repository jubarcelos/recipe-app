import React from 'react';
// import { useParams } from 'react-router-dom';
import Header from '../components/Header';
// import { setDoneRecipe } from '../services/localStorage';

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
