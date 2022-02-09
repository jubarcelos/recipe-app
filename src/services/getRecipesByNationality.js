const getRecipesByNationality = async (nationality) => {
  const ELEVEN = 11;
  const endpoint = `https://www.themealdb.com/api/json/v1/1/filter.php?a=${nationality}`;
  const response = await fetch(endpoint);
  const JSON = await response.json();
  return JSON.meals.filter((__, index) => index <= ELEVEN);
};

export default getRecipesByNationality;
