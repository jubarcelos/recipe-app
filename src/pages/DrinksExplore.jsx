import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';

function DrinksExplore() {
  return (
    <div>
      <Header title="Explore Drinks" />
      <main>
        <Link to="/explore/drinks/ingredients">
          <h2 data-testid="explore-by-ingredient">By Ingredient</h2>
        </Link>
        <Link to="/explore/drinks/nationalities">
          <h2 data-testid="explore-surprise">Surprise me!</h2>
        </Link>
      </main>
      <Footer />
    </div>
  );
}

export default DrinksExplore;
