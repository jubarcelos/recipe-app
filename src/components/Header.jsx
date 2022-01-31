import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import ProfileIcon from '../images/profileIcon.svg';
import SearchIcon from '../images/searchIcon.svg';
import SearchBar from './SearchBar';

function Header() {
  const [showBar, setShowBar] = useState(false);

  const history = useHistory();

  const toggleSearchBar = () => (
    setShowBar((preventState) => !preventState)
  );

  const button = (
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
      {
        history.location.pathname === '/foods'
          || history.location.pathname === '/drinks'
          ? button : null
      }

      {
        showBar && <SearchBar />
      }
    </header>
  );
}

// linha 35 tem que ir pra página principal de receitas
export default Header;
