// //FETCH
// let recipes;

// const url =
//   "https://api.spoonacular.com/recipes/findByIngredients?apiKey=43a2171f92be4f80b6cdd64564a0b167&ingredients=apples,strawberry,banana,blueberries,kiwi,oranges,grapefruit,lemon&number=40&ranking=2";

// fetch(url)
//   .then((response) => response.json())
//   .then((result) => {
//     recipes = result;
//     console.log(recipes);
//     createRecipeData(recipes);
//   })
//   .catch((error) => console.log("error", error));

// //FETCH FROM LOCAL API

// let recipes;

// const url = "../JS/recipes.json";
// setTimeout(() => fetchData(), 100);

// function fetchData() {
//   fetch(url)
//     .then((response) => {
//       console.log("response", response);
//       return response.json();
//     })
//     .then((result) => {
//       recipes = result;
//       console.log("recipes", recipes);
//       createRecipeData(recipes);
//     });
// }

////ADD EVENT LISTENERS USING SEVERAL FUNCTIONS

// const noFilter = document.getElementById("allRecipes");
// noFilter.addEventListener("click", () => noFilterFunction(recipes));
// const beverages = document.getElementById("beverages");
// beverages.addEventListener("click", () => beveragesSearch(recipes));
// const cakesandbakes = document.getElementById("cakesandbakes");
// cakesandbakes.addEventListener("click", () => cakesandbakesSearch(recipes));
// const lightsnacks = document.getElementById("lightsnacks");
// lightsnacks.addEventListener("click", () => lightsnacksSearch(recipes));
// const frozendesserts = document.getElementById("frozendesserts");
// frozendesserts.addEventListener("click", () => frozendessertsSearch(recipes));
// const mousseparfait = document.getElementById("mousseparfait");
// mousseparfait.addEventListener("click", () => mousseparfaitSearch(recipes));
// const jamesdips = document.getElementById("jamesdips");
// jamesdips.addEventListener("click", () => jamesdipsSearch(recipes));

////APPLE CHECKBOX

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

// checkBoxes.forEach((oneCheckbox) => {
//   oneCheckbox.checked = false;
//   oneCheckbox.addEventListener("click", () => filterTable());
// });

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

//LOOP THROUGH CHECKBOXES

// function getCheckboxValues() {
//   var checkboxValues = [];
//   checkboxes.forEach((checkbox) => {
//     if (checkbox.checked) checkboxValues.push(checkbox.value);
//   });
//   return checkboxValues;
// }

//STEP BY STEP DROPDOWN

// //NO FILTERING
// function noFilterFunction(recipes) {
//   createRecipeData(recipes);
// }

// //BEVERAGES
// function beveragesSearch(recipes) {
//   const filteredRecipes = recipes.filter((recipe) => {
//     if (
//       recipe.title.includes("Smoothie") ||
//       recipe.title.includes("Cocktail") ||
//       recipe.title.includes("Refresher") ||
//       recipe.title.includes("Shake") ||
//       recipe.title.includes("Lassi")
//     ) {
//       return true;
//     }
//   });

//   console.log("filteredRecipes", filteredRecipes);
//   createRecipeData(filteredRecipes);
// }

// //LIGHTSNACKS
// function lightsnacksSearch(recipes) {
//   const filteredRecipes = recipes.filter((recipe) => {
//     if (
//       recipe.title.includes("Salad") ||
//       recipe.title.includes("Panini") ||
//       recipe.title.includes("Heart") ||
//       recipe.title.includes("DIPS") ||
//       recipe.title.includes("Split")
//     ) {
//       return true;
//     }
//   });

//   console.log("filteredRecipes", filteredRecipes);
//   createRecipeData(filteredRecipes);
// }

// //CAKES&BAKES
// function cakesandbakesSearch(recipes) {
//   const filteredRecipes = recipes.filter((recipe) => {
//     if (
//       recipe.title.includes("Cake") ||
//       recipe.title.includes("Crostata") ||
//       recipe.title.includes("Slices")
//     ) {
//       return true;
//     }
//   });

//   console.log("filteredRecipes", filteredRecipes);
//   createRecipeData(filteredRecipes);
// }

// //FROZEN DESSERTS
// function frozendessertsSearch(recipes) {
//   const filteredRecipes = recipes.filter((recipe) => {
//     if (
//       recipe.title.includes("Ice") ||
//       recipe.title.includes("Sorbet") ||
//       recipe.title.includes("Popsicle")
//     ) {
//       return true;
//     }
//   });

//   console.log("filteredRecipes", filteredRecipes);
//   createRecipeData(filteredRecipes);
// }

// //MOUSSE PARFAIT
// function mousseparfaitSearch(recipes) {
//   const filteredRecipes = recipes.filter((recipe) => {
//     if (recipe.title.includes("Mousse") || recipe.title.includes("Parfait")) {
//       return true;
//     }
//   });

//   console.log("filteredRecipes", filteredRecipes);
//   createRecipeData(filteredRecipes);
// }

// //JAMS DIPS
// function jamesdipsSearch(recipes) {
//   const filteredRecipes = recipes.filter((recipe) => {
//     if (recipe.title.includes("Jam") || recipe.title.includes("Dip")) {
//       return true;
//     }
//   });
//   console.log("filteredRecipes", filteredRecipes);
//   createRecipeData(filteredRecipes);
// }

// //COMBINING FILTERS

// function combineFilters(recipes) {
//   const checkboxes = Array.from(
//     document.querySelectorAll("input[type='checkbox']:checked")
//   ).map((checked) => checked.value);
//   console.log("combine filters check boxes", checkboxes);
//   const jamesdips = document.getElementById("jamesdips");
//   const mousseparfait = document.getElementById("mousseparfait");
//   const frozendesserts = document.getElementById("frozendesserts");
//   const cakesandbakes = document.getElementById("cakesandbakes");
//   const lightsnacks = document.getElementById("lightsnacks");
//   const beverages = document.getElementById("beverages");
//   const noFilter = document.getElementById("noFilter");

//   const filteredRecipes = recipes.filter((recipe) => {
//     let intersection = recipe.usedIngredients.filter((ingr) =>
//       checkboxes.includes(ingr.name)
//     );

// WHY CANNOT I USE FUNCTIONS TO COMBINE FUNCTIONS (HELPER FUNCTIONS)?
// return (
//   (jamesdipsSearch(recipe) && filterByIngredient(recipe)) ||
//   (cakesandbakesSearch(recipe) && filterByIngredient(recipe)) ||
//   (noFilterFunction(recipe) && filterByIngredient(recipe)) ||
//   (mousseparfaitSearch(recipe) && filterByIngredient(recipe)) ||
//   (beveragesSearch(recipe) && filterByIngredient(recipe)) ||
//   (frozendessertsSearch(recipe) && filterByIngredient(recipe)) ||
//   (lightsnacksSearch(recipe) && filterByIngredient(recipe))
// );
//     // COMBINING FILTERS WITH MULTIPLE FUNCTIONS
//     return (
//       ((frozendesserts ===
//         (recipe.title.includes("Ice") ||
//           recipe.title.includes("Sorbet") ||
//           recipe.title.includes("Popsicle"))) ||
//       (jamesdips ===
//         (recipe.title.includes("Jam") || recipe.title.includes("Dip"))) ||
//       (mousseparfait ===
//         (recipe.title.includes("Mousse") || recipe.title.includes("Parfait"))) ||
//       (cakesandbakes ===
//         (recipe.title.includes("Cake") ||
//           recipe.title.includes("Crostata") ||
//           recipe.title.includes("Slices"))) ||
//       (lightsnacks ===
//         (recipe.title.includes("Salad") ||
//           recipe.title.includes("Panini") ||
//           recipe.title.includes("Heart") ||
//           recipe.title.includes("DIPS") ||
//           recipe.title.includes("Split"))) ||
//       (beverages ===
//         (recipe.title.includes("Smoothie") ||
//           recipe.title.includes("Cocktail") ||
//           recipe.title.includes("Refresher") ||
//           recipe.title.includes("Shake") ||
//           recipe.title.includes("Lassi"))) ||
//         (noFilter === createRecipeData(recipes)))
//         &&
//         (intersection.length === checkboxes.length)
//     );
//   });
//   console.log("filteredRecipes", filteredRecipes);
//   createRecipeData(filteredRecipes);
// }
