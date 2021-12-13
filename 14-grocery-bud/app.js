// ****** SELECT ITEMS **********
const ALERT = document.querySelector(".alert");
const FORM = document.querySelector(".grocery-form");
const INPUT_TEXT = document.getElementById("grocery");
const SUBMIT_BTN = document.querySelector(".submit-btn");
const CONTAINER = document.querySelector(".grocery-container");
const LIST_CONTAINER = document.querySelector(".grocery-list");
const BUTTON_CONTAINER = document.querySelectorAll(".btn-container");
const CLEAR_BTN = document.querySelector(".clear-btn");
// edit option
let editFlag = false;
let editId = "";
let editElement;

// ****** EVENT LISTENERS **********
FORM.addEventListener('submit', addItem);

// ****** LOCAL STORAGE **********

// ****** FUNCTIONS **********
// submit item
function addItem(e) {
    e.preventDefault();
    let inputValue = INPUT_TEXT.value;
    let article = document.createElement('article');
    article.classList.add('grocery-item');
    let place_holder = `<p class="title">${inputValue}</p>
    <div class="btn-container">
        <button class="edit-btn">
          <i class="fas fa-edit"></i>
        </button>
        <button class="delete-btn">
          <i class="fas fa-trash"></i>
        </button>
    </div>`;
    article.innerHTML = place_holder;
    if (inputValue && !editFlag) {
        LIST_CONTAINER.appendChild(article);
        CONTAINER.classList.add('show-container');
        showAlert('item added to the list', 'success')
    } else if (!inputValue && !editFlag) {
        showAlert('please enter value', 'danger')
    }
    // SETTING THE EDDIT FUNCTIONALITY
}

function showAlert(text, type) {
    ALERT.textContent = text;
    ALERT.classList.add(`alert-${type}`);
    setTimeout(() => {
        ALERT.textContent = '';
        ALERT.classList.remove(`alert-${type}`);
    }, 1000);
}

// ****** SETUP ITEMS **********