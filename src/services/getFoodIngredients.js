const getFoodIngredients = async () => {
  const ELEVEN = 11;
  const endpoint = 'https://www.themealdb.com/api/json/v1/1/list.php?i=list';
  const response = await fetch(endpoint);
  const JSON = await response.json();
  const ingredients = JSON.meals.map((ingredient) => ingredient.strIngredient);
  return ingredients.filter((__, index) => index <= ELEVEN);
};

export default getFoodIngredients;
