// ****** SELECT ITEMS **********
const ALERT = document.querySelector('.alert');
const INPUT_TEXT = document.getElementById('grocery');
const SUBMIT_BTN = document.querySelector('.submit-btn');
// const TEXT_TITLE = document.querySelectorAll('.title');
// const BUTTON_CONTAINER = document.querySelectorAll('.btn-container');
const CLEAR_BTN = document.querySelector('.clear-btn');
const GROCERY_CONTAINER = document.querySelector('.grocery-list');
// edit option
let holder = null;
// ****** EVENT LISTENERS **********

SUBMIT_BTN.addEventListener('click', (e) => {
    e.preventDefault();
    storingItem()
})
SUBMIT_BTN.addEventListener('storage', (e) => {
    console.log(e.newValue)
})
CLEAR_BTN.addEventListener('click', () => {
        localStorage.clear();
        location.reload();
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
        ALERT.innerText = "item added";
        ALERT.style.color = "green"
        setTimeout(() => {
            ALERT.innerText = "";
        }, 1000)

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
            localStorage.removeItem(textTargetP)
            ALERT.innerText = "item selected";
            ALERT.style.color = "blue"
            setTimeout(() => {
                ALERT.innerText = "";
            }, 1000)

        } else if (target.parentElement.classList = "delete-btn") {
            TargetP = target.parentElement.parentElement.parentElement.querySelector(".title");
            textTargetP = TargetP.innerText;
            if (localStorage.length == 1) {
                localStorage.clear();
                location.reload();
            } else {
                localStorage.removeItem(textTargetP);
                location.reload();
            }
            ALERT.innerText = "item removed";
            ALERT.style.color = "red"
            setTimeout(() => {
                ALERT.innerText = "";
            }, 1000)
        }
    }, false);
})

// ****** SETUP ITEMS **********