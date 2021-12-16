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
let id = "";
let value = "";

// ****** EVENT LISTENERS **********
FORM.addEventListener("submit", addItem);
CLEAR_BTN.addEventListener('click', clearAll)

// ****** FUNCTIONS **********
// submit item
function addItem(e) {
    e.preventDefault();
    id = new Date().getTime();
    value = INPUT_TEXT.value;
    let article = document.createElement("article");
    article.classList.add("grocery-item");
    article.setAttribute("data-id", id);
    let place_holder = `<p class="title">${value}</p>
    <div class="btn-container">
        <button class="edit-btn">
          <i class="fas fa-edit"></i>
        </button>
        <button class="delete-btn">
        <i class="fas fa-trash"></i>
        </button>
        </div>`;
    article.innerHTML = place_holder;

    if (value && !editFlag) {
        LIST_CONTAINER.appendChild(article);
        CONTAINER.classList.add("show-container");
        showAlert("item added to the list", "success");
        setBackToDefault();
    } else if (!value && !editFlag) {
        showAlert("please enter value", "danger");
    } else if (!value && editFlag) {
        showAlert("please enter value", "danger");
    } else {
        editElement.textContent = INPUT_TEXT.value;
        setBackToDefault();
        showAlert("item was edited with success", "success");
    }
    // setting the edit and delete button
    const EDIT_BTN = document.querySelectorAll(".edit-btn");
    const DELETE_BTN = document.querySelectorAll(".delete-btn");
    // edit button event listener
    EDIT_BTN.forEach((element) => {
        element.addEventListener('click', editItem);
    });
    // delete button event listener
    DELETE_BTN.forEach((element) => {
        element.addEventListener('click', deleteItem);
    })

}
// alert menssage
function showAlert(text, type) {
    ALERT.textContent = text;
    ALERT.classList.add(`alert-${type}`);
    setTimeout(() => {
        ALERT.textContent = "";
        ALERT.classList.remove(`alert-${type}`);
    }, 1000);
}

// edit Functionality
function editItem(e) {
    editId = e.currentTarget.parentElement.parentElement.dataset.id;
    editElement =
        e.currentTarget.parentElement.parentElement.querySelector(".title");
    let value = editElement.textContent;
    INPUT_TEXT.value = value;
    editFlag = true;
    SUBMIT_BTN.textContent = "edit";
    showAlert("item was selected", "danger");
}
// setting everything back to default
function setBackToDefault() {
    SUBMIT_BTN.textContent = "submit";
    editFlag = false;
    editId = "";
    editElement = null;
    INPUT_TEXT.value = "";
}

// delete button 

function deleteItem(e) {
    let deletedItem = e.currentTarget.parentElement.parentElement;

    if (deletedItem.parentNode.childElementCount <= 1) {
        CONTAINER.classList.remove("show-container");
    }
    LIST_CONTAINER.removeChild(deletedItem);
    setBackToDefault();
    showAlert("Item was deleted", "danger");
}

// clear all functionality button
function clearAll(e) {
    LIST_CONTAINER.innerHTML = "";
    CONTAINER.classList.remove('show-container');
    setBackToDefault();
}
// ****** LOCAL STORAGE **********
function setLocalStorage(id, value) {

    let key = { id: value };
    let items = [];
    items.push(key);
    localStorage.setItem('item', JSON.stringify(items));


}
console.log(id, value)
setLocalStorage(id, value)

// ****** SETUP ITEMS **********