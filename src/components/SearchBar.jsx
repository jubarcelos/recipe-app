import React from 'react';

function SearchBar() {
  return (
    <div>
      <input
        type="text"
        name="search"
        data-testid="search-input"
        placeholder="Search something"
      />
      <div>
        <label htmlFor="ingredient">
          <input
            id="ingredient"
            name="searchFilter"
            data-testid="ingredient-search-radio"
            type="radio"
          />
          Ingredients
        </label>
        <label htmlFor="name">
          <input
            id="name"
            name="searchFilter"
            data-testid="name-search-radio"
            type="radio"
          />
          Name
        </label>
        <label htmlFor="firstLetter">
          <input
            id="firstLetter"
            name="searchFilter"
            data-testid="first-letter-search-radio"
            type="radio"
          />
          First Letter
        </label>
      </div>
    </div>
  );
}

export default SearchBar;
