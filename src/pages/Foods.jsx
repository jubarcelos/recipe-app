import React, { useContext, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { foodContext } from '../context';
import Card from '../components/Card';
import DetailsCard from '../components/DetailsCard';

function Foods() {
  const { foodRecipes } = useContext(foodContext);
  const history = useHistory();

  useEffect(() => {
    if (foodRecipes.length === 1) {
      const foodId = foodRecipes[0].idMeal;
      history.push(`/foods/${foodId}`);
    }
  }, [foodRecipes, history]);

  return (
    <div>
      <Header title="Foods" />
      <DetailsCard />
      <Footer />
      {
        foodRecipes.length > 1
        && foodRecipes.map((food, index) => (
          <Card
            key={ food.strMeal }
            recipeImage={ food.strMealThumb }
            recipeName={ food.strMeal }
            index={ index }
          />
        ))
      }
    </div>
  );
}

export default Foods;
