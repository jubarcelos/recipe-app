import React from 'react';
import Header from '../components/Header';
import CardDone from '../components/CardDone';
import ButtonFilters from '../components/ButtonFilters';
import { getLocalStorageInfo } from '../services/localStorage';

function DoneRecipes() {
  const allDoneRecipes = getLocalStorageInfo('doneRecipes');

  return (
    <div>
      <Header title="Done Recipes" />
      <ButtonFilters allDoneRecipes={ allDoneRecipes } />
      <CardDone allDoneRecipes={ allDoneRecipes } />
    </div>
  );
}

export default DoneRecipes;
