import React from 'react';
import { Link } from 'react-router-dom';
import drinkIcon from '../images/drinkIcon.svg';
import exploreIcon from '../images/exploreIcon.svg';
import mealIcon from '../images/mealIcon.svg';

function Footer() {
  return (
    <footer>
      <Link to="/drinks">
        <img
          src={ drinkIcon }
          alt="drinkIcon"
        />
      </Link>

      <Link to="/explore">
        <img
          src={ exploreIcon }
          alt="exploreIcon"
        />
      </Link>

      <Link to="/drinks">
        <img
          src={ mealIcon }
          alt="mealIcon"
        />
      </Link>
    </footer>
  );
}

export default Footer;
