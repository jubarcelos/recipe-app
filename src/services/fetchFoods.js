const fetchFoods = {
  getByIngredient: (ingredient) => (
    fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?i${ingredient}`)
      .then((response) => response.json())),
  getByName: (name) => (
    fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${name}`)
      .then((response) => response.json())),
  getByLetter: (letter) => (
    fetch(`https://www.themealdb.com/api/json/v1/1/search.php?f=${letter}`)
      .then((response) => response.json())),
};

export default fetchFoods;
