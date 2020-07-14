const baseUrl = `https://api.spoonacular.com`;
const apiKey = `d93ca12f2d434537947d919d1ce04988`;

const recipeFetch = async (endPoint, query = null) => {
  let url = `${baseUrl}${endPoint}?apiKey=${apiKey}`;
  if (query) {
    url += `&query=${query}`;
  }

  const res = await fetch(url);
  const json = await res.json();
  return json.results;
};

export const getRecipes = async (ingredients, intolerances = null) => {
  console.log({intolerances});
  const endPoint = `/recipes/search`;
  let query = `${ingredients.toString()}`;
  if (intolerances) {
    query += `&intolerances=${intolerances.toString()}`;
  }
  return recipeFetch(endPoint, query);
};

export const getSingleRecipe = async (id) => {
  const endPoint = `/recipes/${id}/information`;
  return recipeFetch(endPoint);
};
