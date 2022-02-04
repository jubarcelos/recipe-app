import React, { useEffect } from 'react';
import { useHistory, useParams } from 'react-router-dom';
import getRecommendation from '../services/getRecommendation';
// import { userContext } from '../context';

function Carrossel() {
  // const [loading, setLoading] = useState(false);
  // const [recommendations, setRecommendations] = useContext(userContext);

  const history = useHistory();
  const { location: { pathname } } = history;
  const { id } = useParams();

  useEffect(() => {
    const recipeRecommendation = async () => {
      const FIVE = 5;
      const renderRecommendation = await getRecommendation(pathname, id);
      const sixRecipes = renderRecommendation.filter((_recipe, index) => index <= FIVE);
      setRecommendations(sixRecipes);
      setLoading(true);
    };
    recipeRecommendation();
  }, [pathname, id]);

  // const drinkRecommendationsArray = Object.entries(drinkRecommendations);
  // const foodRecommendationsArray = Object.entries(foodRecommendations);

  // const recommendationCard = (recipes) => {
  //   recipes.map((recipe, index) => (
  //     <div key={ index } data-testid={ `${index}-recipe-card` }>
  //       <img
  //         data-testid={ `${index}-card-img` }
  //         src={ recipe.strThumbDrink }
  //         alt="recipeImage"
  //         width="80"
  //       />
  //       <p
  //         data-testid={ `${index}-card-name` }
  //       >
  //         { recipe.strDrink }
  //         será que veio?
  //       </p>
  //     </div>
  //   ));
  // };

  return (
    <div>
      <h1>Carrossel</h1>
      {/* {
        loading && pathname === `/foods/${id}`
          ? recommendationCard(drinkRecommendationsArray)
          : recommendationCard(foodRecommendationsArray)
      } */}
    </div>
  );
}

export default Carrossel;
