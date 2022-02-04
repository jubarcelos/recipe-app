import React from 'react';
import DetailsCard from '../components/DetailsCard';
import StartRecipe from '../components/StartRecipe';
import Carousel from '../components/Carousel';

function DetailFoods() {
  return (
    <div>
      <h1>detail foods</h1>
      <DetailsCard />
      <Carousel />
      <StartRecipe />
    </div>
  );
}

export default DetailFoods;
