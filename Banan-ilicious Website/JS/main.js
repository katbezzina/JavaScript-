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

//ASYNC WAIT

let recipes;

const getDataAsync = async () => {
  const response = await fetch("../JS/recipes.json");
  const data = await response.json();
  // createRecipeData(data);
  return data;
};

//CALLING THE BODY

const tbody = document.getElementById("tbody");

//HTML TABLE CREATION FUNCTION
function createRecipeData(recipeList) {
  //ClEARING THE BODY
  tbody.innerHTML = "";

  recipeList.forEach((recipe) => {
    const tr = document.createElement("tr");
    tr.className = "card text-center border-light text-bg cardcolor mb-2";

    //HEADER
    const td1 = document.createElement("td");
    td1.innerHTML = recipe.title;
    td1.className = "card-title";

    // INSERTING AN IMAGE IN THE TABLE
    // HTML script (avoid to be able to use as constiables)
    // td2.innerHTML = `<img src='${recipe[i].image}'/>`;
    const td2 = document.createElement("td");
    const image = document.createElement("img");
    image.src = recipe.image;
    td2.appendChild(image);

    image.className = "rounded-start";

    //FRUIT INGREDIENTS
    //NESTED OBJECTS FOR LOOP
    const td3 = document.createElement("td");
    const usedIng = recipe.usedIngredients;
    let ingredients = "";

    usedIng.forEach((ingredient) => {
      ingredients += `${ingredient.name}<br>`;
    });

    td3.innerHTML = "Fruitylicious fruit:<br>" + ingredients;
    td3.className = "list-group";

    //NO. OF OTHER INGREDIENTS NEEDED
    const td4 = document.createElement("td");
    td4.innerHTML =
      "# of other ingredients needed:<br>" + recipe.missedIngredientCount;
    td4.className = "list-group";

    //OTHER INGREDIENTS NEEDED
    //NESTED OBJECTS FOR LOOP
    const td5 = document.createElement("td");
    const neededIng = recipe.missedIngredients;
    let neededIngredients = "";

    neededIng.forEach((neededingredient) => {
      neededIngredients += `${neededingredient.name}<br>`;
    });

    td5.innerHTML = "Other ingredients needed:<br>" + neededIngredients;
    td5.className = "list-group";

    //HEARTS/LIKES
    const td6 = document.createElement("td");
    td6.innerHTML = " \u2665 " + recipe.likes + " \u2665";
    td6.className = "list-group";

    tr.appendChild(td1);
    tr.appendChild(td2);
    tr.appendChild(td3);
    tr.appendChild(td4);
    tr.appendChild(td5);
    tr.appendChild(td6);

    tbody.appendChild(tr);
  });
}

//CONTROLLER FUNCTION
//MAIN FUNCTION FOR ASYNC AWAIT
async function controller() {
  ////GETTING THE DATA ASYNC
  const data = await getDataAsync();
  console.log("data", data);
  ////GETTING THE TABLE
  createRecipeData(data);
  ////GETTING EVENT LISTENERS
  setEventListeners(data);
}
controller();

// //ADD EVENT LISTENERS
function setEventListeners(recipes) {
  ////MANUAL ADD EVENT LISTENERS
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

  //DROPDOWN EVENT LISTENER
  document
    .querySelector("#recipeType")
    .addEventListener("change", () => combineFilters(recipes));

  //CHECKBOXES EVENT LISTENER
  const checkboxes = Array.from(
    document.querySelectorAll("input[type='checkbox']")
  );
  console.log("checkboxes", checkboxes);
  checkboxes.forEach((checkbox) =>
    checkbox.addEventListener("click", () => combineFilters(recipes))
  );
}

//CHECKBOX FILTERING (ON CLICK EVENT IN HTML)
//GETTING TO THE CHECKBOX VALUE USING THE MAP FUNCTION and ARRAY (to get an array from the node list)
function filterByIngredient(recipes) {
  // console.log("recipes", recipes);
  let myCheckedBoxes = Array.from(
    document.querySelectorAll("input[type='checkbox']:checked")
  ).map((checked) => checked.value);
  console.log(myCheckedBoxes);

  //TREATING THE CHECKBOX VALUES AND THE RECIPES as SETS. LOOKING AT THE INTRESECTION
  filteredRecipes = recipes.filter((recipe) => {
    let intersection = recipe.usedIngredients.filter((ingr) =>
      myCheckedBoxes.includes(ingr.name)
    );
    // console.log("intersection", intersection);
    return intersection.length === myCheckedBoxes.length;
  });
  console.log("filteredRecipes", filteredRecipes);
  createRecipeData(filteredRecipes);
}

//AUTOMATED DROPDOWN

function filterByDropdown(recipes) {
  const dropdownValue = document.querySelector("#recipeType").value;
  console.log("dropdownValue", dropdownValue);

  const filteredRecipes = recipes.filter((recipe) =>
    recipe.title.includes(dropdownValue)
  );
  console.log(filteredRecipes);
  createRecipeData(filteredRecipes);
}

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

function combineFilters(recipes) {
  const checkboxes = Array.from(
    document.querySelectorAll("input[type='checkbox']:checked")
  ).map((checked) => checked.value);

  const dropdownValue = document.querySelector("#recipeType").value;
  const filteredRecipes = recipes.filter((recipe) => {
    let intersection = recipe.usedIngredients.filter((ingr) =>
      checkboxes.includes(ingr.name)
    );
    return (
      recipe.title.includes(dropdownValue) &&
      intersection.length === checkboxes.length
    );
  });
  console.log("combined filtered recipes", filteredRecipes);
  createRecipeData(filteredRecipes);
}
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
