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
  const response = await fetch(
    "https://api.spoonacular.com/recipes/findByIngredients?apiKey=43a2171f92be4f80b6cdd64564a0b167&ingredients=apples,strawberry,banana,blueberries,kiwi,oranges,grapefruit,lemon&number=40&ranking=2"
  );
  const data = await response.json();
  createRecipeData(data);
  return data;
};

//CALLING THE BODY

const tbody = document.getElementById("tbody");

//TABLE CREATION FUNCTION
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
//END OF TABLE CREATION

//CONTROLLER FUNCTION
//MAIN FUNCTION FOR ASYNC AWAIT
async function controller() {
  //GETTING THE DATA ASYNC
  const data = await getDataAsync();
  console.log("data", data);

  // build table with all data
  createRecipeData(data);

  //create filter functions
  setEventListeners(data);
  // set event listeners
}
controller();

// add event listeners
const setEventListeners = (recipes) => {
  document
    .querySelectorAll("input[type='checkbox']:checked")
    .addEventListener("change", (event) => {
      combineFilters(recipes);
    });
  document.getElementById("noFilter").addEventListener("change", (event) => {
    combineFilters(recipes);
  });
  document.getElementById("beverages").addEventListener("change", (event) => {
    combineFilters(recipes);
  });
  document.getElementById("lightsnacks").addEventListener("change", (event) => {
    combineFilters(recipes);
  });
  document
    .getElementById("cakesandbakes")
    .addEventListener("change", (event) => {
      combineFilters(recipes);
    });
  document
    .getElementById("frozendesserts")
    .addEventListener("change", (event) => {
      combineFilters(recipes);
    });
  document.getElementById("jamesdips").addEventListener("change", (event) => {
    combineFilters(recipes);
  });
};

//CHECKBOX FILTERING
//GETTING TO THE CHECKBOX VALUE USING THE MAP FUNCTION and ARRAY (to get an array from the node list)
function filterByIngredient() {
  let myCheckedBoxes = Array.from(
    document.querySelectorAll("input[type='checkbox']:checked")
  ).map((checked) => checked.value);
  console.log(myCheckedBoxes);

  //TREATING THE CHECKBOX VALUES AND THE RECIPES as SETS. LOOKING AT THE INTRESECTION
  filteredRecipes = recipes.filter((recipe) => {
    let intersection = recipe.usedIngredients.filter((ingr) =>
      myCheckedBoxes.includes(ingr.name)
    );
    console.log("intersection", intersection);
    return intersection.length == myCheckedBoxes.length;
  });
  createRecipeData(filteredRecipes);
}

//SEARCH DROPDOWN

//NO FILTERING
const noFilter = document.getElementById("noFilter");

function noFilterFunction() {
  createRecipeData(recipes);
}

//BEVERAGES
const beverages = document.getElementById("beverages");

function beveragesSearch() {
  const filteredRecipes = recipes.filter((recipe) => {
    if (
      recipe.title.includes("Smoothie") ||
      recipe.title.includes("Cocktail") ||
      recipe.title.includes("Refresher") ||
      recipe.title.includes("Shake") ||
      recipe.title.includes("Lassi")
    ) {
      return true;
    }
  });

  console.log("filteredRecipes", filteredRecipes);
  createRecipeData(filteredRecipes);
}

//LIGHTSNACKS
const lightsnacks = document.getElementById("lightsnacks");

function lightsnacksSearch() {
  const filteredRecipes = recipes.filter((recipe) => {
    if (
      recipe.title.includes("Salad") ||
      recipe.title.includes("Panini") ||
      recipe.title.includes("Heart") ||
      recipe.title.includes("DIPS") ||
      recipe.title.includes("Split")
    ) {
      return true;
    }
  });

  console.log("filteredRecipes", filteredRecipes);
  createRecipeData(filteredRecipes);
}

//CAKES&BAKES
const cakesandbakes = document.getElementById("cakesandbakes");

function cakesandbakesSearch() {
  const filteredRecipes = recipes.filter((recipe) => {
    if (
      recipe.title.includes("Cake") ||
      recipe.title.includes("Crostata") ||
      recipe.title.includes("Slices")
    ) {
      return true;
    }
  });

  console.log("filteredRecipes", filteredRecipes);
  createRecipeData(filteredRecipes);
}

//FROZEN DESSERTS
const frozendesserts = document.getElementById("frozendesserts");

function frozendessertsSearch() {
  const filteredRecipes = recipes.filter((recipe) => {
    if (
      recipe.title.includes("Ice") ||
      recipe.title.includes("Sorbet") ||
      recipe.title.includes("Popsicle")
    ) {
      return true;
    }
  });

  console.log("filteredRecipes", filteredRecipes);
  createRecipeData(filteredRecipes);
}

//MOUSSE PARFAIT
const mousseparfait = document.getElementById("mousseparfait");

function mousseparfaitSearch() {
  const filteredRecipes = recipes.filter((recipe) => {
    if (recipe.title.includes("Mousse") || recipe.title.includes("Parfait")) {
      return true;
    }
  });

  console.log("filteredRecipes", filteredRecipes);
  createRecipeData(filteredRecipes);
}

mousseparfait.addEventListener("click", mousseparfaitSearch);

//JAMS DIPS
const jamesdips = document.getElementById("jamesdips");

function jamesdipsSearch() {
  const filteredRecipes = recipes.filter((recipe) => {
    if (recipe.title.includes("Jam") || recipe.title.includes("Dip")) {
      return true;
    }
  });

  console.log("filteredRecipes", filteredRecipes);
  createRecipeData(filteredRecipes);
}

//COMBINING FILTERS

const combineFilters = (recipes) => {
  const checkboxValue = document.querySelectorAll(
    "input[type='checkbox']:checked"
  );
  const intersection = recipes.usedIngredients;
  const jamesdips = document.getElementById("jamesdips");
  const mousseparfait = document.getElementById("mousseparfait");
  const frozendesserts = document.getElementById("frozendesserts");
  const cakesandbakes = document.getElementById("cakesandbakes");
  const lightsnacks = document.getElementById("lightsnacks");
  const beverages = document.getElementById("beverages");
  const noFilter = document.getElementById("noFilter");

  const filteredRecipes = recipes.filter((recipe) => {
    return (
      (jamesdips ||
        mousseparfait ||
        frozendesserts ||
        cakesandbakes ||
        lightsnacks ||
        beverages ||
        noFilter) &&
      intersection.length == checkboxValue.length
    );
  });
  console.log("filteredRecipes", filteredRecipes);
  createRecipeData(filteredRecipes);
};

//SORT BY MOST FUNCTION
// const mostPopular = document.getElementById("mostPopular");

// function sortbyMost() {
//   const filteredRecipes = recipes.filter((mostPopular) => {
//     if (mostPopular.likes >= 30) {
//       return true;
//     } else {
//       return false;
//     }
//   });

//   console.log("filteredRecipes", filteredRecipes);
//   createRecipeData(filteredRecipes);
// }

// mostPopular.addEventListener("click", sortbyMost);

// //SORT BY LEAST FUNCTION
// const leastPopular = document.getElementById("leastPopular");

// function sortbyLeast() {
//   const filteredRecipes = recipes.filter((leastPopular) => {
//     if (leastPopular.likes < 30) {
//       return true;
//     } else {
//       return false;
//     }
//   });

//   console.log("filteredRecipes", filteredRecipes);
//   createRecipeData(filteredRecipes);
// }

// leastPopular.addEventListener("click", sortbyLeast);
