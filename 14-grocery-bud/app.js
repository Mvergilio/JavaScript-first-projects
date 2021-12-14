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
FORM.addEventListener("submit", addItem);

// ****** FUNCTIONS **********
// submit item
function addItem(e) {
	e.preventDefault();
	let id = new Date().getTime();
	let inputValue = INPUT_TEXT.value;
	let article = document.createElement("article");
	article.classList.add("grocery-item");
	article.setAttribute("data-id", id);
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
		CONTAINER.classList.add("show-container");
		showAlert("item added to the list", "success");
	} else if (!inputValue && !editFlag) {
		showAlert("please enter value", "danger");
	} else if (!inputValue && editFlag) {
		showAlert("please enter value", "danger");
	} else {
		editElement.textContent = INPUT_TEXT.value;
		setBackToDefault();
	}
	// setting the edit button
	const EDIT_BTN = document.querySelectorAll(".edit-btn");
	const DELETE_BTN = document.querySelector(".delete-btn");
	EDIT_BTN.forEach((element) => {
		element.addEventListener("click", editItem);
	});
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
}

function setBackToDefault() {
	SUBMIT_BTN.textContent = "submit";
	editFlag = false;
	editId = "";
	editElement = null;
}

// ****** LOCAL STORAGE **********

// ****** SETUP ITEMS **********
