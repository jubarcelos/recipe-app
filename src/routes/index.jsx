import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Login from '../pages/Login';
import Profile from '../pages/Profile';
import Foods from '../pages/Foods';
import Drinks from '../pages/Drinks';
import DetailFoods from '../pages/DetailFoods';
import DetailDrinks from '../pages/DetailDrinks';
import DoneRecipes from '../pages/DoneRecipes';
import DrinksExplore from '../pages/DrinksExplore';
import FoodsExplore from '../pages/FoodsExplore';
import DrinksIngredients from '../pages/DrinksIngredients';
import FoodsIngredients from '../pages/FoodsIngredients';
import FoodsNationalities from '../pages/FoodsNationalities';
import Explore from '../pages/Explore';
import FavoritesRecipes from '../pages/FavoritesRecipes';
import ProgressFood from '../pages/ProgressFood';
import ProgressDrinks from '../pages/ProgressDrinks';
import NotFound from '../pages/NotFound';

function Routes() {
  return (
    <Switch>
      <Route exact path="/" component={ Login } />
      <Route exact path="/profile" component={ Profile } />
      <Route exact path="/foods" component={ Foods } />
      <Route exact path="/drinks" component={ Drinks } />
      <Route exact path="/explore" component={ Explore } />
      <Route exact path="/explore/drinks" component={ DrinksExplore } />
      <Route exact path="/explore/foods" component={ FoodsExplore } />
      <Route
        exact
        path="/explore/foods/ingredients"
        component={ FoodsIngredients }
      />
      <Route
        exact
        path="/explore/drinks/ingredients"
        component={ DrinksIngredients }
      />
      <Route
        exact
        path="/explore/foods/nationalities"
        component={ FoodsNationalities }
      />
      <Route exact path="/done-recipes" component={ DoneRecipes } />
      <Route exact path="/favorite-recipes" component={ FavoritesRecipes } />
      <Route
        exact
        path="/foods/:id"
        component={ DetailFoods }
      />
      <Route
        exact
        path="/drinks/:id"
        component={ DetailDrinks }
      />
      <Route
        exact
        path="/foods/:id/in-progress"
        component={ ProgressFood }
      />
      <Route
        exact
        path="/drinks/:id/in-progress"
        component={ ProgressDrinks }
      />
      <Route
        path="*"
        component={ NotFound }
      />

    </Switch>
  );
}

export default Routes;
