export const setDoneRecipe = (recipe) => {
  const arr = localStorage.getItem('doneRecipes');
  const doneRecipes = arr ? [...JSON.parse(arr), recipe] : [recipe];
  localStorage.setItem('doneRecipes', JSON.stringify(doneRecipes));
};
export const getDoneRecipes = () => {
  const arr = localStorage.getItem('doneRecipes');
  const doneRecipes = arr ? JSON.parse(arr) : [];
  return doneRecipes;
};

export const setInProgressRecipe = (recipe, type) => {
  const obj = localStorage.getItem('inProgressRecipes');
  const inProgressRecipes = obj ? {
    ...obj,
    [type]: { ...obj[type], [recipe.id]: recipe },
  } : { cocktails: {}, meals: {} };

  localStorage.setItem('inProgressRecipes', JSON.stringify(inProgressRecipes));
};
export const getInProgressRecipes = () => {
  const obj = localStorage.getItem('inProgressRecipes');
  const inProgressRecipes = obj ? JSON.parse(obj) : { cocktails: {}, meals: {} };
  return inProgressRecipes;
};
