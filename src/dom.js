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
	closeTaskDisplay();
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
	addTaskButton.addEventListener("click", (e) => {
		sidebar.classList.add("opacity");
		mainDisplay.classList.add("opacity");
		newTaskDisplay.classList.remove("hide");
	});
}

function closeTaskDisplay() {
	const sidebar = document.querySelector(".sidebar");
	const mainDisplay = document.querySelector(".main-content");
	const newTaskDisplay = document.querySelector(".new-task-div");
	const closeTask = document.querySelector(".fa-times");
	const doneButton = document.querySelector(".add-task-button");
	closeTask.addEventListener("click", (e) => {
		sidebar.classList.remove("opacity");
		mainDisplay.classList.remove("opacity");
		newTaskDisplay.classList.add("hide");
	});
	doneButton.addEventListener("click", (e) => {
		sidebar.classList.remove("opacity");
		mainDisplay.classList.remove("opacity");
		newTaskDisplay.classList.add("hide");
	});
}
