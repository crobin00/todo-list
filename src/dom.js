export { init };
import { Task } from "./tasks.js";
import { format } from "date-fns";
import { List, lists } from "./lists.js";

const addNewListInput = document.querySelector("#new-list-input");
const addNewListButton = document.querySelector(".new-list-button");
const createdLists = document.querySelector(".created-lists");
const doneButton = document.querySelector(".add-task-button");
const editButton = document.querySelector(".edit-task-button");
const defaultList = new List("Default", []);
lists.push(defaultList);

function init() {
	swapListOnDelete();
	getLocalStorage();

	const defaultSelected = document.querySelector(`[data-list="Default"]`);
	defaultSelected.classList.add("selected-list");
	addNewListButton.addEventListener("click", (e) => {
		createNewList();
		sortTasks();
	});

	addNewListInput.addEventListener("keydown", (e) => {
		if (e.keyCode === 13) {
			createNewList();
			sortTasks();
		}
	});

	doneButton.addEventListener("click", (e) => {
		addTaskToDiv();
		sortTasks();
	});

	deleteList();
	selectList();
	newTaskDisplay();
	deleteTask();
	completedTask();
	editTask();
}

function createNewList() {
	if (addNewListInput.value == "") {
		return;
	} else {
		const newList = document.createElement("li");
		newList.dataset.list = addNewListInput.value;
		newList.innerHTML = `${addNewListInput.value} <i class="fas fa-times-circle" data-delete="${addNewListInput.value}"></i>`;
		createdLists.appendChild(newList);
		lists.push(new List(addNewListInput.value, []));
		addNewListInput.value = "";
		localStorage.setItem("lists", JSON.stringify(lists));
	}
}

function deleteList() {
	document.addEventListener("click", (e) => {
		if (e.target.dataset.delete == e.target.parentElement.innerText) {
			let index;
			for (let i = 0; i < lists.length; i++) {
				if (lists[i].name == e.target.parentElement.innerText) {
					if (lists.length == 1) {
						alert("Error: Cannot delete all lists");
						return;
					} else if (lists[i].name == "Default") {
						alert("Cannot delete default list");
						return;
					} else {
						lists.splice(i, 1);
					}
				}
			}

			const deleteButton = document.querySelector(
				`[data-delete="${e.target.dataset.delete}"]`
			);
			const deleteList = document.querySelector(
				`[data-list="${e.target.dataset.delete}"]`
			);
			deleteButton.remove();
			deleteList.remove();
			localStorage.setItem("lists", JSON.stringify(lists));

			if (deleteList.classList.contains("selected-list")) {
				swapListOnDelete();
				showTasksCorrespondingToList();
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
			showTasksCorrespondingToList();
		}
	});
}

function showTasksCorrespondingToList() {
	sortTasks();
	lists.forEach((list) => {
		if (list.name == document.querySelector(".selected-list").innerText) {
			if (list.tasks.length == 0) {
				const taskDiv = document.querySelector(".task-div");
				taskDiv.innerHTML = "";
				const addTask = document.createElement("i");
				addTask.innerHTML = `<i class="fas fa-plus-circle new-task-button"></i>`;
				taskDiv.appendChild(addTask);
				newTaskDisplay();
			} else {
				const taskDiv = document.querySelector(".task-div");
				taskDiv.innerHTML = `<i class="fas fa-plus-circle new-task-button"></i>`;
				list.tasks.forEach((task) => {
					const newTask = document.createElement("div");
					newTask.dataset.task = `${task.title}`;
					newTask.innerHTML += ` <div class="priority"></div>
        <i class="fas fa-times-circle delete-task"></i>
        <h5>${task.title}</h5>
        <p>
            ${task.description}
        </p>
        <i class="fas fa-check-circle"></i>
        <span
            >Due date <br />
            ${format(new Date(task.dueDate), "MM/dd/yyyy")}
        </span>
        <i class="fas fa-edit"></i>`;

					const priorityColor = newTask.querySelector(".priority");

					if (task.urgent) priorityColor.style.background = "#c81d25";
					if (task.normal) priorityColor.style.background = "#7189ff";

					newTask.classList.add("task");

					if (task.complete) newTask.classList.add("completed");

					taskDiv.appendChild(newTask);
				});
				sortTasks();
				newTaskDisplay();
			}
		}
	});
}

function swapListOnDelete() {
	const swapDefault = document.querySelector(
		`[data-list="${lists[0].name}"]`
	);

	swapDefault.classList.add("selected-list");
}

function newTaskDisplay() {
	const addTaskButton = document.querySelector(".new-task-button");
	const closeTask = document.querySelector(".fa-times");
	addTaskButton.addEventListener("click", (e) => {
		resetForms();
		editButton.classList.add("hide");
		doneButton.classList.remove("hide");
		openNewTaskDisplay();
	});
	closeTask.addEventListener("click", (e) => {
		closeNewTaskDisplay();
		resetForms();
	});
}

function closeNewTaskDisplay() {
	const sidebar = document.querySelector(".sidebar");
	const mainDisplay = document.querySelector(".main-content");
	const newTaskDisplay = document.querySelector(".new-task-div");
	sidebar.classList.remove("opacity");
	mainDisplay.classList.remove("opacity");
	newTaskDisplay.classList.add("hide");
}

function openNewTaskDisplay() {
	const sidebar = document.querySelector(".sidebar");
	const mainDisplay = document.querySelector(".main-content");
	const newTaskDisplay = document.querySelector(".new-task-div");

	sidebar.classList.add("opacity");
	mainDisplay.classList.add("opacity");
	newTaskDisplay.classList.remove("hide");
}

function addTaskToDiv() {
	const title = document.querySelector("#new-book-title");
	const description = document.querySelector("#new-book-description");
	const dueDate = document.querySelector("#new-book-due-date");
	const urgent = document.querySelector("#urgent");
	const normal = document.querySelector("#normal");

	if (
		title.value == "" ||
		description.value == "" ||
		dueDate.value == "" ||
		(!urgent.checked && !normal.checked)
	) {
		alert("fill all forms");
		return;
	}

	const task = new Task(
		`${title.value}`,
		`${description.value}`,
		`${dueDate.value}`,
		urgent.checked,
		normal.checked
	);

	lists.forEach((list) => {
		if (list.name == document.querySelector(".selected-list").innerText) {
			list.tasks.push(task);
		}
	});

	const taskDiv = document.querySelector(".task-div");
	const newTask = document.createElement("div");
	newTask.dataset.task = `${title.value}`;
	newTask.innerHTML = `<div class="priority"></div>
        <i class="fas fa-times-circle delete-task"></i>
        <h5>${title.value}</h5>
        <p>
            ${description.value}
        </p>
        <i class="fas fa-check-circle"></i>
        <span
            >Due date <br />
            ${format(new Date(dueDate.value), "MM/dd/yyyy")}
        </span>
        <i class="fas fa-edit"></i>`;

	const priorityColor = newTask.querySelector(".priority");

	if (urgent.checked) priorityColor.style.background = "#c81d25";
	if (normal.checked) priorityColor.style.background = "#7189ff";

	newTask.classList.add("task");
	taskDiv.appendChild(newTask);
	showTasksCorrespondingToList();

	resetForms();
	closeNewTaskDisplay();
	localStorage.setItem("lists", JSON.stringify(lists));
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

function setForms(title, description, dueDate, urgent, normal) {
	const titleForm = document.querySelector("#new-book-title");
	const descriptionForm = document.querySelector("#new-book-description");
	const dueDateForm = document.querySelector("#new-book-due-date");
	const urgentForm = document.querySelector("#urgent");
	const normalForm = document.querySelector("#normal");

	titleForm.value = `${title}`;
	descriptionForm.value = `${description}`;
	dueDateForm.value = `${dueDate}`;
	urgentForm.checked = urgent;
	normalForm.checked = normal;
}

function deleteTask() {
	document.addEventListener("click", (e) => {
		if (e.target.classList.contains("delete-task")) {
			const deleteButton = document.querySelector(
				`[data-task="${e.target.parentElement.dataset.task}"]`
			);
			deleteButton.remove();
			for (let i = 0; i < lists.length; i++) {
				for (let j = 0; j < lists[i].tasks.length; j++) {
					if (
						lists[i].tasks[j].title ==
						e.target.parentElement.dataset.task
					) {
						lists[i].tasks.splice(j, 1);
					}
				}
			}
			localStorage.setItem("lists", JSON.stringify(lists));
		}
	});
}

function completedTask() {
	document.addEventListener("click", (e) => {
		if (e.target.classList.contains("fa-check-circle")) {
			const completeButton = document.querySelector(
				`[data-task="${e.target.parentElement.dataset.task}"]`
			);
			completeButton.classList.toggle("completed");
			for (let i = 0; i < lists.length; i++) {
				for (let j = 0; j < lists[i].tasks.length; j++) {
					if (
						lists[i].tasks[j].title ==
						e.target.parentElement.dataset.task
					) {
						lists[i].tasks[j].complete =
							!lists[i].tasks[j].complete;
					}
				}
			}
			localStorage.setItem("lists", JSON.stringify(lists));
		}
	});
}

function editTask() {
	const title = document.querySelector("#new-book-title");
	const description = document.querySelector("#new-book-description");
	const dueDate = document.querySelector("#new-book-due-date");
	const urgent = document.querySelector("#urgent");
	const normal = document.querySelector("#normal");
	let indexI;
	let indexJ;

	document.addEventListener("click", (e) => {
		if (e.target.classList.contains("fa-edit")) {
			doneButton.classList.add("hide");
			editButton.classList.remove("hide");
			const taskElement = document.querySelector(
				`[data-task="${e.target.parentElement.dataset.task}"]`
			);
			openNewTaskDisplay();
			for (let i = 0; i < lists.length; i++) {
				for (let j = 0; j < lists[i].tasks.length; j++) {
					if (
						lists[i].tasks[j].title ==
						e.target.parentElement.dataset.task
					) {
						indexI = i;
						indexJ = j;
						setForms(
							lists[i].tasks[j].title,
							lists[i].tasks[j].description,
							lists[i].tasks[j].dueDate,
							lists[i].tasks[j].urgent,
							lists[i].tasks[j].normal
						);
					}
				}
			}
			editButton.addEventListener("click", (e) => {
				if (
					title.value == "" ||
					description.value == "" ||
					dueDate.value == "" ||
					(!urgent.checked && !normal.checked)
				) {
					alert("fill all forms");
					return;
				} else {
					lists[indexI].tasks[indexJ].title = title.value;
					lists[indexI].tasks[indexJ].description = description.value;
					lists[indexI].tasks[indexJ].dueDate = dueDate.value;
					lists[indexI].tasks[indexJ].urgent = urgent.checked;
					lists[indexI].tasks[indexJ].normal = normal.checked;
					taskElement.innerHTML = `<div class="priority"></div>
                <i class="fas fa-times-circle delete-task"></i>
                <h5>${title.value}</h5>
                <p>
                    ${description.value}
                </p>
                <i class="fas fa-check-circle"></i>
                <span
                    >Due date <br />
                    ${format(new Date(dueDate.value), "MM/dd/yyyy")}
                </span>
                <i class="fas fa-edit"></i>`;
					const priorityColor =
						taskElement.querySelector(".priority");

					if (urgent.checked)
						priorityColor.style.background = "#c81d25";
					if (normal.checked)
						priorityColor.style.background = "#7189ff";

					closeNewTaskDisplay();
					editButton.classList.add("hide");
					doneButton.classList.remove("hide");
					showTasksCorrespondingToList();
					localStorage.setItem("lists", JSON.stringify(lists));
				}
			});
		}
	});
}

function sortTasks() {
	for (let i = 0; i < lists.length; i++) {
		if (lists[i].tasks.length == 0) {
		} else {
			lists[i].tasks.sort(function (a, b) {
				if (a.dueDate < b.dueDate) {
					return -1;
				}
				if (a.dueDate > b.dueDate) {
					return 1;
				}
				return 0;
			});
			lists[i].tasks.sort((a, b) => b.urgent - a.urgent);
			lists[i].tasks.sort((a, b) => a.complete - b.complete);
		}
	}
}

function getLocalStorage() {
	if (localStorage.getItem("lists") == null) {
		return;
	} else {
		let stored_data = JSON.parse(localStorage.getItem("lists"));
		stored_data.forEach((list) => {
			lists.push(list);
			if (list.name != "Default") {
				const newList = document.createElement("li");
				newList.dataset.list = list.name;
				newList.innerHTML = `${list.name} <i class="fas fa-times-circle" data-delete="${list.name}"></i>`;
				createdLists.appendChild(newList);
			}
			if (list.tasks.length == 0) {
				const taskDiv = document.querySelector(".task-div");
				taskDiv.innerHTML = "";
				const addTask = document.createElement("i");
				addTask.innerHTML = `<i class="fas fa-plus-circle new-task-button"></i>`;
				taskDiv.appendChild(addTask);
				newTaskDisplay();
			} else {
				const taskDiv = document.querySelector(".task-div");
				taskDiv.innerHTML = `<i class="fas fa-plus-circle new-task-button"></i>`;
				list.tasks.forEach((task) => {
					const newTask = document.createElement("div");
					newTask.dataset.task = `${task.title}`;
					newTask.innerHTML += ` <div class="priority"></div>
        <i class="fas fa-times-circle delete-task"></i>
        <h5>${task.title}</h5>
        <p>
            ${task.description}
        </p>
        <i class="fas fa-check-circle"></i>
        <span
            >Due date <br />
            ${format(new Date(task.dueDate), "MM/dd/yyyy")}
        </span>
        <i class="fas fa-edit"></i>`;

					const priorityColor = newTask.querySelector(".priority");

					if (task.urgent) priorityColor.style.background = "#c81d25";
					if (task.normal) priorityColor.style.background = "#7189ff";

					newTask.classList.add("task");

					if (task.complete) newTask.classList.add("completed");

					taskDiv.appendChild(newTask);
				});
				newTaskDisplay();
			}
		});
	}
	swapListOnDelete();
	showTasksCorrespondingToList();
}
