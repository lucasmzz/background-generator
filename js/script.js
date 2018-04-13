var css = document.querySelector("h3");
var leftColorPicker = document.querySelector("#color1");
var rightColorPicker = document.querySelector("#color2");
var body = document.getElementById("gradient");
//add listeners

leftColorPicker.addEventListener("input",updateBackground);
rightColorPicker.addEventListener("input",updateBackground);

// for every chang, update background property in body.

function updateBackground() {
    var newColorL = leftColorPicker.value;
    var newColorR = rightColorPicker.value;
    console.log(newColorL,newColorR);
    newGradient = 'linear-gradient(to right,' + newColorL + ',' + newColorR + ')';
    console.log(newGradient);
    
    body.style.background = newGradient;
    css.textContent = body.style.background + ";";
}
