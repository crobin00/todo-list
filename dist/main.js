/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/dom.js":
/*!********************!*\
  !*** ./src/dom.js ***!
  \********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "init": () => (/* binding */ init)
/* harmony export */ });


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


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _dom_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dom.js */ "./src/dom.js");


console.log("Set up complete");
(0,_dom_js__WEBPACK_IMPORTED_MODULE_0__.init)();

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvZG9tLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9pbmRleC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUFnQjs7QUFFaEI7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsRUFBRTs7QUFFRjtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLHdCQUF3QixzQkFBc0IsK0NBQStDLHNCQUFzQjtBQUNuSDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUJBQXFCLHdCQUF3QjtBQUM3QztBQUNBO0FBQ0EsbUJBQW1CLHdCQUF3QjtBQUMzQztBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxFQUFFO0FBQ0Y7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTs7QUFFSjtBQUNBLG1CQUFtQixzQkFBc0I7QUFDekM7QUFDQTtBQUNBO0FBQ0EsRUFBRTtBQUNGOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRUFBRTtBQUNGO0FBQ0E7QUFDQSxFQUFFO0FBQ0Y7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxjQUFjLFlBQVk7QUFDMUI7QUFDQSxjQUFjO0FBQ2Q7QUFDQTtBQUNBO0FBQ0E7QUFDQSxjQUFjO0FBQ2Q7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEVBQUU7QUFDRjs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7O1VDbktBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7O1dDdEJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0Esd0NBQXdDLHlDQUF5QztXQUNqRjtXQUNBO1dBQ0EsRTs7Ozs7V0NQQSx3Rjs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSxzREFBc0Qsa0JBQWtCO1dBQ3hFO1dBQ0EsK0NBQStDLGNBQWM7V0FDN0QsRTs7Ozs7Ozs7Ozs7O0FDTmdDOztBQUVoQztBQUNBLDZDQUFJIiwiZmlsZSI6Im1haW4uanMiLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgeyBpbml0IH07XG5cbmNvbnN0IGFkZE5ld0xpc3RJbnB1dCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjbmV3LWxpc3QtaW5wdXRcIik7XG5jb25zdCBhZGROZXdMaXN0QnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5uZXctbGlzdC1idXR0b25cIik7XG5jb25zdCBjcmVhdGVkTGlzdHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmNyZWF0ZWQtbGlzdHNcIik7XG5cbmZ1bmN0aW9uIGluaXQoKSB7XG5cdGNvbnN0IGRlZmF1bHRMaXN0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgW2RhdGEtbGlzdD1cIkRlZmF1bHRcIl1gKTtcblx0ZGVmYXVsdExpc3QuY2xhc3NMaXN0LmFkZChcInNlbGVjdGVkLWxpc3RcIik7XG5cblx0YWRkTmV3TGlzdEJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGUpID0+IHtcblx0XHRjcmVhdGVOZXdMaXN0KCk7XG5cdH0pO1xuXG5cdGRlbGV0ZUxpc3QoKTtcblx0c2VsZWN0TGlzdCgpO1xuXHRuZXdUYXNrRGlzcGxheSgpO1xuXHRhZGRUYXNrVG9EaXYoKTtcbn1cblxuZnVuY3Rpb24gY3JlYXRlTmV3TGlzdCgpIHtcblx0Y29uc3QgbmV3TGlzdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsaVwiKTtcblx0bmV3TGlzdC5kYXRhc2V0Lmxpc3QgPSBhZGROZXdMaXN0SW5wdXQudmFsdWU7XG5cdG5ld0xpc3QuaW5uZXJIVE1MID0gYCR7YWRkTmV3TGlzdElucHV0LnZhbHVlfSA8aSBjbGFzcz1cImZhcyBmYS10aW1lcy1jaXJjbGVcIiBkYXRhLWRlbGV0ZT1cIiR7YWRkTmV3TGlzdElucHV0LnZhbHVlfVwiPjwvaT5gO1xuXHRjcmVhdGVkTGlzdHMuYXBwZW5kQ2hpbGQobmV3TGlzdCk7XG59XG5cbmZ1bmN0aW9uIGRlbGV0ZUxpc3QoKSB7XG5cdGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoZSkgPT4ge1xuXHRcdGlmIChlLnRhcmdldC5kYXRhc2V0LmRlbGV0ZSA9PSBlLnRhcmdldC5wYXJlbnRFbGVtZW50LmlubmVyVGV4dCkge1xuXHRcdFx0Y29uc3QgZGVsZXRlQnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcihcblx0XHRcdFx0YFtkYXRhLWRlbGV0ZT1cIiR7ZS50YXJnZXQuZGF0YXNldC5kZWxldGV9XCJdYFxuXHRcdFx0KTtcblx0XHRcdGNvbnN0IGRlbGV0ZUxpc3QgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFxuXHRcdFx0XHRgW2RhdGEtbGlzdD1cIiR7ZS50YXJnZXQuZGF0YXNldC5kZWxldGV9XCJdYFxuXHRcdFx0KTtcblx0XHRcdGRlbGV0ZUJ1dHRvbi5yZW1vdmUoKTtcblx0XHRcdGRlbGV0ZUxpc3QucmVtb3ZlKCk7XG5cblx0XHRcdGlmIChkZWxldGVMaXN0LmNsYXNzTGlzdC5jb250YWlucyhcInNlbGVjdGVkLWxpc3RcIikpIHtcblx0XHRcdFx0c3dhcExpc3RPbkRlbGV0ZSgpO1xuXHRcdFx0fVxuXHRcdH1cblx0fSk7XG59XG5cbmZ1bmN0aW9uIHNlbGVjdExpc3QoKSB7XG5cdGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoZSkgPT4ge1xuXHRcdGlmIChlLnRhcmdldC5kYXRhc2V0Lmxpc3QgPT0gZS50YXJnZXQuaW5uZXJUZXh0KSB7XG5cdFx0XHRjb25zdCBsaXN0RWxlbWVudHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwibGlcIik7XG5cdFx0XHRsaXN0RWxlbWVudHMuZm9yRWFjaCgoZWxlbWVudCkgPT4ge1xuXHRcdFx0XHRlbGVtZW50LmNsYXNzTGlzdC5yZW1vdmUoXCJzZWxlY3RlZC1saXN0XCIpO1xuXHRcdFx0fSk7XG5cblx0XHRcdGNvbnN0IHNlbGVjdExpc3QgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFxuXHRcdFx0XHRgW2RhdGEtbGlzdD1cIiR7ZS50YXJnZXQuZGF0YXNldC5saXN0fVwiXWBcblx0XHRcdCk7XG5cdFx0XHRzZWxlY3RMaXN0LmNsYXNzTGlzdC5hZGQoXCJzZWxlY3RlZC1saXN0XCIpO1xuXHRcdH1cblx0fSk7XG59XG5cbmZ1bmN0aW9uIHN3YXBMaXN0T25EZWxldGUoKSB7XG5cdGNvbnN0IGFsbExpc3RzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgW2RhdGEtbGlzdD1cIkFsbCBMaXN0c1wiXWApO1xuXHRhbGxMaXN0cy5jbGFzc0xpc3QuYWRkKFwic2VsZWN0ZWQtbGlzdFwiKTtcbn1cblxuZnVuY3Rpb24gbmV3VGFza0Rpc3BsYXkoKSB7XG5cdGNvbnN0IHNpZGViYXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnNpZGViYXJcIik7XG5cdGNvbnN0IG1haW5EaXNwbGF5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5tYWluLWNvbnRlbnRcIik7XG5cdGNvbnN0IG5ld1Rhc2tEaXNwbGF5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5uZXctdGFzay1kaXZcIik7XG5cdGNvbnN0IGFkZFRhc2tCdXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLm5ldy10YXNrLWJ1dHRvblwiKTtcblx0Y29uc3QgY2xvc2VUYXNrID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5mYS10aW1lc1wiKTtcblx0YWRkVGFza0J1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGUpID0+IHtcblx0XHRzaWRlYmFyLmNsYXNzTGlzdC5hZGQoXCJvcGFjaXR5XCIpO1xuXHRcdG1haW5EaXNwbGF5LmNsYXNzTGlzdC5hZGQoXCJvcGFjaXR5XCIpO1xuXHRcdG5ld1Rhc2tEaXNwbGF5LmNsYXNzTGlzdC5yZW1vdmUoXCJoaWRlXCIpO1xuXHR9KTtcblx0Y2xvc2VUYXNrLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoZSkgPT4ge1xuXHRcdGNsb3NlTmV3VGFza0Rpc3BsYXkoKTtcblx0fSk7XG59XG5cbmZ1bmN0aW9uIGNsb3NlTmV3VGFza0Rpc3BsYXkoKSB7XG5cdGNvbnN0IHNpZGViYXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnNpZGViYXJcIik7XG5cdGNvbnN0IG1haW5EaXNwbGF5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5tYWluLWNvbnRlbnRcIik7XG5cdGNvbnN0IG5ld1Rhc2tEaXNwbGF5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5uZXctdGFzay1kaXZcIik7XG5cdGNvbnN0IGRvbmVCdXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmFkZC10YXNrLWJ1dHRvblwiKTtcblx0c2lkZWJhci5jbGFzc0xpc3QucmVtb3ZlKFwib3BhY2l0eVwiKTtcblx0bWFpbkRpc3BsYXkuY2xhc3NMaXN0LnJlbW92ZShcIm9wYWNpdHlcIik7XG5cdG5ld1Rhc2tEaXNwbGF5LmNsYXNzTGlzdC5hZGQoXCJoaWRlXCIpO1xufVxuXG5mdW5jdGlvbiBvcGVuTmV3VGFza0Rpc3BsYXkoKSB7XG5cdGNvbnN0IHNpZGViYXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnNpZGViYXJcIik7XG5cdGNvbnN0IG1haW5EaXNwbGF5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5tYWluLWNvbnRlbnRcIik7XG5cdGNvbnN0IG5ld1Rhc2tEaXNwbGF5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5uZXctdGFzay1kaXZcIik7XG5cdGNvbnN0IGRvbmVCdXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmFkZC10YXNrLWJ1dHRvblwiKTtcblxuXHRzaWRlYmFyLmNsYXNzTGlzdC5yZW1vdmUoXCJvcGFjaXR5XCIpO1xuXHRtYWluRGlzcGxheS5jbGFzc0xpc3QucmVtb3ZlKFwib3BhY2l0eVwiKTtcblx0bmV3VGFza0Rpc3BsYXkuY2xhc3NMaXN0LmFkZChcImhpZGVcIik7XG59XG5cbmZ1bmN0aW9uIGFkZFRhc2tUb0RpdigpIHtcblx0Y29uc3QgdGl0bGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI25ldy1ib29rLXRpdGxlXCIpO1xuXHRjb25zdCBkZXNjcmlwdGlvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjbmV3LWJvb2stZGVzY3JpcHRpb25cIik7XG5cdGNvbnN0IGR1ZURhdGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI25ldy1ib29rLWR1ZS1kYXRlXCIpO1xuXHRjb25zdCB1cmdlbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3VyZ2VudFwiKTtcblx0Y29uc3Qgbm9ybWFsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNub3JtYWxcIik7XG5cdGNvbnN0IGRvbmVCdXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmFkZC10YXNrLWJ1dHRvblwiKTtcblxuXHRkb25lQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoZSkgPT4ge1xuXHRcdGlmIChcblx0XHRcdHRpdGxlLnZhbHVlID09IFwiXCIgfHxcblx0XHRcdGRlc2NyaXB0aW9uLnZhbHVlID09IFwiXCIgfHxcblx0XHRcdGR1ZURhdGUudmFsdWUgPT0gXCJcIiB8fFxuXHRcdFx0KCF1cmdlbnQuY2hlY2tlZCAmJiAhbm9ybWFsLmNoZWNrZWQpXG5cdFx0KSB7XG5cdFx0XHRhbGVydChcImZpbGwgYWxsIGZvcm1zIGlkaW90XCIpO1xuXHRcdFx0cmV0dXJuO1xuXHRcdH1cblxuXHRcdGNvbnN0IHRhc2tEaXYgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnRhc2stZGl2XCIpO1xuXHRcdGNvbnN0IG5ld1Rhc2sgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuXHRcdG5ld1Rhc2suaW5uZXJIVE1MID0gYDxkaXYgY2xhc3M9XCJwcmlvcml0eVwiPjwvZGl2PlxuICAgICAgICA8aSBjbGFzcz1cImZhcyBmYS10aW1lcy1jaXJjbGVcIj48L2k+XG4gICAgICAgIDxoNT4ke3RpdGxlLnZhbHVlfTwvaDU+XG4gICAgICAgIDxwPlxuICAgICAgICAgICAgJHtkZXNjcmlwdGlvbi52YWx1ZX1cbiAgICAgICAgPC9wPlxuICAgICAgICA8aSBjbGFzcz1cImZhcyBmYS1jaGVjay1jaXJjbGVcIj48L2k+XG4gICAgICAgIDxzcGFuXG4gICAgICAgICAgICA+RHVlIGRhdGUgPGJyIC8+XG4gICAgICAgICAgICAke2R1ZURhdGUudmFsdWV9XG4gICAgICAgIDwvc3Bhbj5cbiAgICAgICAgPGkgY2xhc3M9XCJmYXMgZmEtZWRpdFwiPjwvaT5gO1xuXG5cdFx0Y29uc3QgcHJpb3JpdHlDb2xvciA9IG5ld1Rhc2sucXVlcnlTZWxlY3RvcihcIi5wcmlvcml0eVwiKTtcblxuXHRcdGlmICh1cmdlbnQuY2hlY2tlZCkgcHJpb3JpdHlDb2xvci5zdHlsZS5iYWNrZ3JvdW5kID0gXCJyZWRcIjtcblx0XHRpZiAobm9ybWFsLmNoZWNrZWQpIHByaW9yaXR5Q29sb3Iuc3R5bGUuYmFja2dyb3VuZCA9IFwiYmx1ZVwiO1xuXG5cdFx0bmV3VGFzay5jbGFzc0xpc3QuYWRkKFwidGFza1wiKTtcblx0XHR0YXNrRGl2LmFwcGVuZENoaWxkKG5ld1Rhc2spO1xuXG5cdFx0cmVzZXRGb3JtcygpO1xuXHRcdGNsb3NlTmV3VGFza0Rpc3BsYXkoKTtcblx0fSk7XG59XG5cbmZ1bmN0aW9uIHJlc2V0Rm9ybXMoKSB7XG5cdGNvbnN0IHRpdGxlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNuZXctYm9vay10aXRsZVwiKTtcblx0Y29uc3QgZGVzY3JpcHRpb24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI25ldy1ib29rLWRlc2NyaXB0aW9uXCIpO1xuXHRjb25zdCBkdWVEYXRlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNuZXctYm9vay1kdWUtZGF0ZVwiKTtcblx0Y29uc3QgdXJnZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiN1cmdlbnRcIik7XG5cdGNvbnN0IG5vcm1hbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjbm9ybWFsXCIpO1xuXG5cdHRpdGxlLnZhbHVlID0gXCJcIjtcblx0ZGVzY3JpcHRpb24udmFsdWUgPSBcIlwiO1xuXHRkdWVEYXRlLnZhbHVlID0gXCJcIjtcblx0dXJnZW50LmNoZWNrZWQgPSBmYWxzZTtcblx0bm9ybWFsLmNoZWNrZWQgPSBmYWxzZTtcbn1cbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiaW1wb3J0IHsgaW5pdCB9IGZyb20gXCIuL2RvbS5qc1wiO1xuXG5jb25zb2xlLmxvZyhcIlNldCB1cCBjb21wbGV0ZVwiKTtcbmluaXQoKTtcbiJdLCJzb3VyY2VSb290IjoiIn0=