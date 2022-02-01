export const getFoodRecipes = (filter, searchInput) => {
  switch (filter) {
  case 'ingredient':
    return fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?i=${searchInput}`)
      .then((response) => response.json());
  case 'name':
    return fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${searchInput}`)
      .then((response) => response.json());
  case 'firstLetter':
    return fetch(`https://www.themealdb.com/api/json/v1/1/search.php?f=${searchInput}`)
      .then((response) => response.json());
  default: return null;
  }
};

export const getDrinkRecipes = (filter, searchInput) => {
  switch (filter) {
  case 'ingredient':
    return fetch(`https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=${searchInput}`)
      .then((response) => response.json());
  case 'name':
    return fetch(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${searchInput}`)
      .then((response) => response.json());
  case 'firstLetter':
    return fetch(`https://www.thecocktaildb.com/api/json/v1/1/search.php?f=${searchInput}`)
      .then((response) => response.json());
  default: return null;
  }
};
