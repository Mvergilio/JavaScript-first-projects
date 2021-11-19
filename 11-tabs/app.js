const buttonContent = document.querySelectorAll('.tab-btn')

buttonContent.forEach((element) => {
    element.addEventListener('click', (event) => {

        // selecting the data-id from each button and id from each section on clicked
        const dataId = event.currentTarget.getAttribute('data-id');
        const sectionId = document.getElementById(dataId);

        // selecting the siblings around the clicked button
        let siblings = n => [...n.parentElement.children].filter(c => c != n);

        // storing the function inside variables
        let siblingsElement = siblings(element);
        let sectionSiblings = siblings(sectionId);

        // adding the active class to the clicked button
        event.currentTarget.classList.add('active');
        sectionId.classList.add('active');

        // removing the active class from each section and button acxept for the clicked one
        siblingsElement.forEach(ele => ele.classList.remove('active'))
        sectionSiblings.forEach(ele => ele.classList.remove('active'))
    })
})