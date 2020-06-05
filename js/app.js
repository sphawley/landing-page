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

// Build the nav dynamically
const frag = document.createDocumentFragment();
const sections = document.querySelectorAll("section");
for (const section of sections) {
    let text = section.getAttribute("data-nav");
    let li = document.createElement("li");
    li.innerText = text;
    li.className = "menu__link";
    li.setAttribute("for-section", section.getAttribute("id"));
    frag.appendChild(li);
}
const navList = document.querySelector("#navbar__list");
navList.appendChild(frag);

// Add class 'active' to section when near top of viewport


// Scroll to anchor ID using scrollTO event
//TODO: should I use let or const here?
for (const navElement of navList.children) {
    navElement.addEventListener('click', function () {
        document.querySelector(`#${navElement.getAttribute("for-section")}`).scrollIntoView();
        window.scrollBy(0, -1 * document.querySelector(".page__header").offsetHeight)
    });
}

/**
 * End Main Functions
 * Begin Events
 * 
*/

// Build menu 

// Scroll to section on link click

// Set sections as active


