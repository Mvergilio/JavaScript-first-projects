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
let id = null;
let value = null;

// ****** EVENT LISTENERS **********
FORM.addEventListener("submit", addItem);
CLEAR_BTN.addEventListener("click", clearAll);
window.addEventListener('DOMContentLoaded', setupItems)

// ****** FUNCTIONS **********

// submit item
function addItem(e) {
    e.preventDefault();
    id = new Date().getTime();
    value = INPUT_TEXT.value;

    if (value && !editFlag) {
        showContent(id, value);

        CONTAINER.classList.add("show-container");
        showAlert("item added to the list", "success");
        setBackToDefault();
        setLocalStorage(id, value);
    } else if (!value && !editFlag) {
        showAlert("please enter value", "danger");
    } else if (!value && editFlag) {
        showAlert("please enter value", "danger");
    } else {
        editElement.textContent = INPUT_TEXT.value;
        editLocalStorage(editId, INPUT_TEXT.value)
        setBackToDefault();

        showAlert("item was edited with success", "success");
    }
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
    id = deletedItem.dataset.id;
    console.log(id)
    if (deletedItem.parentNode.childElementCount <= 1) {
        CONTAINER.classList.remove("show-container");
    }
    LIST_CONTAINER.removeChild(deletedItem);
    setBackToDefault();
    deleteFromLocalStorage(id)
    showAlert("Item was deleted", "danger");
}

// clear all functionality button
function clearAll(e) {
    LIST_CONTAINER.innerHTML = "";
    CONTAINER.classList.remove("show-container");
    setBackToDefault();
    localStorage.clear();
}
// ****** LOCAL STORAGE **********
function setLocalStorage(id, value) {
    let grocery = { id, value };
    let items = checkLocalStorage();
    items.push(grocery);
    localStorage.setItem("list", JSON.stringify(items));

}

function editLocalStorage(id, value) {
    let items = checkLocalStorage();
    items = items.map((item) => {
        if (id == item.id) {
            item.value = value;

        }
        return item;
    })


    localStorage.setItem("list", JSON.stringify(items))

}

function deleteFromLocalStorage(id) {
    let items = checkLocalStorage();
    items = items.filter((item) => {
        if (id == item.id) {
            return false;
        }
        return true;
    })

    localStorage.setItem('list', JSON.stringify(items))

}

function checkLocalStorage() {
    return localStorage.getItem("list") ?
        JSON.parse(localStorage.getItem("list")) : [];
}


// ****** SETUP ITEMS **********
function setupItems() {
    let items = checkLocalStorage();
    if (items.length > 0) {
        items.forEach((item) => {
            showContent(item.id, item.value);
        })
        CONTAINER.classList.add('show-container');
    }
}

function showContent(id, value) {
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
    LIST_CONTAINER.appendChild(article);
    // setting the edit and delete button
    const EDIT_BTN = document.querySelectorAll(".edit-btn");
    const DELETE_BTN = document.querySelectorAll(".delete-btn");
    // edit button event listener
    EDIT_BTN.forEach((element) => {
        element.addEventListener("click", editItem);
    });
    // delete button event listener
    DELETE_BTN.forEach((element) => {
        element.addEventListener("click", deleteItem);
    });
    console.log(article)
    return article;
}