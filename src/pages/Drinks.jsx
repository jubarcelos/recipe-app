import React, { useContext, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import Header from '../components/Header';
import { drinkContext } from '../context';
import Card from '../components/Card';

function Drinks() {
  const { drinkRecipes } = useContext(drinkContext);
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
