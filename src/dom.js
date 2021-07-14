export { init };

const addNewListInput = document.querySelector("#new-list-input");
const addNewListButton = document.querySelector(".new-list-button");
const createdLists = document.querySelector(".created-lists");

function init() {
	const defaultList = document.querySelector(`[data-list="Default"]`);
	defaultList.classList.add("selected-list");

	addNewListButton.addEventListener("click", (e) => {
		createNewList();
	});

	deleteList();
	selectList();
	newTaskDisplay();
	addTaskToDiv();
}

function createNewList() {
	const newList = document.createElement("li");
	newList.dataset.list = addNewListInput.value;
	newList.innerHTML = `${addNewListInput.value} <i class="fas fa-times-circle" data-delete="${addNewListInput.value}"></i>`;
	createdLists.appendChild(newList);
}

function deleteList() {
	document.addEventListener("click", (e) => {
		if (e.target.dataset.delete == e.target.parentElement.innerText) {
			const deleteButton = document.querySelector(
				`[data-delete="${e.target.dataset.delete}"]`
			);
			const deleteList = document.querySelector(
				`[data-list="${e.target.dataset.delete}"]`
			);
			deleteButton.remove();
			deleteList.remove();

			if (deleteList.classList.contains("selected-list")) {
				swapListOnDelete();
			}
		}
	});
}

function selectList() {
	document.addEventListener("click", (e) => {
		if (e.target.dataset.list == e.target.innerText) {
			const listElements = document.querySelectorAll("li");
			listElements.forEach((element) => {
				element.classList.remove("selected-list");
			});

			const selectList = document.querySelector(
				`[data-list="${e.target.dataset.list}"]`
			);
			selectList.classList.add("selected-list");
		}
	});
}

function swapListOnDelete() {
	const allLists = document.querySelector(`[data-list="All Lists"]`);
	allLists.classList.add("selected-list");
}

function newTaskDisplay() {
	const sidebar = document.querySelector(".sidebar");
	const mainDisplay = document.querySelector(".main-content");
	const newTaskDisplay = document.querySelector(".new-task-div");
	const addTaskButton = document.querySelector(".new-task-button");
	const closeTask = document.querySelector(".fa-times");
	addTaskButton.addEventListener("click", (e) => {
		sidebar.classList.add("opacity");
		mainDisplay.classList.add("opacity");
		newTaskDisplay.classList.remove("hide");
	});
	closeTask.addEventListener("click", (e) => {
		closeNewTaskDisplay();
	});
}

function closeNewTaskDisplay() {
	const sidebar = document.querySelector(".sidebar");
	const mainDisplay = document.querySelector(".main-content");
	const newTaskDisplay = document.querySelector(".new-task-div");
	const doneButton = document.querySelector(".add-task-button");
	sidebar.classList.remove("opacity");
	mainDisplay.classList.remove("opacity");
	newTaskDisplay.classList.add("hide");
}

function openNewTaskDisplay() {
	const sidebar = document.querySelector(".sidebar");
	const mainDisplay = document.querySelector(".main-content");
	const newTaskDisplay = document.querySelector(".new-task-div");
	const doneButton = document.querySelector(".add-task-button");

	sidebar.classList.remove("opacity");
	mainDisplay.classList.remove("opacity");
	newTaskDisplay.classList.add("hide");
}

function addTaskToDiv() {
	const title = document.querySelector("#new-book-title");
	const description = document.querySelector("#new-book-description");
	const dueDate = document.querySelector("#new-book-due-date");
	const urgent = document.querySelector("#urgent");
	const normal = document.querySelector("#normal");
	const doneButton = document.querySelector(".add-task-button");

	doneButton.addEventListener("click", (e) => {
		if (
			title.value == "" ||
			description.value == "" ||
			dueDate.value == "" ||
			(!urgent.checked && !normal.checked)
		) {
			alert("fill all forms idiot");
			return;
		}

		const taskDiv = document.querySelector(".task-div");
		const newTask = document.createElement("div");
		newTask.innerHTML = `<div class="priority"></div>
        <i class="fas fa-times-circle"></i>
        <h5>${title.value}</h5>
        <p>
            ${description.value}
        </p>
        <i class="fas fa-check-circle"></i>
        <span
            >Due date <br />
            ${dueDate.value}
        </span>
        <i class="fas fa-edit"></i>`;

		const priorityColor = newTask.querySelector(".priority");

		if (urgent.checked) priorityColor.style.background = "red";
		if (normal.checked) priorityColor.style.background = "blue";

		newTask.classList.add("task");
		taskDiv.appendChild(newTask);

		resetForms();
		closeNewTaskDisplay();
	});
}

function resetForms() {
	const title = document.querySelector("#new-book-title");
	const description = document.querySelector("#new-book-description");
	const dueDate = document.querySelector("#new-book-due-date");
	const urgent = document.querySelector("#urgent");
	const normal = document.querySelector("#normal");

	title.value = "";
	description.value = "";
	dueDate.value = "";
	urgent.checked = false;
	normal.checked = false;
}
