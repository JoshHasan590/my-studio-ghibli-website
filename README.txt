This website was created for a skills based task using HTML5, CSS3 and JavaScript.
Author: - Josh Hasan

My chosen content for the website was the Japanese film studio, Studio Ghibli.
I decided on this topic as the company was co-founded by two of my favourite directors and they have produced some of my favourite films.
I personally feel that Hayao Miyazaki and Isao Takahata are two of the greatest filmmakers of all time and that they have directed some of the greatest films ever made.
I hope you enjoy my website.


This webisite was developed on Windows 10 OS using Google Chrome as the main browser.

The website was designed to be responive, via regular use of percentage (%) and viewport (vh/vw) element sizing in the CSS files.
However, mobile specific compatiblity has not been directly implemented.
	- When using the built-in Chrome development tools, the mobile sized displays have inconsistently sized text and images that may appear smaller than intended.
	- The tablet sized displays (and larger) appear to display as intended.

I had intended to incorporate a "Save/Share" button to the interactive-tier-list.html. The implementation of this proved more complex than expected.
Use of the html2canvas Javascript library allowed me to locally save a JPEG of an empty tier list.
However, when adding the film image elements to the tier list, an error was thrown regarding the exporting of a "Tainted Canvas".
Currently this feature has not been successfully implemented and the "Save" button is not present in this version of the website.

Some testing has taken place across different browsers on Windows 10 and macOS (Detailed Below):

Windows 10 testing:

	- Chrome (Recommended):	- Used for development, functions as expected.

	- Microsoft Edge:	- Appears to function as expected.

	- Firefox:	- Figure tagged images on both "The Creators" pages do not resize their containers properly. Thus appearing to have extra padding/margins around them and appearing smaller than intended.
			- "Nausicaa of the Valley of the Wind (1984)" in the films dropdown menu appears on two lines, therefore the text overflows the container boundry slightly.
			- On interactive-tier-list.html. When adding a film to the Tier List, the image container does not shrink-down horizontally, leaving the appearance of large padding/margins between items (issue not present when images are inside the Image Bank area).
			- No functionality breaking issues, just minor visual abnormalities.

	- Internet Explorer (DO NOT USE):	- Retired as of 15th June 2022
						- Does not allow the use of external Javascript files (unsure why).
						- Resultantly unusable.

macOS Testing:

	- Safari (Recommended):	- The arrowheads (Up and Down specifically) do not display in the navbar, directors text headings or "Return to Top" button". Left and Right arrowheads display as intended.
				- Hovering over the "Subscribe" button in the webpage Footer, results in a minor display anomaly. Shifts some footer elements a negligable amount.
				- Figure tagged images on both "The Creators" pages do not resize their containers properly. Thus appearing to have extra padding around them and appearing smaller than intended.
				- On interactive-tier-list.html. When dragging a film to the Tier List manually, the image container does not shrink-down horizontally, leaving the appearance of large padding/margins between items (issue not present when images are inside the Image Bank area). Issue not present when using the "My List" button. Only occurs after dragging.
				- No functionality breaking issues, just minor visual abnormalities.

	- Chrome (DO NOT USE):	- The arrowheads (Up and Down specifically) do not display in the navbar, directors text headings or "Return to Top" button". Left and Right arrowheads display as intended.
				- Some Footer items not selectable or interactable on index.html. Specific items change depending on which information set is displayed on the information wheel.
				- Inconsistent visual abnormalities on both "The Creators" pages. Both text and images. Worse with images, with some significant repositioning.
				- On interactive-tier-list.html. When adding a film to the tier list, the image container does not shrink-down horizontally, leaving the appearance of large padding/margins between items (issue not present when images are inside the Image Bank area).

	- Firefox (DO NOT USE):	- The arrowheads (Up and Down specifically) do not display in the navbar, directors text headings or "Return to Top" button". Left and Right arrowheads display as intended.
				- Figure tagged images on both "The Creators" pages do not resize their containers properly. Thus appearing to have extra padding/margins around them and appearing smaller than intended. Also some inconsistent image repositioning.
				- On interactive-tier-list.html. When adding a film to the Tier List, the image container does not shrink-down horizontally, leaving the appearance of large padding/margins between items (issue not present when images are inside the Image Bank area).
