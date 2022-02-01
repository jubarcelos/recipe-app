import React, { useContext, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import Header from '../components/Header';
import { foodContext } from '../context';

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
    </div>
  );
}

export default Foods;
