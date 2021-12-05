// ****** SELECT ITEMS **********
const ALERT = document.querySelector('.alert');
const INPUT_TEXT = document.getElementById('grocery');
const SUBMIT_BTN = document.querySelector('.submit-btn');
const TEXT_TITLE = document.querySelector('.title');
const BUTTON_CONTAINER = document.querySelectorAll('.btn-container');
const CLEAR_BTN = document.querySelector('.clear-btn');
const GROCERY_CONTAINER = document.querySelector('.grocery-list');
// edit option

// ****** EVENT LISTENERS **********
SUBMIT_BTN.addEventListener('click', (e) => {
        e.preventDefault();
        textInputcollecting(INPUT_TEXT)
    })
    // ****** FUNCTIONS **********
    // show what were typed inside the div
function textInputcollecting(textinput) {


    // creating the article tag and adding the class to it
    let article = document.createElement("article");

    article.classList.add("grocery-item");
    const INPUT_VALUE = textinput.value;
    const PLACE_HOLDER = `<p class="title">${INPUT_VALUE}</p>
    <div class="btn-container">
        <button class="edit-btn">
          <i class="fas fa-edit"></i>
        </button>
        <button class="delete-btn">
          <i class="fas fa-trash"></i>
        </button>
    </div>`

    if (!INPUT_VALUE) {
        ALERT.textContent = "Item not added to the item"
        ALERT.style.color = "red";
        setTimeout(() => {
            ALERT.textContent = "";
        }, 1000);
    } else {

        article.innerHTML = PLACE_HOLDER;
        GROCERY_CONTAINER.append(article);

        ALERT.textContent = "item added to list"
        ALERT.style.color = "green";
        setTimeout(() => {
            ALERT.textContent = "";
        }, 1000);

    }

}

BUTTON_CONTAINER.forEach(element => {
    element.addEventListener('click', (e) => {
        e = e || window.event;
        let target = e.target || e.Event;

        let textTarget = null;
        if (target.parentElement.classList == "edit-btn") {
            textTarget = target.parentElement.parentElement.parentElement.querySelector(".title");
            textTarget = textTarget.innerText;
            INPUT_TEXT.textContent = textTarget;
        }
    }, false);
})

// ****** LOCAL STORAGE **********

// ****** SETUP ITEMS **********