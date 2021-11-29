// ****** SELECT ITEMS **********
const ALERT = document.querySelector('.alert');
const INPUT_TEXT = document.getElementById('grocery');
const SUBMIT_BTN = document.querySelector('.submit-btn');
const TEXT_TITLE = document.querySelector('.title');
const BUTTON_CONTAINER = document.querySelector('.btn-container');
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
    const INPUT_VALUE = textinput.value;
    const PLACE_HOLDER = `<article class="grocery-item">
    <p class="title">${INPUT_VALUE}</p>
    <div class="btn-container">
        <button class="edit-btn">
          <i class="fas fa-edit"></i>
        </button>
        <button class="delete-btn">
          <i class="fas fa-trash"></i>
        </button>

    </div>
</article>`
    GROCERY_CONTAINER.write(PLACE_HOLDER);

    console.log(textinput)
}

// ****** LOCAL STORAGE **********

// ****** SETUP ITEMS **********