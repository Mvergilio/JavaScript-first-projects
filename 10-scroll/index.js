const navContainer = document.querySelector("#nav");
const linksContainer = document.querySelector('.links-container');

//getting the button
const menuToggle = document.querySelector('.nav-toggle');
//menu toggle event

menuToggle.addEventListener('click', () => {
    const linksHeight = linksContainer.getBoundingClientRect().height;
    const navHeight = navContainer.getBoundingClientRect().height;
    if (navHeight === 0) {
        console.log(linksContainer)
        navContainer.style.height = `${linksHeight}px`;
    } else {
        navContainer.style.height = `0px`;
    }
})