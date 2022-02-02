import React, { useContext, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { drinkContext } from '../context';
import Card from '../components/Card';
import CategoryButton from '../components/CategoryButton';

function Drinks() {
  const { drinkRecipes, drinkCategories } = useContext(drinkContext);
  const history = useHistory();

  useEffect(() => {
    if (drinkRecipes.length === 1) {
      const drinkId = drinkRecipes[0].idDrink;
      history.push(`/drinks/${drinkId}`);
    }
  }, [drinkRecipes, history]);

  return (
    <div>
      <Header title="Drinks" />
      <section>
        {
          drinkCategories.map((category) => (
            <CategoryButton name={ category } key={ category } />
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
