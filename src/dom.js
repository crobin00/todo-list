export { init };

const addNewListInput = document.querySelector("#new-list-input");
const addNewListButton = document.querySelector(".new-list-button");
const createdLists = document.querySelector(".created-lists");

function init() {
	addNewListButton.addEventListener("click", (e) => {
		createNewList();
	});

	deleteList();
	selectList();
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
		}
	});
}

function selectList() {
	document.addEventListener("click", (e) => {
		console.log(e.target.dataset.list);
		console.log(e.target.innerText);
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
