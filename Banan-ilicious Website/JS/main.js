//SEE MORE FUNCTION

const btnText = document.getElementById("seemoreButton");

function seemoreFunction() {
  const dots = document.getElementById("dots");
  const moreText = document.getElementById("more");

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
