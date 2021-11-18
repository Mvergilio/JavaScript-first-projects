// global variables

const navContainer = document.querySelector("#nav");
const linksContainer = document.querySelector('.links-container');
const links = document.querySelector('.links');
const footerDateSpan = document.querySelector('.date');
const linksToSection = document.querySelectorAll('.scroll-link');
//getting the button

const menuToggle = document.querySelector('.nav-toggle');

//menu toggle event

menuToggle.addEventListener('click', () => {
    const linksHeight = links.getBoundingClientRect().height;
    const containerHeight = linksContainer.getBoundingClientRect().height;
    if (containerHeight === 0) {

        linksContainer.style.height = `${linksHeight}px`;
    } else {
        linksContainer.style.height = 0;
    }
})

// fixed navBar
const toTopButton = document.querySelector('.top-link ')
const navBarHeight = navContainer.getBoundingClientRect().height;
window.addEventListener('scroll', () => {
        let windowScroll = window.scrollY;
        if (windowScroll > navBarHeight) {
            navContainer.classList.add('fixed-nav');
        } else {
            navContainer.classList.remove('fixed-nav');
        }

        // button to top of the page
        if (windowScroll > 500) {
            toTopButton.classList.add('show-link')
        } else {
            toTopButton.classList.remove('show-link');
        }
    })
    // setting the footer current date
function footerDate() {
    let currentDate = new Date().getFullYear();
    return footerDateSpan.innerHTML = currentDate;

}
footerDate();

// smooth scrolling settings
linksToSection.forEach((item) => {
    item.addEventListener('click', (e) => {
        //prevent defaut setting
        e.preventDefault();
        const sectionId = e.currentTarget.getAttribute('href').slice(1);
        const eachSectionToGo = document.getElementById(sectionId);
        const sectionPosition = eachSectionToGo.offsetTop;
        window.scrollTo({
            left: 0,
            behavior: "smooth",
            top: sectionPosition
        })


    })
})