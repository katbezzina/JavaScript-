// //FETCH
// let recipes;

// const url =
//   "https://api.spoonacular.com/recipes/findByIngredients?apiKey=43a2171f92be4f80b6cdd64564a0b167&ingredients=apples,strawberry,banana,blueberries,kiwi,oranges,grapefruit,lemon&number=40&ranking=2";

// fetch(url)
//   .then((response) => response.json())
//   .then((result) => {
//     recipes = result;
//     console.log(recipes);
//     displayTable();
//   })
//   .catch((error) => console.log("error", error));

//ASYNC WAIT
// getData();
// async function getData() {
//   const response = await fetch(url);
//   console.log("response", response);
//   const result = await response.json();
//   displayTable();
//   console.log("result", result);
// }

let recipes;

const url = "../JS/recipes.json";

setTimeout(() => fetchData(), 100);

function fetchData() {
  fetch(url)
    .then((response) => {
      console.log("response", response);
      return response.json();
    })
    .then((result) => {
      recipes = result;
      console.log("recipes", recipes);
      createRecipeData(recipes);
    });
}

const tbody = document.getElementById("tbody");

//TABLE FUNCTION
function createRecipeData(recipeList) {
  //ClEARING THE BODY
  tbody.innerHTML = "";

  recipeList.forEach((recipe) => {
    const tr = document.createElement("tr");
    tr.className = "card text-center border-light text-bg-secondary mb-2";

    const td1 = document.createElement("td");
    td1.innerHTML = recipe.title;
    td1.className = "card-title";

    // HTML script (avoid to be able to use as constiables)
    // td2.innerHTML = `<img src='${recipe[i].image}'/>`;
    const td2 = document.createElement("td");
    const image = document.createElement("img");
    image.src = recipe.image;
    td2.appendChild(image);

    image.className = "rounded recipeImage";

    //NESTED OBJECTS FOR LOOP
    const td3 = document.createElement("td");
    const usedIng = recipe.usedIngredients;
    let ingredients = "";

    usedIng.forEach((ingredient) => {
      ingredients += `${ingredient.name}<br>`;
    });

    td3.innerHTML = "Fruitylicious fruit:<br>" + ingredients;
    td3.className = "list-group";

    const td4 = document.createElement("td");
    td4.innerHTML =
      "# of other ingredients needed:<br>" + recipe.missedIngredientCount;
    td4.className = "list-group";

    //NESTED OBJECTS FOR LOOP
    const td5 = document.createElement("td");
    const neededIng = recipe.missedIngredients;
    let neededIngredients = "";

    neededIng.forEach((neededingredient) => {
      neededIngredients += `${neededingredient.name}<br>`;
    });

    td5.innerHTML = "Other ingredients needed:<br>" + neededIngredients;
    td5.className = "list-group";

    const td6 = document.createElement("td");
    td6.innerHTML = recipe.likes + " \u2665";
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
//}

//SORT BY MOST FUNCTION
const mostPopular = document.getElementById("mostPopular");

function sortbyMost() {
  const filteredRecipes = recipes.filter((mostPopular) => {
    if (mostPopular.likes >= 30) {
      return true;
    } else {
      return false;
    }
  });

  console.log("filteredRecipes", filteredRecipes);
  createRecipeData(filteredRecipes);
}

mostPopular.addEventListener("click", sortbyMost);

//SORT BY LEAST FUNCTION
const leastPopular = document.getElementById("leastPopular");

function sortbyLeast() {
  const filteredRecipes = recipes.filter((leastPopular) => {
    if (leastPopular.likes < 30) {
      return true;
    } else {
      return false;
    }
  });

  console.log("filteredRecipes", filteredRecipes);
  createRecipeData(filteredRecipes);
}

leastPopular.addEventListener("click", sortbyLeast);

//NO SORTING
const noSorting = document.getElementById("noSorting");

function nosortingFunction() {
  createRecipeData(recipes);
}

noSorting.addEventListener("click", nosortingFunction);

//APPLE CHECKBOX

// const appleCheckbox = document.getElementById("apples");

// function applesFilter() {
//   const filterRecipes = recipes.filter((appleCheckbox) => {
//     const appleIng = appleCheckbox.usedIngredients;
//     let appleIngredient = "";

//     appleIng.forEach((ingredient) => {
//       appleIngredient = ingredient.name;
//     });

//     if (appleIngredient.includes("apple")) {
//       return true;
//     } else {
//       return false;
//     }
//   });

//   console.log("filterRecipes", filterRecipes);
//   createRecipeData(filterRecipes);
// }

// appleCheckbox.addEventListener("click", applesFilter);

//CHECKBOX FILTERING

const filterIng = () => {
  console.log("filtering");
  const checkBoxes = document.querySelectorAll("input[type=checkbox]:checked");
  console.log(checkBoxes[0].value)

  checkBoxes.forEach((oneCheckbox) => {
    

  }

  // loop through checkboxes to get value
};

const array = [{ ing: [1, 3, 4] }, { ing: [2, 4, 6, 7] }];

const checkArray = [2, 4, 7];

const result = array.filter((rec) => {
  return checkArray.every((oneCheck) => rec.ing.includes(oneCheck));
});
console.log(result);



const allCheckboxes = document.querySelectorAll(".checkbox");
console.log(allCheckboxes);
allCheckboxes.forEach((oneCheckbox) =>
  oneCheckbox.addEventListener("click", filterIng)
);



// const checkboxes = document.querySelectorAll(".checkbox");
// var checkboxValues = [];

// function checkboxFilter() {
//   const checkboxfilteredRecipes = recipes.filter((filteredRecipe) => {
//     if (filteredRecipe.usedIngredients.name == value) {
//       return true;
//     } else {
//       return false;
//     }
//   });
//   console.log("checkboxfilteredRecipes", checkboxfilteredRecipes);
// }

// checkboxes.addEventListener("change", checkboxFilter);




// const even = (element) => {
//   console.log("element", element);
//   return element.ing.filter((oneIng) => {
//     const bool = [];

//     checkArray.forEach((oneCheck) => bool.push(oneCheck === oneIng));
//     console.log("bool", bool);
//   });
// };

// console.log(
//   array.filter((oneRec) => {
//     const bool = [];
//     oneRec.ing.filter((oneIng) => {
//       checkArray.forEach((oneCheck) => bool.push(oneCheck === oneIng));
//     });
//     console.log("bool", bool);
//   })
// );



