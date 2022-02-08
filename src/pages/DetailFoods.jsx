import React from 'react';
import DetailsCard from '../components/DetailsCard';
import StartContinueRecipe from '../components/StartContinueRecipe';
import Carousel from '../components/Carousel';

function DetailFoods() {
  return (
    <div>
      <h1>detail foods</h1>
      <DetailsCard />
      <Carousel />
      <StartContinueRecipe />
    </div>
  );
}

export default DetailFoods;
