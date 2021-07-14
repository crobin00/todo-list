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
	closeTaskDisplay();
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

function addTaskToDiv() {
	const title = document.querySelector("#new-book-title");
	const description = document.querySelector("#new-book-description");
	const dueDate = document.querySelector("#new-book-due-date");
	const urgent = document.querySelector("#urgent");
	const normal = document.querySelector("#normal");
	const doneButton = document.querySelector(".add-task-button");

	doneButton.addEventListener("click", (e) => {
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

		if (urgent.checked) console.log("urgent");
		if (normal.checked) console.log("normal");

		newTask.classList.add("task");
		taskDiv.appendChild(newTask);
	});
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvZG9tLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9pbmRleC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUFnQjs7QUFFaEI7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsRUFBRTs7QUFFRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0Esd0JBQXdCLHNCQUFzQiwrQ0FBK0Msc0JBQXNCO0FBQ25IO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxQkFBcUIsd0JBQXdCO0FBQzdDO0FBQ0E7QUFDQSxtQkFBbUIsd0JBQXdCO0FBQzNDO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUU7QUFDRjs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJOztBQUVKO0FBQ0EsbUJBQW1CLHNCQUFzQjtBQUN6QztBQUNBO0FBQ0E7QUFDQSxFQUFFO0FBQ0Y7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRUFBRTtBQUNGOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRUFBRTtBQUNGO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRUFBRTtBQUNGOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxjQUFjLFlBQVk7QUFDMUI7QUFDQSxjQUFjO0FBQ2Q7QUFDQTtBQUNBO0FBQ0E7QUFDQSxjQUFjO0FBQ2Q7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxFQUFFO0FBQ0Y7Ozs7Ozs7VUNoSUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0N0QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx3Q0FBd0MseUNBQXlDO1dBQ2pGO1dBQ0E7V0FDQSxFOzs7OztXQ1BBLHdGOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHNEQUFzRCxrQkFBa0I7V0FDeEU7V0FDQSwrQ0FBK0MsY0FBYztXQUM3RCxFOzs7Ozs7Ozs7Ozs7QUNOZ0M7O0FBRWhDO0FBQ0EsNkNBQUkiLCJmaWxlIjoibWFpbi5qcyIsInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCB7IGluaXQgfTtcblxuY29uc3QgYWRkTmV3TGlzdElucHV0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNuZXctbGlzdC1pbnB1dFwiKTtcbmNvbnN0IGFkZE5ld0xpc3RCdXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLm5ldy1saXN0LWJ1dHRvblwiKTtcbmNvbnN0IGNyZWF0ZWRMaXN0cyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuY3JlYXRlZC1saXN0c1wiKTtcblxuZnVuY3Rpb24gaW5pdCgpIHtcblx0Y29uc3QgZGVmYXVsdExpc3QgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGBbZGF0YS1saXN0PVwiRGVmYXVsdFwiXWApO1xuXHRkZWZhdWx0TGlzdC5jbGFzc0xpc3QuYWRkKFwic2VsZWN0ZWQtbGlzdFwiKTtcblxuXHRhZGROZXdMaXN0QnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoZSkgPT4ge1xuXHRcdGNyZWF0ZU5ld0xpc3QoKTtcblx0fSk7XG5cblx0ZGVsZXRlTGlzdCgpO1xuXHRzZWxlY3RMaXN0KCk7XG5cdG5ld1Rhc2tEaXNwbGF5KCk7XG5cdGNsb3NlVGFza0Rpc3BsYXkoKTtcblx0YWRkVGFza1RvRGl2KCk7XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZU5ld0xpc3QoKSB7XG5cdGNvbnN0IG5ld0xpc3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGlcIik7XG5cdG5ld0xpc3QuZGF0YXNldC5saXN0ID0gYWRkTmV3TGlzdElucHV0LnZhbHVlO1xuXHRuZXdMaXN0LmlubmVySFRNTCA9IGAke2FkZE5ld0xpc3RJbnB1dC52YWx1ZX0gPGkgY2xhc3M9XCJmYXMgZmEtdGltZXMtY2lyY2xlXCIgZGF0YS1kZWxldGU9XCIke2FkZE5ld0xpc3RJbnB1dC52YWx1ZX1cIj48L2k+YDtcblx0Y3JlYXRlZExpc3RzLmFwcGVuZENoaWxkKG5ld0xpc3QpO1xufVxuXG5mdW5jdGlvbiBkZWxldGVMaXN0KCkge1xuXHRkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGUpID0+IHtcblx0XHRpZiAoZS50YXJnZXQuZGF0YXNldC5kZWxldGUgPT0gZS50YXJnZXQucGFyZW50RWxlbWVudC5pbm5lclRleHQpIHtcblx0XHRcdGNvbnN0IGRlbGV0ZUJ1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXG5cdFx0XHRcdGBbZGF0YS1kZWxldGU9XCIke2UudGFyZ2V0LmRhdGFzZXQuZGVsZXRlfVwiXWBcblx0XHRcdCk7XG5cdFx0XHRjb25zdCBkZWxldGVMaXN0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcihcblx0XHRcdFx0YFtkYXRhLWxpc3Q9XCIke2UudGFyZ2V0LmRhdGFzZXQuZGVsZXRlfVwiXWBcblx0XHRcdCk7XG5cdFx0XHRkZWxldGVCdXR0b24ucmVtb3ZlKCk7XG5cdFx0XHRkZWxldGVMaXN0LnJlbW92ZSgpO1xuXG5cdFx0XHRpZiAoZGVsZXRlTGlzdC5jbGFzc0xpc3QuY29udGFpbnMoXCJzZWxlY3RlZC1saXN0XCIpKSB7XG5cdFx0XHRcdHN3YXBMaXN0T25EZWxldGUoKTtcblx0XHRcdH1cblx0XHR9XG5cdH0pO1xufVxuXG5mdW5jdGlvbiBzZWxlY3RMaXN0KCkge1xuXHRkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGUpID0+IHtcblx0XHRpZiAoZS50YXJnZXQuZGF0YXNldC5saXN0ID09IGUudGFyZ2V0LmlubmVyVGV4dCkge1xuXHRcdFx0Y29uc3QgbGlzdEVsZW1lbnRzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcImxpXCIpO1xuXHRcdFx0bGlzdEVsZW1lbnRzLmZvckVhY2goKGVsZW1lbnQpID0+IHtcblx0XHRcdFx0ZWxlbWVudC5jbGFzc0xpc3QucmVtb3ZlKFwic2VsZWN0ZWQtbGlzdFwiKTtcblx0XHRcdH0pO1xuXG5cdFx0XHRjb25zdCBzZWxlY3RMaXN0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcihcblx0XHRcdFx0YFtkYXRhLWxpc3Q9XCIke2UudGFyZ2V0LmRhdGFzZXQubGlzdH1cIl1gXG5cdFx0XHQpO1xuXHRcdFx0c2VsZWN0TGlzdC5jbGFzc0xpc3QuYWRkKFwic2VsZWN0ZWQtbGlzdFwiKTtcblx0XHR9XG5cdH0pO1xufVxuXG5mdW5jdGlvbiBzd2FwTGlzdE9uRGVsZXRlKCkge1xuXHRjb25zdCBhbGxMaXN0cyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYFtkYXRhLWxpc3Q9XCJBbGwgTGlzdHNcIl1gKTtcblx0YWxsTGlzdHMuY2xhc3NMaXN0LmFkZChcInNlbGVjdGVkLWxpc3RcIik7XG59XG5cbmZ1bmN0aW9uIG5ld1Rhc2tEaXNwbGF5KCkge1xuXHRjb25zdCBzaWRlYmFyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5zaWRlYmFyXCIpO1xuXHRjb25zdCBtYWluRGlzcGxheSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIubWFpbi1jb250ZW50XCIpO1xuXHRjb25zdCBuZXdUYXNrRGlzcGxheSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIubmV3LXRhc2stZGl2XCIpO1xuXHRjb25zdCBhZGRUYXNrQnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5uZXctdGFzay1idXR0b25cIik7XG5cdGFkZFRhc2tCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIChlKSA9PiB7XG5cdFx0c2lkZWJhci5jbGFzc0xpc3QuYWRkKFwib3BhY2l0eVwiKTtcblx0XHRtYWluRGlzcGxheS5jbGFzc0xpc3QuYWRkKFwib3BhY2l0eVwiKTtcblx0XHRuZXdUYXNrRGlzcGxheS5jbGFzc0xpc3QucmVtb3ZlKFwiaGlkZVwiKTtcblx0fSk7XG59XG5cbmZ1bmN0aW9uIGNsb3NlVGFza0Rpc3BsYXkoKSB7XG5cdGNvbnN0IHNpZGViYXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnNpZGViYXJcIik7XG5cdGNvbnN0IG1haW5EaXNwbGF5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5tYWluLWNvbnRlbnRcIik7XG5cdGNvbnN0IG5ld1Rhc2tEaXNwbGF5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5uZXctdGFzay1kaXZcIik7XG5cdGNvbnN0IGNsb3NlVGFzayA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuZmEtdGltZXNcIik7XG5cdGNvbnN0IGRvbmVCdXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmFkZC10YXNrLWJ1dHRvblwiKTtcblx0Y2xvc2VUYXNrLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoZSkgPT4ge1xuXHRcdHNpZGViYXIuY2xhc3NMaXN0LnJlbW92ZShcIm9wYWNpdHlcIik7XG5cdFx0bWFpbkRpc3BsYXkuY2xhc3NMaXN0LnJlbW92ZShcIm9wYWNpdHlcIik7XG5cdFx0bmV3VGFza0Rpc3BsYXkuY2xhc3NMaXN0LmFkZChcImhpZGVcIik7XG5cdH0pO1xuXHRkb25lQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoZSkgPT4ge1xuXHRcdHNpZGViYXIuY2xhc3NMaXN0LnJlbW92ZShcIm9wYWNpdHlcIik7XG5cdFx0bWFpbkRpc3BsYXkuY2xhc3NMaXN0LnJlbW92ZShcIm9wYWNpdHlcIik7XG5cdFx0bmV3VGFza0Rpc3BsYXkuY2xhc3NMaXN0LmFkZChcImhpZGVcIik7XG5cdH0pO1xufVxuXG5mdW5jdGlvbiBhZGRUYXNrVG9EaXYoKSB7XG5cdGNvbnN0IHRpdGxlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNuZXctYm9vay10aXRsZVwiKTtcblx0Y29uc3QgZGVzY3JpcHRpb24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI25ldy1ib29rLWRlc2NyaXB0aW9uXCIpO1xuXHRjb25zdCBkdWVEYXRlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNuZXctYm9vay1kdWUtZGF0ZVwiKTtcblx0Y29uc3QgdXJnZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiN1cmdlbnRcIik7XG5cdGNvbnN0IG5vcm1hbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjbm9ybWFsXCIpO1xuXHRjb25zdCBkb25lQnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5hZGQtdGFzay1idXR0b25cIik7XG5cblx0ZG9uZUJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGUpID0+IHtcblx0XHRjb25zdCB0YXNrRGl2ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi50YXNrLWRpdlwiKTtcblx0XHRjb25zdCBuZXdUYXNrID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcblx0XHRuZXdUYXNrLmlubmVySFRNTCA9IGA8ZGl2IGNsYXNzPVwicHJpb3JpdHlcIj48L2Rpdj5cbiAgICAgICAgPGkgY2xhc3M9XCJmYXMgZmEtdGltZXMtY2lyY2xlXCI+PC9pPlxuICAgICAgICA8aDU+JHt0aXRsZS52YWx1ZX08L2g1PlxuICAgICAgICA8cD5cbiAgICAgICAgICAgICR7ZGVzY3JpcHRpb24udmFsdWV9XG4gICAgICAgIDwvcD5cbiAgICAgICAgPGkgY2xhc3M9XCJmYXMgZmEtY2hlY2stY2lyY2xlXCI+PC9pPlxuICAgICAgICA8c3BhblxuICAgICAgICAgICAgPkR1ZSBkYXRlIDxiciAvPlxuICAgICAgICAgICAgJHtkdWVEYXRlLnZhbHVlfVxuICAgICAgICA8L3NwYW4+XG4gICAgICAgIDxpIGNsYXNzPVwiZmFzIGZhLWVkaXRcIj48L2k+YDtcblxuXHRcdGlmICh1cmdlbnQuY2hlY2tlZCkgY29uc29sZS5sb2coXCJ1cmdlbnRcIik7XG5cdFx0aWYgKG5vcm1hbC5jaGVja2VkKSBjb25zb2xlLmxvZyhcIm5vcm1hbFwiKTtcblxuXHRcdG5ld1Rhc2suY2xhc3NMaXN0LmFkZChcInRhc2tcIik7XG5cdFx0dGFza0Rpdi5hcHBlbmRDaGlsZChuZXdUYXNrKTtcblx0fSk7XG59XG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsImltcG9ydCB7IGluaXQgfSBmcm9tIFwiLi9kb20uanNcIjtcblxuY29uc29sZS5sb2coXCJTZXQgdXAgY29tcGxldGVcIik7XG5pbml0KCk7XG4iXSwic291cmNlUm9vdCI6IiJ9