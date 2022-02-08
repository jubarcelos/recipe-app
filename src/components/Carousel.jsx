import React, { useEffect, useState, useContext } from 'react';
import { useHistory, useParams } from 'react-router-dom';
import getRecommendation from '../services/getRecommendation';
import { userContext } from '../context';

function Carrossel() {
  const [loading, setLoading] = useState(false);
  const { recommendations, setRecommendations } = useContext(userContext);

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
  }, [pathname, id, setRecommendations]);

  const recommendationCard = (recipes) => (
    recipes.map((recipe, index) => (
      <div key={ index } data-testid={ `${index}-recomendation-card` }>
        <img
          data-testid={ `${index}-card-img` }
          src={ recipe.strDrinkThumb ? recipe.strDrinkThumb : recipe.strMealThumb }
          alt="recipeImage"
          width="80"
        />
        <p
          data-testid={ `${index}-recomendation-title` }
        >
          { recipe.strDrink ? recipe.strDrink : recipe.strMeal }
        </p>
      </div>
    ))
  );

  return (
    <div>
      <h1>Carrossel</h1>
      {
        loading && recommendationCard(recommendations)
      }
    </div>
  );
}

export default Carrossel;
