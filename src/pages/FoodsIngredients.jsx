import React, { useContext } from 'react';
import { foodContext } from '../context';
import Header from '../components/Header';
import Footer from '../components/Footer';
import IngredientCard from '../components/IngredientCard';

function FoodsIngredients() {
  const { ingredientsFoods } = useContext(foodContext);

  return (
    <div>
      <Header title="Explore Ingredients" />
      <h1>foods ingredients</h1>
      <div>
        {
          ingredientsFoods.map((ingredient, index) => (
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

export default FoodsIngredients;
