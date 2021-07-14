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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvZG9tLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9pbmRleC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUFnQjs7QUFFaEI7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsRUFBRTs7QUFFRjtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLHdCQUF3QixzQkFBc0IsK0NBQStDLHNCQUFzQjtBQUNuSDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUJBQXFCLHdCQUF3QjtBQUM3QztBQUNBO0FBQ0EsbUJBQW1CLHdCQUF3QjtBQUMzQztBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxFQUFFO0FBQ0Y7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTs7QUFFSjtBQUNBLG1CQUFtQixzQkFBc0I7QUFDekM7QUFDQTtBQUNBO0FBQ0EsRUFBRTtBQUNGOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUU7QUFDRjs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUU7QUFDRjtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUU7QUFDRjs7Ozs7OztVQy9GQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3RCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHdDQUF3Qyx5Q0FBeUM7V0FDakY7V0FDQTtXQUNBLEU7Ozs7O1dDUEEsd0Y7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0Esc0RBQXNELGtCQUFrQjtXQUN4RTtXQUNBLCtDQUErQyxjQUFjO1dBQzdELEU7Ozs7Ozs7Ozs7OztBQ05nQzs7QUFFaEM7QUFDQSw2Q0FBSSIsImZpbGUiOiJtYWluLmpzIiwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IHsgaW5pdCB9O1xuXG5jb25zdCBhZGROZXdMaXN0SW5wdXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI25ldy1saXN0LWlucHV0XCIpO1xuY29uc3QgYWRkTmV3TGlzdEJ1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIubmV3LWxpc3QtYnV0dG9uXCIpO1xuY29uc3QgY3JlYXRlZExpc3RzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5jcmVhdGVkLWxpc3RzXCIpO1xuXG5mdW5jdGlvbiBpbml0KCkge1xuXHRjb25zdCBkZWZhdWx0TGlzdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYFtkYXRhLWxpc3Q9XCJEZWZhdWx0XCJdYCk7XG5cdGRlZmF1bHRMaXN0LmNsYXNzTGlzdC5hZGQoXCJzZWxlY3RlZC1saXN0XCIpO1xuXG5cdGFkZE5ld0xpc3RCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIChlKSA9PiB7XG5cdFx0Y3JlYXRlTmV3TGlzdCgpO1xuXHR9KTtcblxuXHRkZWxldGVMaXN0KCk7XG5cdHNlbGVjdExpc3QoKTtcblx0bmV3VGFza0Rpc3BsYXkoKTtcblx0Y2xvc2VUYXNrRGlzcGxheSgpO1xufVxuXG5mdW5jdGlvbiBjcmVhdGVOZXdMaXN0KCkge1xuXHRjb25zdCBuZXdMaXN0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxpXCIpO1xuXHRuZXdMaXN0LmRhdGFzZXQubGlzdCA9IGFkZE5ld0xpc3RJbnB1dC52YWx1ZTtcblx0bmV3TGlzdC5pbm5lckhUTUwgPSBgJHthZGROZXdMaXN0SW5wdXQudmFsdWV9IDxpIGNsYXNzPVwiZmFzIGZhLXRpbWVzLWNpcmNsZVwiIGRhdGEtZGVsZXRlPVwiJHthZGROZXdMaXN0SW5wdXQudmFsdWV9XCI+PC9pPmA7XG5cdGNyZWF0ZWRMaXN0cy5hcHBlbmRDaGlsZChuZXdMaXN0KTtcbn1cblxuZnVuY3Rpb24gZGVsZXRlTGlzdCgpIHtcblx0ZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIChlKSA9PiB7XG5cdFx0aWYgKGUudGFyZ2V0LmRhdGFzZXQuZGVsZXRlID09IGUudGFyZ2V0LnBhcmVudEVsZW1lbnQuaW5uZXJUZXh0KSB7XG5cdFx0XHRjb25zdCBkZWxldGVCdXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFxuXHRcdFx0XHRgW2RhdGEtZGVsZXRlPVwiJHtlLnRhcmdldC5kYXRhc2V0LmRlbGV0ZX1cIl1gXG5cdFx0XHQpO1xuXHRcdFx0Y29uc3QgZGVsZXRlTGlzdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXG5cdFx0XHRcdGBbZGF0YS1saXN0PVwiJHtlLnRhcmdldC5kYXRhc2V0LmRlbGV0ZX1cIl1gXG5cdFx0XHQpO1xuXHRcdFx0ZGVsZXRlQnV0dG9uLnJlbW92ZSgpO1xuXHRcdFx0ZGVsZXRlTGlzdC5yZW1vdmUoKTtcblxuXHRcdFx0aWYgKGRlbGV0ZUxpc3QuY2xhc3NMaXN0LmNvbnRhaW5zKFwic2VsZWN0ZWQtbGlzdFwiKSkge1xuXHRcdFx0XHRzd2FwTGlzdE9uRGVsZXRlKCk7XG5cdFx0XHR9XG5cdFx0fVxuXHR9KTtcbn1cblxuZnVuY3Rpb24gc2VsZWN0TGlzdCgpIHtcblx0ZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIChlKSA9PiB7XG5cdFx0aWYgKGUudGFyZ2V0LmRhdGFzZXQubGlzdCA9PSBlLnRhcmdldC5pbm5lclRleHQpIHtcblx0XHRcdGNvbnN0IGxpc3RFbGVtZW50cyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCJsaVwiKTtcblx0XHRcdGxpc3RFbGVtZW50cy5mb3JFYWNoKChlbGVtZW50KSA9PiB7XG5cdFx0XHRcdGVsZW1lbnQuY2xhc3NMaXN0LnJlbW92ZShcInNlbGVjdGVkLWxpc3RcIik7XG5cdFx0XHR9KTtcblxuXHRcdFx0Y29uc3Qgc2VsZWN0TGlzdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXG5cdFx0XHRcdGBbZGF0YS1saXN0PVwiJHtlLnRhcmdldC5kYXRhc2V0Lmxpc3R9XCJdYFxuXHRcdFx0KTtcblx0XHRcdHNlbGVjdExpc3QuY2xhc3NMaXN0LmFkZChcInNlbGVjdGVkLWxpc3RcIik7XG5cdFx0fVxuXHR9KTtcbn1cblxuZnVuY3Rpb24gc3dhcExpc3RPbkRlbGV0ZSgpIHtcblx0Y29uc3QgYWxsTGlzdHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGBbZGF0YS1saXN0PVwiQWxsIExpc3RzXCJdYCk7XG5cdGFsbExpc3RzLmNsYXNzTGlzdC5hZGQoXCJzZWxlY3RlZC1saXN0XCIpO1xufVxuXG5mdW5jdGlvbiBuZXdUYXNrRGlzcGxheSgpIHtcblx0Y29uc3Qgc2lkZWJhciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuc2lkZWJhclwiKTtcblx0Y29uc3QgbWFpbkRpc3BsYXkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLm1haW4tY29udGVudFwiKTtcblx0Y29uc3QgbmV3VGFza0Rpc3BsYXkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLm5ldy10YXNrLWRpdlwiKTtcblx0Y29uc3QgYWRkVGFza0J1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIubmV3LXRhc2stYnV0dG9uXCIpO1xuXHRhZGRUYXNrQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoZSkgPT4ge1xuXHRcdHNpZGViYXIuY2xhc3NMaXN0LmFkZChcIm9wYWNpdHlcIik7XG5cdFx0bWFpbkRpc3BsYXkuY2xhc3NMaXN0LmFkZChcIm9wYWNpdHlcIik7XG5cdFx0bmV3VGFza0Rpc3BsYXkuY2xhc3NMaXN0LnJlbW92ZShcImhpZGVcIik7XG5cdH0pO1xufVxuXG5mdW5jdGlvbiBjbG9zZVRhc2tEaXNwbGF5KCkge1xuXHRjb25zdCBzaWRlYmFyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5zaWRlYmFyXCIpO1xuXHRjb25zdCBtYWluRGlzcGxheSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIubWFpbi1jb250ZW50XCIpO1xuXHRjb25zdCBuZXdUYXNrRGlzcGxheSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIubmV3LXRhc2stZGl2XCIpO1xuXHRjb25zdCBjbG9zZVRhc2sgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmZhLXRpbWVzXCIpO1xuXHRjb25zdCBkb25lQnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5hZGQtdGFzay1idXR0b25cIik7XG5cdGNsb3NlVGFzay5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGUpID0+IHtcblx0XHRzaWRlYmFyLmNsYXNzTGlzdC5yZW1vdmUoXCJvcGFjaXR5XCIpO1xuXHRcdG1haW5EaXNwbGF5LmNsYXNzTGlzdC5yZW1vdmUoXCJvcGFjaXR5XCIpO1xuXHRcdG5ld1Rhc2tEaXNwbGF5LmNsYXNzTGlzdC5hZGQoXCJoaWRlXCIpO1xuXHR9KTtcblx0ZG9uZUJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGUpID0+IHtcblx0XHRzaWRlYmFyLmNsYXNzTGlzdC5yZW1vdmUoXCJvcGFjaXR5XCIpO1xuXHRcdG1haW5EaXNwbGF5LmNsYXNzTGlzdC5yZW1vdmUoXCJvcGFjaXR5XCIpO1xuXHRcdG5ld1Rhc2tEaXNwbGF5LmNsYXNzTGlzdC5hZGQoXCJoaWRlXCIpO1xuXHR9KTtcbn1cbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiaW1wb3J0IHsgaW5pdCB9IGZyb20gXCIuL2RvbS5qc1wiO1xuXG5jb25zb2xlLmxvZyhcIlNldCB1cCBjb21wbGV0ZVwiKTtcbmluaXQoKTtcbiJdLCJzb3VyY2VSb290IjoiIn0=