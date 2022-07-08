/* Author: Josh Hasan */

//All information blocks
const informations = document.querySelectorAll(".information");
//All dot elements
const dots = document.querySelectorAll(".dot");
let informationIndex = 1;   //Initially set as 1 to show a specific inforamtion set on webpage load

showInformation(informationIndex);  //Immediately calls the showInformation function on load of the webpage

/* Increments or decrements the informationIndex based on the incoming parameter n
Calls the showInformation function to update the webpage
The parameter is defined by which arrow the user clicks on the Information Wheel */
function changeInformation(n) {
    showInformation(informationIndex += n);
}

/* Changes the informationIndex based on the incoming parameter n
Calls the showInformation function to update the webpage
The parameter is defined by which dot the user clicks on the Inforamtion Wheel */
function currentInformation(n) {
    showInformation(informationIndex = n);
}

/* Displays the appropriate information defined by parameter n */
function showInformation(n) {
    //Allows for wrap around cycling of the Informatin Wheel
    if (n < 0) { informationIndex = informations.length - 1 }
    if (n > informations.length - 1) { informationIndex = 0 }
    //Hides all information sets
    informations.forEach((information) => {
        information.style.display = "none";
    })
    //Resets the CSS on all dots
    dots.forEach((dot) => {
        dot.className = "dot";
    })
    //Shows the information set defined by n and sets the CSS of the corresponding dot
    //Uses informationIndex instead of n parameter as n may be an invalid number (wrap around cycling)
    informations[informationIndex].style.display = "block";
    dots[informationIndex].className += " active-dot";
}