/* Author: Josh Hasan */

//Array of colours used to set the background colour of each tier label
const colors = ["red", "orangered", "orange", "yellow", "yellowgreen", "green"]
//All tier labels
const labels = document.querySelectorAll(".label");
//All tiers & the imagebank appended to the end as images can be moved back to the imagebank
const tiers = document.querySelectorAll(".rankings, .imagebank");
//All the films
const films = document.querySelectorAll(".film");

/* Cutsom onDragOver function to allow drag & drop functionality */
const onDragOver = (event) => {
    //Prevents default functionality of onDragOver events
    event.preventDefault();
}

/* Cutsom onDrop function to allow drag & drop functionality */
const onDrop = (event) => {
    //Prevents default functionality of onDrop events
    event.preventDefault();
    //Retrieves the data of the element (film) that is being dropped, its Id
    const filmId = event.dataTransfer.getData("id");
    /* If statement to handle various drop situations
    The getElementById method is used, with filmId, to identify the film being dropped */
    if (event.target.className === "film") {
        /* When the target drop location is another film
        Prevents films from "disappearing" when dropped on another film rather than the tier display area
        Inserts the new film in front of the film it is dropped on */
        event.currentTarget.insertBefore(document.getElementById(filmId), event.target);
    } else if (event.currentTarget.id === "imagebank") {
        /* When the target drop location is the imagebank (and not another film)
        Inserts the new film at the front of the imagebank */
        event.currentTarget.insertAdjacentElement("afterbegin", document.getElementById(filmId));
    } else {
        /* When the target drop location is neither a film nor the imagebank
        (Example: Empty tier space)
        Inserts the film at the end of the tier row */
        event.currentTarget.appendChild(document.getElementById(filmId));
    }
}

/* Cutsom onDragStart function to allow drag & drop functionality */
const onDragStart = (event) => {
    //Sets the data of the element (film) being moved as its Id
    event.dataTransfer.setData("id", event.target.id);
    setTimeout(() => {
        //Sets opacity to 0.25 while the film is being moved
        event.target.style.opacity = "0.25";
    }, 0)
}

/* Cutsom onDragEnd function to allow drag & drop functionality */
const onDragEnd = (event) => {
    //Sets opacity back to 1 after the film has been dropped
    event.target.style.opacity = "1";
}

/* Loops through each element in the tiers array to add appropriare event listeners for the Drag & Drop functionality
Uses the event listeners to send the code to my custom functions
The tiers array includes each tier and the imagebank (in the final array element) 
Also styles the background colour of each tier's label */
tiers.forEach((tier, index) => {
    /* If statement used for setting the background colour of each tier's label
    The imagebank is the final array element (tiers.length - 1) but does not have a label
    Thus the condition must be false on tiers.length - 1 */
    if (index < tiers.length - 1) {
        /* Uses the index vaule to style each label's background colour with the corresponding colour from the colors array
        Both the labels and colors array are the same length and ordered appropriately for ease of matching */
        labels[index].style.backgroundColor = colors[index];
    }
    tier.addEventListener("dragover", onDragOver);
    tier.addEventListener("drop", onDrop);
});

/* Loops through each element in the films array to add appropriare event listeners for the Drag & Drop functionality
Uses the event listeners to send the code to my custom functions  */
films.forEach((film) => {
    film.addEventListener("dragstart", onDragStart);
    film.addEventListener("dragend", onDragEnd);
});

/* Loads my personal tier list by moving the films into my ranked positions */
function loadTierList() {
    let i = 0;
    /* The imagebank is the final array element (tiers.length - 1) which doesn't have ranked films
    Thus the condition must be false on tiers.length - 1 */
    while (i < tiers.length - 1) {
        /* Multiple films are ranked on each tier so a switch case is used to identify each tier
        Each film has a custom attribute (data-rating) indicating which tier it belongs to 
        Films are retrieved and added to the tiers using their data-rating value */
        switch (tiers[i].getAttribute("id")) {
            case "sTier":
                const sFilms = document.querySelectorAll(".film[data-rating='s']");
                sFilms.forEach((sFilm) => {
                    tiers[i].appendChild(sFilm);
                });
                break;

            case "aTier":
                const aFilms = document.querySelectorAll(".film[data-rating='a']");
                aFilms.forEach((aFilm) => {
                    tiers[i].appendChild(aFilm);
                });
                break;

            case "bTier":
                const bFilms = document.querySelectorAll(".film[data-rating='b']");
                bFilms.forEach((bFilm) => {
                    tiers[i].appendChild(bFilm);
                });
                break;

            case "cTier":
                const cFilms = document.querySelectorAll(".film[data-rating='c']");
                cFilms.forEach((cFilm) => {
                    tiers[i].appendChild(cFilm);
                });
                break;

            case "dTier":
                const dFilms = document.querySelectorAll(".film[data-rating='d']");
                dFilms.forEach((dFilm) => {
                    tiers[i].appendChild(dFilm);
                });
                break;

            case "fTier":
                const fFilms = document.querySelectorAll(".film[data-rating='f']");
                fFilms.forEach((fFilm) => {
                    tiers[i].appendChild(fFilm);
                });
                break;

            default:
                //Do nothing, no action necessary
                break;

        }
        i++;
    }
}

/* Moves all films back into their default order and position in the imagebank */
function resetTierList() {
    films.forEach((film) => {
        //imagebank is the final element in the tiers array (tiers.length - 1)
        tiers[tiers.length - 1].appendChild(film);
    });
}
