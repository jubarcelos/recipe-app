import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import ProfileIcon from '../images/profileIcon.svg';
import SearchIcon from '../images/searchIcon.svg';
import SearchBar from './SearchBar';

function Header() {
  const [showBar, setShowBar] = useState(false);

  const toggleSearchBar = () => (
    setShowBar((preventState) => !preventState)
  );

  return (
    <header>
      <Link to="/profile">
        <img
          data-testid="profile-top-btn"
          src={ ProfileIcon }
          alt="iconProfile"
        />
      </Link>
      <h1 data-testid="page-title"> Title </h1>
      <button
        type="button"
        onClick={ toggleSearchBar }
      >
        <img
          data-testid="search-top-btn"
          src={ SearchIcon }
          alt="iconSearch"
        />
      </button>
      {
        showBar && <SearchBar />
      }
    </header>
  );
}

// linha 35 tem que ir pra página principal de receitas
export default Header;
