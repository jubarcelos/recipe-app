const getRecipeById = (pathname, id) => {
  switch (pathname) {
  case `/foods/${id}`:
    return fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`)
      .then((response) => response.json())
      .then((data) => data.meals);
  case `/drinks/${id}`:
    return fetch(`https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${id}`)
      .then((response) => response.json())
      .then((data) => data.drinks);
  default: return 'null';
  }
};
export default getRecipeById;
