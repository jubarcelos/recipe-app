import React, { useEffect, useState, useContext } from 'react';
import { useHistory, useParams } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
// import GridListTileBar from '@material-ui/core/GridListTileBar';
import { userContext } from '../context';
import getRecommendation from '../services/getRecommendation';

function Carrossel() {
  const useStyles = makeStyles(() => ({
    root: {
      display: 'flex',
      flexWrap: 'wrap',
      justifyContent: 'space-around',
      overflow: 'hidden',
    },
    gridList: {
      flexWrap: 'nowrap',
    },
  }));

  const [loading, setLoading] = useState(false);
  const { recommendations, setRecommendations } = useContext(userContext);

  const history = useHistory();
  const { location: { pathname } } = history;
  const { id } = useParams();

  useEffect(() => {
    const recipeRecommendation = async () => {
      const FIVE = 5;
      const renderRecommendation = await getRecommendation(pathname, id);
      const sixRecipes = renderRecommendation.filter((_recipe, index) => index <= FIVE);
      console.log(sixRecipes);
      setRecommendations(sixRecipes);
      setLoading(true);
    };
    recipeRecommendation();
  }, [pathname, id, setRecommendations]);

  const classes = useStyles();

  const recommendationCard = (recipes) => (
    <div className={ classes.root }>
      <GridList
        className={ classes.gridList }
        cols={ 2 }
      >
        { recipes.map((recipe, index) => (
          <GridListTile key={ index }>
            <div key={ index } data-testid={ `${index}-recomendation-card` }>
              <img
                data-testid={ `${index}-card-img` }
                src={ recipe.strDrinkThumb ? recipe.strDrinkThumb : recipe.strMealThumb }
                alt="recipeImage"
                width="120px"
              />
              <h3
                data-testid={ `${index}-recomendation-title` }
              >
                { recipe.strDrink ? recipe.strDrink : recipe.strMeal }
              </h3>
              {/* { recipe.strDrink
                ? (
                  <GridListTileBar
                    title={ recipe.strDrink }
                    data-testid={ `${index}}-recomendation-title` }
                  />
                ) : (
                  <GridListTileBar
                    title={ recipe.strMeal }
                    data-testid={ `${index}}-recomendation-title` }
                  />
                )} */}
            </div>
          </GridListTile>
        )) }
      </GridList>
    </div>);

  return (
    <div>
      <h2>Recommendation</h2>
      {
        loading && recommendationCard(recommendations)
      }
    </div>
  );
}

export default Carrossel;
