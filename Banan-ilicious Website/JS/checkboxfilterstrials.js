//APPLE CHECKBOX

// const appleCheckbox = document.getElementById("apples");

// function applesFilter() {
//   const filterRecipes = recipes.filter((appleCheckbox) => {
//     const appleIng = appleCheckbox.usedIngredients;
//     let appleIngredient = "";

//     appleIng.forEach((ingredient) => {
//       appleIngredient += ingredient.name;
//     });

//     if (appleIngredient.includes("apple")) {
//       return true;
//     } else {
//       return all;
//     }
//   });

//   console.log("filterRecipes", filterRecipes);
//   createRecipeData(filterRecipes);
// }

// appleCheckbox.addEventListener("click", applesFilter);

//CLICK EVENT TO EACH CHECKBOX

// const allCheckboxes = document.querySelectorAll(".checkbox");
// console.log(allCheckboxes);
// allCheckboxes.forEach((oneCheckbox) =>
//   oneCheckbox.addEventListener("click", filterIng)
// );

//CHECKBOX FILTERING

// const filterIng = () => {
//   console.log("filtering");
//   const checkBoxes = Array.from(
//     document.querySelectorAll("input[type=checkbox]:checked")
//   );
//   console.log("testing checkbox value", checkBoxes);

//   const checkboxValues = checkBoxes.map((checkbox) => {
//     return checkbox.value;
//   });
//   console.log(checkboxValues);

// for (i = 0; i < recipes.length; i++) {
//   const recipeUsedIngredient = recipes[i].usedIngredients;
//   console.log("recipe", recipeUsedIngredient);
//   const mapUsedIngr = recipes[i].usedIngredients.map((ingr) => ingr.name);
//   console.log(mapUsedIngr);
//   const isIncluded = (a1, a2) => a1.every(a2);
//   const inters = mapUsedIngr.filter((ingr) => myCheckedBoxes.includes(ingr));
//   console.log(inters);
//   if (isIncluded(mapUsedIngr, myCheckedBoxes)) {
//     filteredRecipes.push(recipes[i]);
//   }
// for (j = 0; j < recipeUsedIngredient.length; j++) {
//   const finalUsedIngredient = recipeUsedIngredient[j].name;
//   }
// console.log("ingredient", finalUsedIngredient);

// if (myCheckedBoxes.every((e) => finalUsedIngredient.includes(e))) {
//   filteredRecipes.push(recipes[i]);
// }

// console.log("filtered Recipes", filteredRecipes);
// createRecipeData(filteredRecipes);
// }

// checkBoxes.forEach((oneCheckbox) => {
//   oneCheckbox.checked = false;
//   oneCheckbox.addEventListener("click", () => filterTable());
// });

//LOOP THROUGH CHECKBOXES

// function getCheckboxValues() {
//   var checkboxValues = [];
//   checkboxes.forEach((checkbox) => {
//     if (checkbox.checked) checkboxValues.push(checkbox.value);
//   });
//   return checkboxValues;
// }

//FILTERING THE CARDS

//LUCAS
//   const filteredRecipes = recipes.filter((recipe) => {
//     let isIngredient = false;
//     recipe.usedIngredients.forEach((ingredient) => {
//       if (checkboxValues.includes(ingredient.name)) {
//         isIngredient = true;
//       }
//     });
//     if (isIngredient) return recipe;
//   });

//   console.log("filteredRecipes", filteredRecipes);
// };
