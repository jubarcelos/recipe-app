import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';

function FoodsExplore() {
  return (
    <div>
      <Header title="Explore Foods" />
      <main>
        <Link to="/explore/foods/ingredients">
          <h2 data-testid="explore-by-ingredient">By Ingredient</h2>
        </Link>
        <Link to="/explore/foods/nationalities">
          <h2 data-testid="explore-by-nationality">By Nationality</h2>
        </Link>
        <Link to="/explore/drinks/nationalities">
          <h2 data-testid="explore-surprise">Surprise me!</h2>
        </Link>
      </main>
      <Footer />
    </div>
  );
}

export default FoodsExplore;
