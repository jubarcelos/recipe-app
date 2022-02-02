const getRecipeById = (pathname, id) => {
  switch (pathname) {
  case '/food':
    return fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`)
      .then((response) => response.json());
  case '/drinks':
    return fetch(`https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${id}`)
      .then((response) => response.json());
  default: return null;
  }
};
export default getRecipeById;
