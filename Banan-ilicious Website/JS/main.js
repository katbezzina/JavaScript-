//SEE MORE FUNCTION

var btnText = document.getElementById("seemoreButton");

function seemoreFunction() {
  var dots = document.getElementById("dots");
  var moreText = document.getElementById("more");

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

btnText.addEventListener("click", seemoreFunction);
