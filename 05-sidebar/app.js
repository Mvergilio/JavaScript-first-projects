const menuBtn = document.querySelector('.sidebar-toggle');
const sidebar = document.querySelector('.sidebar');
const closeBtn = document.querySelector('.close-btn');


//toggle button functionality
menuBtn.addEventListener('click', function() {
        sidebar.classList.toggle('show-sidebar');
    })
    //toggle the closing button inside sidebar
closeBtn.addEventListener('click', function() {
    sidebar.classList.toggle('show-sidebar');
})