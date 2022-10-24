const recipeData = require('./recipes.json')

let recipes = (input) => {
  let newInput = "";
  if (!input) {
    return recipeData;
  } else {
    newInput = input.toLowerCase();
  }

  let allTypes = []; 
  let allIngredients = [];
  for(i = 0; i < recipeData.length; i++ ){
    if(!allTypes.includes(recipeData[i].type))
  allTypes.push(recipeData[i].type)};

  for(i = 0; i < recipeData.length; i++ ){
  allIngredients = allIngredients.concat(recipeData[i].ingredientsCheck)};
  
  if(allTypes.includes(newInput)) {
    let list = []
    for(i = 0; i < recipeData.length; i++ ){
      if (newInput == recipeData[i].type)
      list.push(recipeData[i])
    }
    return list
  } else if (allIngredients.includes(newInput)) {
    let list = []
    for(i = 0; i < recipeData.length; i++ ){
      if (recipeData[i].ingredientsCheck.includes(newInput))
      list.push(recipeData[i])}
      return list
  } else {
    for(i = 0; i < recipeData.length; i++ ){
      if (input == recipeData[i].name.toLowerCase())
      return recipeData[i]
    }
  }
}


// console.log(recipes("lemon"))
// let all = [];
// let data = recipes();
// for (i = 0; i < data.length; i++){
//   all = all.push().data[i].name
// }

console.log(recipes()[1])
module.exports = {
  recipes: recipes
}