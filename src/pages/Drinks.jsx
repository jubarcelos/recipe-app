import React, { useContext, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import Header from '../components/Header';
import { drinkContext } from '../context';

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
    </div>
  );
}

export default Drinks;
