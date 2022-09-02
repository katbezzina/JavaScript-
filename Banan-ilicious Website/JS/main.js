//SEE MORE FUNCTION

function seemoreFunction() {
  var dots = document.getElementById("dots");
  var moreText = document.getElementById("more");
  var btnText = document.getElementById("seemoreButton");

  if (dots.style.display === "none") {
    dots.style.display = "inline";
    btnText.innerHTML = "See more...";
    moreText.style.display = "none";
  } else {
    dots.style.display = "none";
    btnText.innerHTML = "See less...";
    moreText.style.display = "inline";
  }
}

//TABLE SETUP

var tbody = document.getElementById("tbody");

for (var i = 0; i < recipesData.length; i++) {
  var tr = document.createElement("tr");

  var td1 = document.createElement("td");
  td1.innerHTML = recipesData[i].title;

  var td2 = document.createElement("td");
  td2.innerHTML = recipesData[i].image;

  // var usedIng = recipesData["usedIngredients"];
  // for (var j = 0; j < usedIng.length; j++) {
  // finalusedIng = usedIng[j].originalName;
  // }

  var td3 = document.createElement("td");
  td3.innerHTML = recipesData[i].finalusedIng;

  var td4 = document.createElement("td");
  td4.innerHTML = recipesData[i].missedIngredients;

  var td5 = document.createElement("td");
  td5.innerHTML = recipesData[i].likes;

  tr.appendChild(td1);
  tr.appendChild(td2);
  tr.appendChild(td3);
  tr.appendChild(td4);
  tr.appendChild(td5);

  tbody.appendChild(tr);
}
