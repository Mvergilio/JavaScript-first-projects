// Element.getBoundingClientRect() method returns the size of an element and its position relative to the viewport.
// pageYOffset is a read - only window property that returns the number of pixels the document has been scrolled vertically.
// slice extracts a section of a string without modifying original string
//offsetTop - A Number, representing the top position of the element, in pixels

// ********** set date ************
const date = document.querySelector('.date');

// get the  upated date
const currentDate = new Date().getFullYear();
date.innerHTML = currentDate;

// ********** close links ************
function showLink(scrollPosition) {
    const bouncingButton = document.querySelector('.top-link')
    if (scrollPosition >= 500) {
        bouncingButton.classList.add('show-link')
    } else {
        bouncingButton.classList.remove('show-link');
    }
}

// ******** toggle menu **********
const links = document.querySelector('.links');
const toggleButton = document.querySelector('.nav-toggle');
const linkContainer = document.querySelector('.links-container');
toggleButton.addEventListener('click', () => {
    const linksHeight = links.getBoundingClientRect().height;
    const containerHeight = linkContainer.getBoundingClientRect().height;
    if (containerHeight === 0) {
        linkContainer.style.height = `${linksHeight}px`
    } else {
        linkContainer.style.height = 0;
    }

})

// ********** fixed navbar ************
const navContainer = document.querySelector('#nav');
window.addEventListener('scroll', () => {
    let windowPosition = window.scrollY;
    showLink(windowPosition);
    if (windowPosition >= 48) {
        navContainer.classList.add('fixed-nav');
    } else {
        navContainer.classList.remove('fixed-nav');
    }

});
// ********** smooth scroll ************
// select links
const sectionToLinks = document.querySelectorAll('.scroll-link');



sectionToLinks.forEach((item) => {
    item.addEventListener('click', (eve) => {
        goToLinks(eve);
    })
})

const navHeight = navContainer.getBoundingClientRect().height;

function goToLinks(e) {
    e.preventDefault();
    const href = e.currentTarget.getAttribute("href").slice(1);
    const element = document.getElementById(href);
    let position = element.offsetTop - navHeight;
    window.scrollTo({
        left: 0,
        top: position,
        behavior: "smooth",
    })
    console.log(navHeight);
}