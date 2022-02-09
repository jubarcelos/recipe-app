const getNationalityOptions = async () => {
  const endpoint = 'https://www.themealdb.com/api/json/v1/1/list.php?a=list';
  const response = await fetch(endpoint);
  const JSON = await response.json();
  return JSON.meals.map((nationality) => nationality.strArea);
};

export default getNationalityOptions;
