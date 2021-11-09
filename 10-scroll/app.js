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
const sectionLocation = document.querySelectorAll('.section');
const sectionToLinks = document.querySelectorAll('.scroll-link');
//console.log(sectionLocation, sectionToLinks);


sectionToLinks.forEach((item) => {
        item.addEventListener('click', (e) => {
            let currentLink = e.currentTarget.innerHTML;

            //console.log(currentLink);
            sectionLocation.forEach((item) => {
                let position = item.getBoundingClientRect().y.toFixed();
                let identification = item.id;
                if (currentLink === identification) {
                    e.currentTarget.style.transition = '5s ease-out';

                }
            })
        })
    })
    // ********** fixed navbar ************
function fixedNav() {
    const navbar = document.querySelector('.links-container');
    if (window.pageYOffset >= 340) {
        return navbar.classList.add('fixed-nav');
    } else {
        return navbar.classList.remove('fixed-nav');
    }
}
fixedNav();
// ********** smooth scroll ************
// select links