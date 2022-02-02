const getRecipeById = (pathname, id) => {
  switch (pathname) {
  case `/foods/${id}`:
    return fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`)
      .then((response) => response.json());
  case `/drinks/${id}`:
    return fetch(`https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${id}`)
      .then((response) => response.json());
  default: return 'oi';
  }
};
export default getRecipeById;
