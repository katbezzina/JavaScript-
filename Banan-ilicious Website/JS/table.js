//TABLE SETUP

var tbody = document.getElementById("tbody");

for (var i = 0; i < recipesData.length; i++) {
  var tr = document.createElement("tr");
  tr.className = "card text-center border-light text-bg-secondary mb-2";

  var td1 = document.createElement("td");
  td1.innerHTML = recipesData[i].title;
  td1.className = "card-title";

  // HTML script (avoid to be able to use as variables)
  // td2.innerHTML = `<img src='${recipesData[i].image}'/>`;
  var td2 = document.createElement("td");
  var image = document.createElement("img");
  image.src = recipesData[i].image;
  td2.appendChild(image);

  image.className = "rounded recipeImage";

  //NESTED OBJECTS FOR LOOP
  var td3 = document.createElement("td");
  var usedIng = recipesData[i].usedIngredients;
  var ingredients = "";

  for (var j = 0; j < usedIng.length; j++) {
    ingredients += `${usedIng[j].name}<br>`;
  }

  td3.innerHTML = "Fruitylicious fruit:<br>" + ingredients;
  td3.className = "list-group";

  var td4 = document.createElement("td");
  td4.innerHTML =
    "# of other ingredients needed:<br>" + recipesData[i].missedIngredientCount;
  td4.className = "list-group";

  //NESTED OBJECTS FOR LOOP
  var td5 = document.createElement("td");
  var neededIng = recipesData[i].missedIngredients;
  var neededIngredients = "";

  for (var k = 0; k < neededIng.length; k++) {
    neededIngredients += `${neededIng[k].name}<br>`;
  }

  td5.innerHTML = "Other ingredients needed:<br>" + neededIngredients;
  td5.className = "list-group";

  var td6 = document.createElement("td");
  td6.innerHTML = recipesData[i].likes + " \u2665";
  td6.className = "list-group";

  tr.appendChild(td1);
  tr.appendChild(td2);
  tr.appendChild(td3);
  tr.appendChild(td4);
  tr.appendChild(td5);
  tr.appendChild(td6);

  tbody.appendChild(tr);
}

// //SORT BY FUNCTION

// var mostPopular = document.getElementById("mostPopular");

// mostPopular.addEventListener("click", sortbyMost);
