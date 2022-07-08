/* Author: Josh Hasan */

//All subnav elements
const subnavs = document.querySelectorAll(".subnav > a")
//All subnav menus
const subnavMenus = document.querySelectorAll(".subnav-content")

/* Function to open and close the dropdown, sub-navigation links in the navbar on click
Through the use of the .toggle method to add and remove the display property CSS from the subnav-content div
Takes a parameter n to identify which subnav is being interacted with */
function showSubnav(n) {
    //Resets the colours for the subnav elements to their current defined CSS
    subnavs.forEach((subnav) => {
        subnav.style.backgroundColor = "";
        subnav.style.color = "";
    })
    //Closes all open subnavs that were not clicked - Prevents nabvar clutter with multiple open subnavs 
    subnavMenus.forEach((subnavMenu) => {
        //Prevents preemptively closing the subnav to be toggled (subnavMenus[n])
        if ((subnavMenu.classList.contains("show")) && (subnavMenu !== subnavMenus[n])) {
            subnavMenu.classList.remove("show");
        }
    })
    //Sets appropriate colour styles inline with the defined CSS
    if ((subnavs[n].className !== "active") && !(subnavMenus[n].classList.contains("show"))) {
        subnavs[n].style.backgroundColor = "white";
        subnavs[n].style.color = "black";
    }
    //Toggles the state of the clicked subnav between open and closed
    subnavMenus[n].classList.toggle("show");
}

/* Adds an event listener for a click function on the entire browser window
Closes all open subnavs when any part of the webpage is clicked, excluding the subnav item in the navbar
Additionally resets the colours for the subnav elements to their current defined CSS */
window.addEventListener("click", function(event) {
    if (!event.target.matches(".subnav > a")) {
        subnavs.forEach((subnav) => {
            subnav.style.backgroundColor = "";
            subnav.style.color = "";
        })
        subnavMenus.forEach((subnavMenu) => {
            if (subnavMenu.classList.contains("show")) {
                subnavMenu.classList.remove("show");
            }
        })
    }
})

/* Function is called when the user scrolls on the webpage
Determins when to show and hide the "Return to Top" button */
window.onscroll = function() {
    //Evalutes if the page has been scrolled 300px below the top of the page
    //Or operator for different browser support
    if (document.body.scrollTop > 300 || document.documentElement.scrollTop > 300) {
        //Below 300px, display button
        document.getElementById("top-button").style.display = "block";
    } else {
        //Above 300px, hide button
        document.getElementById("top-button").style.display = "none";
    }
};

/* Function for when the "Return to Top" button is clicked
Support for different browsers */
function topOfPage() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}