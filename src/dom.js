export { init };
import { Task } from "./tasks.js";
import { format } from "date-fns";
import { List, lists } from "./lists.js";
import ja from "date-fns/locale/ja";

const addNewListInput = document.querySelector("#new-list-input");
const addNewListButton = document.querySelector(".new-list-button");
const createdLists = document.querySelector(".created-lists");
const doneButton = document.querySelector(".add-task-button");
//const allLists = new List("All Lists", []);
const defaultList = new List("Default", []);
//lists.push(allLists);
lists.push(defaultList);

function init() {
	const defaultSelected = document.querySelector(`[data-list="Default"]`);
	defaultSelected.classList.add("selected-list");
	addNewListButton.addEventListener("click", (e) => {
		createNewList();
	});

	doneButton.addEventListener("click", (e) => {
		addTaskToDiv();
		console.log(lists);
	});

	deleteList();
	selectList();
	newTaskDisplay();
	deleteTask();
}

function createNewList() {
	const newList = document.createElement("li");
	newList.dataset.list = addNewListInput.value;
	newList.innerHTML = `${addNewListInput.value} <i class="fas fa-times-circle" data-delete="${addNewListInput.value}"></i>`;
	createdLists.appendChild(newList);
	lists.push(new List(addNewListInput.value, []));
}

function deleteList() {
	document.addEventListener("click", (e) => {
		if (e.target.dataset.delete == e.target.parentElement.innerText) {
			let index;
			for (let i = 0; i < lists.length; i++) {
				if (lists[i].name == e.target.parentElement.innerText) {
					delete lists[i];
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
			showTasksCorrespondingToList();
		}
	});
}

function showTasksCorrespondingToList() {
	lists.forEach((list) => {
		if (list.name == document.querySelector(".selected-list").innerText) {
			if (list.tasks.length == 0) {
				console.log("empty");
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
					console.log("wtf");
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

					if (task.urgent) priorityColor.style.background = "red";
					if (task.normal) priorityColor.style.background = "blue";

					newTask.classList.add("task");
					taskDiv.appendChild(newTask);
				});
				newTaskDisplay();
			}
		}
	});
}

function swapListOnDelete() {
	const allLists = document.querySelector(`[data-list="All Lists"]`);
	allLists.classList.add("selected-list");
}

function newTaskDisplay() {
	const addTaskButton = document.querySelector(".new-task-button");
	const closeTask = document.querySelector(".fa-times");
	addTaskButton.addEventListener("click", (e) => {
		openNewTaskDisplay();
		console.log("open");
	});
	closeTask.addEventListener("click", (e) => {
		closeNewTaskDisplay();
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

	if (urgent.checked) priorityColor.style.background = "red";
	if (normal.checked) priorityColor.style.background = "blue";

	newTask.classList.add("task");
	taskDiv.appendChild(newTask);

	resetForms();
	closeNewTaskDisplay();
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
						delete lists[i].tasks[j];
					}
				}
			}
		}
	});
}

/*function editTask() {
	document.addEventListener("click", (e) => {
		if (e.target.classList.contains("fa-edit")) {
			openNewTaskDisplay();
			tasks.forEach((task) => {
				if (task.getTitle() == e.target.parentElement.dataset.task) {
					setForms(
						task.getTitle(),
						task.getDescription(),
						task.getDueDate(),
						task.getUrgent(),
						task.getNormal()
					);
					editTaskDoneButton(task.getTitle());
				}
			});
		}
	});
}

function editTaskDoneButton(taskData) {
	const title = document.querySelector("#new-book-title");
	const description = document.querySelector("#new-book-description");
	const dueDate = document.querySelector("#new-book-due-date");
	const urgent = document.querySelector("#urgent");
	const normal = document.querySelector("#normal");
	const task = document.querySelector(`[data-task="${taskData}"]`);

	doneButton.addEventListener("click", (e) => {
		task.innerHTML = "";
		task.dataset.task = `${title.value}`;
		task.innerHTML = `<div class="priority"></div>
        <i class="fas fa-times-circle delete-task"></i>
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

		const priorityColor = task.querySelector(".priority");

		if (urgent.checked) priorityColor.style.background = "red";
		if (normal.checked) priorityColor.style.background = "blue";

		resetForms();
		closeNewTaskDisplay();
	});
}*/
