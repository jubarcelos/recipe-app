import React, { useEffect, useState } from 'react';
import { useParams, useHistory } from 'react-router-dom';
import getRecipeById from '../services/getRecipeById';
import FoodDetails from './FoodDetails';
import DrinkDetails from './DrinkDetails';

function DetailsCard() {
  const [actualRecipe, setActualRecipe] = useState({});
  const [isLoading, setIsLoading] = useState(false);

  const history = useHistory();
  const { location: { pathname } } = history;
  const { id } = useParams();

  useEffect(() => {
    const selectRecipe = async () => {
      const selectedRecipe = await getRecipeById(pathname, id);
      setActualRecipe(selectedRecipe[0]);
      setIsLoading(true);
    };
    selectRecipe();
  }, [pathname, id]);

  const actualRecipeArray = Object.entries(actualRecipe);
  const ingredients = actualRecipeArray.filter((item) => item[0]
    .includes('strIngredient') && item[1] !== '' && item[1] !== null);

  const measure = actualRecipeArray.filter((item) => item[0]
    .includes('strMeasure') && item[1] !== '' && item[1] !== null);

  const renderRecipeDetails = (datas) => (
    datas.map((data, index) => (
      <p
        key={ data[0] }
        data-testid={ `${index}-ingredient-name-and-measure` }
      >
        {
          measure[index] ? `${measure[index][1]} - ${data[1]}`
            : data[1]
        }
      </p>
    )));

  return (
    <div>
      { isLoading
        && (
          pathname === `/foods/${id}` ? <FoodDetails
            actualRecipe={ actualRecipe }
            renderRecipeDetails={ renderRecipeDetails }
            ingredients={ ingredients }

          /> : <DrinkDetails
            actualRecipe={ actualRecipe }
            renderRecipeDetails={ renderRecipeDetails }
            ingredients={ ingredients }
          />
        )}
    </div>
  );
}

export default DetailsCard;
