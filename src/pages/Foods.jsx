import React, { useContext, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { foodContext, userContext } from '../context';
import Card from '../components/Card';
import CategoryButton from '../components/CategoryButton';

function Foods() {
  const {
    foodRecipes,
    foodCategories,
    setFoodRecipes,
  } = useContext(foodContext);

  const { search, setSearch } = useContext(userContext);

  const history = useHistory();

  useEffect(() => {
    if (foodRecipes.length === 1 && search === true) {
      const foodId = foodRecipes[0].idMeal;
      history.push(`/foods/${foodId}`);
    }
  }, [foodRecipes, history, search]);

  const handleButtonsFilter = async (category) => {
    setSearch(false);
    const response = await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?c=${category}`);
    const result = await response.json();
    setFoodRecipes(result.meals);
  };

  return (
    <div>
      <Header title="Foods" />
      <section>
        {
          foodCategories.map((category) => (
            <CategoryButton
              key={ category }
              name={ category }
              handleButtonsFilter={ handleButtonsFilter }
            />
          ))
        }
      </section>
      <Footer />
      {
        foodRecipes.map((food, index) => (
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
