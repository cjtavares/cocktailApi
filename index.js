const recipeData = require('./data/recipes.json')

let uniqueIngredients
let allIngredients = [];
for(i = 0; i < recipeData.length; i++ ){
  allIngredients = allIngredients.concat(recipeData[i].ingredientsCheck)};

  const ingredients =  allIngredients;  uniqueIngredients = [...new Set(ingredients)]; 
const recipes = (input) => {
  let newInput = "";
  if (!input) {
    return recipeData;
  } else {
    newInput = input.toLowerCase();
  }

  let allTypes = []; 
 
  for(i = 0; i < recipeData.length; i++ ){
    if(!allTypes.includes(recipeData[i].type))
  allTypes.push(recipeData[i].type)};

  

  if(allTypes.includes(newInput)) {
    let list = []
    for(i = 0; i < recipeData.length; i++ ){
      if (newInput == recipeData[i].type)
      list.push(recipeData[i])
    }
    return list
  } else if (uniqueIngredients.includes(newInput)) {
    let list = []
    for(i = 0; i < recipeData.length; i++ ){
      if (recipeData[i].ingredientsCheck.includes(newInput))
      list.push(recipeData[i])}
      return list
  } else {
    for(i = 0; i < recipeData.length; i++ ){
      if (newInput == recipeData[i].name.toLowerCase())
      return recipeData[i]
    }
  }
}

console.log(recipes('bourbon'));
console.log(uniqueIngredients);


module.exports = {
    recipes: recipes
  }