# Cocktails
A database of recipes of cocktails, syrups, garnishes, and infusions. 

# How to use
## Install 
```
npm i cocktailrecipes
```

## Usage
```
const cocktails = require("cocktailrecipes");

cocktails.recipes()

If no parameter is entered all recipes will be returned.
A parameter can also be passed to search by drink name, ingredient, 
or type of recipe(cocktail, syrup, garnish, or infusion).
```

```
To get a list of all searchable ingredients:

const { uniqueIngredients } = require("cocktailrecipes");

console.log(uniqueIngredients); 
```