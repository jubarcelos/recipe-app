const getRecommendation = (pathname, id) => {
  switch (pathname) {
  case `/foods/${id}`:
    return fetch('http://www.thecocktaildb.com/api/json/v1/1/search.php?s=')
      .then((response) => response.json())
      .then((data) => data.drinks);
  case `/drinks/${id}`:
    return fetch('https://www.themealdb.com/api/json/v1/1/search.php?s=')
      .then((response) => response.json())
      .then((data) => data.meals);
  default: return 'null';
  }
};
export default getRecommendation;
