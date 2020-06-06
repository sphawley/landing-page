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
frag.firstChild.classList.add("active-menu-link");
const navList = document.querySelector("#navbar__list");
navList.appendChild(frag);

const headerHeight = document.querySelector(".page__header").offsetHeight;
let centerOfViewYCoordinate;
calculateCenterOfViewYCoordinate();

// Add class 'active' to section when near top of viewport
function calculateCenterOfViewYCoordinate() {
    centerOfViewYCoordinate = Math.round((window.innerHeight - headerHeight)/2 + headerHeight);
}

function calculateActiveSection() {
    let activeSection = sections[0];
    for (const section of sections) {
        if (centerOfViewYCoordinate > section.getBoundingClientRect().y) {
            activeSection = section;
        }
    }
    if (activeSection !== document.querySelector("section.your-active-class")) {
        document.querySelector("section.your-active-class").classList.remove("your-active-class");
        activeSection.classList.add("your-active-class");
        document.querySelector(".active-menu-link").classList.remove("active-menu-link");
        document.querySelector(`[for-section=${activeSection.id}]`).classList.add("active-menu-link");
    }
}

window.addEventListener('resize', function() {
    calculateCenterOfMainYCoordinate();
    calculateActiveSection();
});

function onScroll() {
    calculateActiveSection();
    displayNavBar();
}

window.addEventListener('scroll', function() {
    calculateActiveSection();
    displayNavBar();
});


let timeoutId;
function displayNavBar() {
    clearTimeout(timeoutId);
    document.querySelector(".navbar__menu").classList.remove("hide");
    timeoutId = setTimeout(function() {
            document.querySelector(".navbar__menu").classList.add("hide");
        }, 3000);
}

// Scroll to anchor ID using scrollTO event
//TODO: should I use let or const here?
for (const navElement of navList.children) {
    navElement.addEventListener('click', function () {
        document.querySelector(`#${navElement.getAttribute("for-section")}`).scrollIntoView();
        window.scrollBy(0, -1 * headerHeight)
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


