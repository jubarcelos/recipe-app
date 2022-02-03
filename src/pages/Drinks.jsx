import React, { useContext, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { drinkContext } from '../context';
import Card from '../components/Card';
import CategoryButton from '../components/CategoryButton';

function Drinks() {
  const { drinkRecipes, drinkCategories, setDrinkRecipes } = useContext(drinkContext);
  const history = useHistory();

  useEffect(() => {
    if (drinkRecipes.length === 1) {
      const drinkId = drinkRecipes[0].idDrink;
      history.push(`/drinks/${drinkId}`);
    }
  }, [drinkRecipes, history]);

  const handleButtonsFilter = async (category) => {
    const response = await fetch(`https://www.thecocktaildb.com/api/json/v1/1/filter.php?c=${category}`);
    const result = await response.json();
    setDrinkRecipes(result.drinks);
  };

  return (
    <div>
      <Header title="Drinks" />
      <section>
        {
          drinkCategories.map((category) => (
            <CategoryButton
              name={ category }
              key={ category }
              handleButtonsFilter={ handleButtonsFilter }
            />
          ))
        }
      </section>
      <Footer />
      {
        drinkRecipes.length > 1
        && drinkRecipes.map((drink, index) => (
          <Card
            key={ drink.strDrink }
            recipeImage={ drink.strDrinkThumb }
            recipeName={ drink.strDrink }
            index={ index }
          />
        ))
      }
    </div>
  );
}

export default Drinks;
