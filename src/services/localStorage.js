export const appendRecipe = (recipe, item) => {
  const arr = localStorage.getItem(item);
  const favoriteRecipes = arr ? [...JSON.parse(arr), recipe] : [recipe];
  return localStorage.setItem(item, JSON.stringify(favoriteRecipes));
};

export const removeLocalStorageFavorites = (recipe) => {
  const arr = localStorage.getItem('favoriteRecipes');
  const favoriteRecipes = arr
    ? [...JSON.parse(arr)].filter((oldRecipes) => oldRecipes.id !== recipe.id) : [];

  return localStorage.setItem('favoriteRecipes', JSON.stringify(favoriteRecipes));
};

export const getLocalStorageInfo = (item) => {
  const arr = localStorage.getItem(item);
  if (arr) {
    return JSON.parse(arr);
  }
  return arr;
};
