import React from 'react';
import ProfileIcon from '../images/profileIcon.svg';
import SearchIcon from '../images/searchIcon.svg';

function Header() {
  return (
    <header>
      <img data-testid="profile-top-btn" src={ ProfileIcon } alt="iconProfile" />
      <h1 data-testid="page-title"> Title </h1>
      <img data-testid="search-top-btn" src={ SearchIcon } alt="iconSearch" />
    </header>
  );
}

export default Header;
