import React, { useState, useEffect } from 'react';
import { useHistory, useParams } from 'react-router-dom';
import getRecommendation from '../services/getRecommendation';

function Carrossel() {
  const [actualRecommendation, setActualRecommendation] = useState([]);
  const [loading, setLoading] = useState(false);

  const history = useHistory();
  const { location: { pathname } } = history;
  const { id } = useParams();

  useEffect(() => {
    const recipeRecommendation = async () => {
      const FIVE = 5;
      const renderRecommendation = await getRecommendation(pathname, id);
      const sixRecipes = renderRecommendation.filter((_recipe, index) => index <= FIVE);
      setActualRecommendation(sixRecipes);
      setLoading(true);
    };
    recipeRecommendation();
  }, [pathname, id]);

  return (
    <div>
      <h1>Carrossel</h1>
      { loading && console.log(actualRecommendation) }
    </div>
  );
}

export default Carrossel;
