//Ecxercise 17  

function addBands() {
    document.getElementById("band-list").innerHTML = ""
    for (var i = 0; i < bands.length; i++) {
        var liBands = document.createElement("li");
        liBands.innerText = bands[i];
        console.log('band', liBands)
        document.getElementById("band-list").appendChild(liBands);
    }
}

addBands(bands = ["The Smiths", "Radiohead", "Arcade Fire"])

//Ecxercise 18

