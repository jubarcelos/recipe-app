import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';

function Explore() {
  return (
    <div>
      <Header title="Explore" />
      <main>
        <Link to="/explore/foods">
          <h2 data-testid="explore-foods">Explore Foods</h2>
        </Link>
        <Link to="/explore/drinks">
          <h2 data-testid="explore-drinks">Explore Drinks</h2>
        </Link>
      </main>
      <Footer />
    </div>);
}

export default Explore;
