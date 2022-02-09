const getFoodsByIngredient = async (ingredient) => {
  const ELEVEN = 11;
  const endpoint = `https://www.themealdb.com/api/json/v1/1/filter.php?i=${ingredient}`;
  const response = await fetch(endpoint);
  const JSON = await response.json();
  return JSON.meals.filter((__, index) => index <= ELEVEN);
};

export default getFoodsByIngredient;
