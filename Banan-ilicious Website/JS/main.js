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
  //DROPDOWN EVENT LISTENER
  document
    .querySelector("#recipeType")
    .addEventListener("change", () => combineFilters(recipes));

  //CHECKBOXES EVENT LISTENER
  const checkboxes = Array.from(
    document.querySelectorAll("input[type='checkbox']")
  );
  // console.log("checkboxes", checkboxes);
  checkboxes.forEach((checkbox) =>
    checkbox.addEventListener("click", () => combineFilters(recipes))
  );
}

//CHECKBOX FILTERING

//GETTING TO THE CHECKBOX VALUE USING THE MAP FUNCTION and ARRAY (to get an array from the node list)
function filterByIngredient(recipes) {
  // console.log("recipes", recipes);
  let myCheckedBoxes = Array.from(
    document.querySelectorAll("input[type='checkbox']:checked")
    //map() method creates an entirely new array, does not change original array, calls the function for each element in the new array.
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

//DROPDOWN FILTERING

function filterByDropdown(recipes) {
  const dropdownValue = document.querySelector("#recipeType").value;
  console.log("dropdownValue", dropdownValue);

  const filteredRecipes = recipes.filter((recipe) =>
    recipe.title.includes(dropdownValue)
  );
  console.log(filteredRecipes);
  createRecipeData(filteredRecipes);
}

//COMBINING FILTERS (can use helper functions)

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
