// ****** SELECT ITEMS **********
const ALERT = document.querySelector('.alert');
const INPUT_TEXT = document.getElementById('grocery');
const SUBMIT_BTN = document.querySelector('.submit-btn');
// const TEXT_TITLE = document.querySelectorAll('.title');
// const BUTTON_CONTAINER = document.querySelectorAll('.btn-container');
const CLEAR_BTN = document.querySelector('.clear-btn');
const GROCERY_CONTAINER = document.querySelector('.grocery-list');
// edit option

// ****** EVENT LISTENERS **********

SUBMIT_BTN.addEventListener('click', (e) => {
        e.preventDefault();
        storingItem()
        textInputcollecting();



    })
    // ****** LOCAL STORAGE **********
function storingItem() {
    let textValueKey = INPUT_TEXT.value;
    let textHolderValue = `<article class="grocery-item">
    <p class="title">${textValueKey}</p>
    <div class="btn-container">
        <button class="edit-btn">
          <i class="fas fa-edit"></i>
        </button>
        <button class="delete-btn">
          <i class="fas fa-trash"></i>
        </button>

    </div>
    </article>`
    if (textValueKey) {
        localStorage.setItem(textValueKey, textHolderValue);
        location.reload();
    }
}
for (let i = 0; i < localStorage.length; i++) {
    let key = localStorage.key(i);
    let value = localStorage.getItem(key);

    GROCERY_CONTAINER.innerHTML += `${value}`;
}

const BUTTON_CONTAINER = document.querySelectorAll('.btn-container');
const TEXT_TITLE = document.querySelectorAll('.title');

// ****** FUNCTIONS **********


BUTTON_CONTAINER.forEach(element => {
    element.addEventListener('click', (e) => {
        e = e || window.event;
        let target = e.target || e.Event;

        let TargetP = null,
            textTargetP;
        if (target.parentElement.classList == "edit-btn") {
            TargetP = target.parentElement.parentElement.parentElement.querySelector(".title");
            textTargetP = TargetP.innerText;
            INPUT_TEXT.value = textTargetP;
        }
    }, false);
})

// ****** SETUP ITEMS **********