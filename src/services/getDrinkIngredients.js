const getDrinkIngredients = async () => {
  const ELEVEN = 11;
  const endpoint = 'https://www.thecocktaildb.com/api/json/v1/1/list.php?i=list';
  const response = await fetch(endpoint);
  const JSON = await response.json();
  const ingredients = JSON.drinks.map((ingredient) => ingredient.strIngredient1);
  return ingredients.filter((__, index) => index <= ELEVEN);
};

export default getDrinkIngredients;
