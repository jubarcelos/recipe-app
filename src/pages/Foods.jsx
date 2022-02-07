import React, { useContext, useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { foodContext, userContext } from '../context';
import Card from '../components/Card';
import CategoryButton from '../components/CategoryButton';

function Foods() {
  const [selectedCategory, setSelectedCategory] = useState('');

  const {
    foodRecipes,
    foodCategories,
    setFoodRecipes,
    setInitialRecipes,
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
    setSelectedCategory(category);
    setSearch(false);
    if (category !== selectedCategory) {
      const response = await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?c=${category}`);
      const result = await response.json();
      const ELEVEN = 11;
      const twelveRecipes = result.meals.filter((__, index) => index <= ELEVEN);
      setFoodRecipes(twelveRecipes);
    } else {
      setInitialRecipes();
      setSelectedCategory('');
    }
  };

  return (
    <div>
      <Header title="Foods" />
      <section>
        <button
          type="button"
          data-testid="All-category-filter"
          onClick={ () => {
            setInitialRecipes();
            setSelectedCategory('');
          } }
        >
          All
        </button>
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
      {
        foodRecipes.map((food, index) => (
          <Card
            key={ food.strMeal }
            recipeImage={ food.strMealThumb }
            recipeName={ food.strMeal }
            index={ index }
            id={ food.idMeal }
          />
        ))
      }
      <Footer />
    </div>
  );
}

export default Foods;
