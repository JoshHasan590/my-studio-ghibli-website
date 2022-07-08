/* Author: Josh Hasan */

/* Function for shwoing/hiding each text section (both main sections and sub-sections) on The Creators pages
Also flips the arrowhead direction on the headings
Parameter is the heading element acting as a button
\u2B9D and \u2B9F are the Javascript codes for the up and down arrowheads */
function showText(heading) {
    //nextElementSibling used as the div element containing the paragraph text is a sibling to the heading, not a child
    let text = heading.nextElementSibling;
    //If statement used to identify current arrowhead and flip it
    //.replace function used to identify and change only the arrowhead code value, leaving the heading text unaffected
    if (text.classList.contains("show")) {
        heading.textContent = heading.textContent.replace("\u2B9D", "\u2B9F");
    } else {
        heading.textContent = heading.textContent.replace("\u2B9F", "\u2B9D");
    }
    //Toggles the state of the clicked heading's corresponding text div between shown and hidden
    text.classList.toggle("show");
}