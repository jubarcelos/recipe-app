import React, { useState, useContext, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { drinkContext, userContext } from '../context';
import Card from '../components/Card';
import CategoryButton from '../components/CategoryButton';

function Drinks() {
  const [selectedCategory, setSelectedCategory] = useState('');
  const {
    drinkRecipes,
    drinkCategories,
    setDrinkRecipes,
    setInitialRecipes,
  } = useContext(drinkContext);

  const history = useHistory();

  const { search, setSearch } = useContext(userContext);

  useEffect(() => {
    if (drinkRecipes.length === 1 && search === true) {
      const drinkId = drinkRecipes[0].idDrink;
      history.push(`/drinks/${drinkId}`);
    }
  }, [drinkRecipes, history, search]);

  const handleButtonsFilter = async (category) => {
    setSelectedCategory(category);
    setSearch(false);
    if (category !== selectedCategory) {
      const response = await fetch(`https://www.thecocktaildb.com/api/json/v1/1/filter.php?c=${category}`);
      const result = await response.json();
      const ELEVEN = 11;
      const twoelvRecipes = result.drinks.filter((__, index) => index <= ELEVEN);
      setDrinkRecipes(twoelvRecipes);
    } else {
      setInitialRecipes();
      setSelectedCategory('');
    }
  };

  return (
    <div>
      <Header title="Drinks" />
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
