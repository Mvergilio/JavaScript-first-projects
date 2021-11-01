// classList - shows/gets all classes
// contains - checks classList for specific class
// add - add class
// remove - remove class
// toggle - toggles class
const toggleBtn = document.querySelector('.nav-toggle');
const menuList = document.querySelector('#btn');

//toggle (show-links) class
toggleBtn.addEventListener('click', function() {
    let myMenu = menuList.classList;

    console.log(myMenu.contains('show-links'))


    console.log(myMenu);


    if (myMenu.contains('show-links') === false) {
        myMenu.add('show-links');
    } else {
        myMenu.remove('show-links');
    }
})