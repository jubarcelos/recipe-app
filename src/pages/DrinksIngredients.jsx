import React, { useContext } from 'react';
import { drinkContext } from '../context';
import Header from '../components/Header';
import Footer from '../components/Footer';
import IngredientCard from '../components/IngredientCard';

function DrinksIngredients() {
  const { drinkIngredients } = useContext(drinkContext);
  return (
    <div>
      <Header title="Explore Ingredients" />
      <div>
        {
          drinkIngredients.map((ingredient, index) => (
            <IngredientCard
              index={ index }
              key={ ingredient }
              name={ ingredient }
            />
          ))
        }
      </div>
      <Footer />
    </div>
  );
}

export default DrinksIngredients;
