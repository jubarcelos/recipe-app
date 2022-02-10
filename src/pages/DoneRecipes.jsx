import React from 'react';
import Header from '../components/Header';
import CardDone from '../components/CardDone';
import { getLocalStorageInfo } from '../services/localStorage';

function DoneRecipes() {
  const allDoneRecipes = getLocalStorageInfo('doneRecipes');
  return (
    <div>
      <Header title="Done Recipes" />
      <CardDone allRecipes={ allDoneRecipes } />
    </div>
  );
}

export default DoneRecipes;
