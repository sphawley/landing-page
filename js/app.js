/**
 * 
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 * 
 * Dependencies: None
 * 
 * JS Version: ES2015/ES6
 * 
 * JS Standard: ESlint
 * 
*/

/**
 * Define Global Variables
 * 
*/


/**
 * End Global Variables
 * Start Helper Functions
 * 
*/



/**
 * End Helper Functions
 * Begin Main Functions
 * 
*/

// build the nav dynamically
console.log("It's working");
const frag = document.createDocumentFragment();
const sections = document.querySelectorAll("section");
for (section of sections) {
    let text = section.getAttribute("data-nav");
    let li = document.createElement("li");
    li.innerText = text;
    li.className = "menu__link";
    frag.appendChild(li);
}
const navlist = document.querySelector("nav ul");
navlist.appendChild(frag);

// Add class 'active' to section when near top of viewport


// Scroll to anchor ID using scrollTO event


/**
 * End Main Functions
 * Begin Events
 * 
*/

// Build menu 

// Scroll to section on link click

// Set sections as active


