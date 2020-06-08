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

const frag = document.createDocumentFragment();
const sections = document.querySelectorAll('section');
const navList = document.querySelector('#navbar__list');
const headerHeight = document.querySelector('.page__header').offsetHeight;
let centerOfViewYCoordinate;
let timeoutId;
const collapsibles = document.querySelectorAll('.collapsible');

/**
 * End Global Variables
 * Start Helper Functions
 *
 */

// Set the active view horizontal line to halfway down the view after the header
const calculateCurrentlyActiveViewYCoordinate = () => {
  centerOfViewYCoordinate = Math.round((window.innerHeight - headerHeight) / 4 + headerHeight);
};

// Calculate and set the active section and corresponding menu link
const calculateActiveSection = () => {
  let activeSection = sections[0];
  for (const section of sections) {
    if (centerOfViewYCoordinate > section.getBoundingClientRect().y) {
      activeSection = section;
    }
  }
  if (activeSection !== document.querySelector('section.your-active-class')) {
    document.querySelector('section.your-active-class').classList.remove('your-active-class');
    activeSection.classList.add('your-active-class');
    document.querySelector('.active-menu-link').classList.remove('active-menu-link');
    document.querySelector(`[for-section=${activeSection.id}]`).classList.add('active-menu-link');
  }
};

// Display the nav bar for 3 more seconds
const displayNavBar = () => {
  clearTimeout(timeoutId);
  const navBar = document.querySelector('.navbar__menu');
  navBar.style.maxHeight = navBar.scrollHeight + 'px';
  timeoutId = setTimeout(() => {
    navBar.style.maxHeight = 0;
  }, 3000);
};

// Get all siblings of elem
const getSiblings = (elem) => {
  return Array.prototype.filter.call(elem.parentNode.children, (sibling) => {
    return sibling !== elem;
  });
};

// Opens the given collapsible
const setCollapsibleContentToTrueHeight = (collapsible) => {
  for (const sibling of getSiblings(collapsible)) {
    if (sibling.classList.contains('content')) {
      sibling.style.maxHeight = sibling.scrollHeight + 'px';
    }
  }
};

// Closes the given collapsible
const setCollapsibleContentHeightToZero = (collapsible) => {
  for (const sibling of getSiblings(collapsible)) {
    if (sibling.classList.contains('content')) {
      sibling.style.maxHeight = 0;
    }
  }
};

// Toggles a collapsible on an event trigger
const collapseToggle = (event) => {
  const collapsible = event.currentTarget;
  collapsible.classList.toggle('collapsed');
  if (collapsible.classList.contains('collapsed')) {
    setCollapsibleContentHeightToZero(collapsible);
  } else {
    setCollapsibleContentToTrueHeight(collapsible);
  }
};

/**
 * End Helper Functions
 * Begin Main Functions
 *
 */

// Build the nav dynamically
for (const section of sections) {
  const text = section.getAttribute('data-nav');
  const li = document.createElement('li');
  li.innerText = text;
  li.className = 'menu__link';
  li.setAttribute('for-section', section.getAttribute('id'));
  frag.appendChild(li);
}
frag.firstChild.classList.add('active-menu-link');
navList.appendChild(frag);

// Initialize active view horizontal line
calculateCurrentlyActiveViewYCoordinate();

/**
 * End Main Functions
 * Begin Events
 *
 */

// Recalculate active elements when resizing window
window.addEventListener('resize', () => {
  calculateCurrentlyActiveViewYCoordinate();
  calculateActiveSection();
});

// Recalculate active elements and display the nav bar when scrolling
window.addEventListener('scroll', () => {
  calculateActiveSection();
  displayNavBar();
});

// Show/hide sections when the header is clicked
window.addEventListener('load', () => {
  for (const collapsible of collapsibles) {
    setCollapsibleContentToTrueHeight(collapsible);
    collapsible.addEventListener('click', collapseToggle);
  }
});

// Scroll to section when nav bar list element is clicked
for (const navElement of navList.children) {
  navElement.addEventListener('click', () => {
    document.querySelector(`#${navElement.getAttribute('for-section')}`).scrollIntoView();
    if (window.scrollTop() + window.height() !== document.height()) {
      window.scrollBy(0, -1 * document.querySelector('.navbar__menu').scrollHeight);
    }
  });
}
