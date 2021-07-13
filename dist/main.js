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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvZG9tLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9pbmRleC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUFnQjs7QUFFaEI7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEVBQUU7O0FBRUY7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSx3QkFBd0Isc0JBQXNCLCtDQUErQyxzQkFBc0I7QUFDbkg7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFCQUFxQix3QkFBd0I7QUFDN0M7QUFDQTtBQUNBLG1CQUFtQix3QkFBd0I7QUFDM0M7QUFDQTtBQUNBO0FBQ0E7QUFDQSxFQUFFO0FBQ0Y7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTs7QUFFSjtBQUNBLG1CQUFtQixzQkFBc0I7QUFDekM7QUFDQTtBQUNBO0FBQ0EsRUFBRTtBQUNGOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUU7QUFDRjs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUU7QUFDRjtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUU7QUFDRjs7Ozs7OztVQ25GQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3RCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHdDQUF3Qyx5Q0FBeUM7V0FDakY7V0FDQTtXQUNBLEU7Ozs7O1dDUEEsd0Y7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0Esc0RBQXNELGtCQUFrQjtXQUN4RTtXQUNBLCtDQUErQyxjQUFjO1dBQzdELEU7Ozs7Ozs7Ozs7OztBQ05nQzs7QUFFaEM7QUFDQSw2Q0FBSSIsImZpbGUiOiJtYWluLmpzIiwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IHsgaW5pdCB9O1xuXG5jb25zdCBhZGROZXdMaXN0SW5wdXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI25ldy1saXN0LWlucHV0XCIpO1xuY29uc3QgYWRkTmV3TGlzdEJ1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIubmV3LWxpc3QtYnV0dG9uXCIpO1xuY29uc3QgY3JlYXRlZExpc3RzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5jcmVhdGVkLWxpc3RzXCIpO1xuXG5mdW5jdGlvbiBpbml0KCkge1xuXHRhZGROZXdMaXN0QnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoZSkgPT4ge1xuXHRcdGNyZWF0ZU5ld0xpc3QoKTtcblx0fSk7XG5cblx0ZGVsZXRlTGlzdCgpO1xuXHRzZWxlY3RMaXN0KCk7XG5cdG5ld1Rhc2tEaXNwbGF5KCk7XG5cdGNsb3NlVGFza0Rpc3BsYXkoKTtcbn1cblxuZnVuY3Rpb24gY3JlYXRlTmV3TGlzdCgpIHtcblx0Y29uc3QgbmV3TGlzdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsaVwiKTtcblx0bmV3TGlzdC5kYXRhc2V0Lmxpc3QgPSBhZGROZXdMaXN0SW5wdXQudmFsdWU7XG5cdG5ld0xpc3QuaW5uZXJIVE1MID0gYCR7YWRkTmV3TGlzdElucHV0LnZhbHVlfSA8aSBjbGFzcz1cImZhcyBmYS10aW1lcy1jaXJjbGVcIiBkYXRhLWRlbGV0ZT1cIiR7YWRkTmV3TGlzdElucHV0LnZhbHVlfVwiPjwvaT5gO1xuXHRjcmVhdGVkTGlzdHMuYXBwZW5kQ2hpbGQobmV3TGlzdCk7XG59XG5cbmZ1bmN0aW9uIGRlbGV0ZUxpc3QoKSB7XG5cdGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoZSkgPT4ge1xuXHRcdGlmIChlLnRhcmdldC5kYXRhc2V0LmRlbGV0ZSA9PSBlLnRhcmdldC5wYXJlbnRFbGVtZW50LmlubmVyVGV4dCkge1xuXHRcdFx0Y29uc3QgZGVsZXRlQnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcihcblx0XHRcdFx0YFtkYXRhLWRlbGV0ZT1cIiR7ZS50YXJnZXQuZGF0YXNldC5kZWxldGV9XCJdYFxuXHRcdFx0KTtcblx0XHRcdGNvbnN0IGRlbGV0ZUxpc3QgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFxuXHRcdFx0XHRgW2RhdGEtbGlzdD1cIiR7ZS50YXJnZXQuZGF0YXNldC5kZWxldGV9XCJdYFxuXHRcdFx0KTtcblx0XHRcdGRlbGV0ZUJ1dHRvbi5yZW1vdmUoKTtcblx0XHRcdGRlbGV0ZUxpc3QucmVtb3ZlKCk7XG5cdFx0fVxuXHR9KTtcbn1cblxuZnVuY3Rpb24gc2VsZWN0TGlzdCgpIHtcblx0ZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIChlKSA9PiB7XG5cdFx0aWYgKGUudGFyZ2V0LmRhdGFzZXQubGlzdCA9PSBlLnRhcmdldC5pbm5lclRleHQpIHtcblx0XHRcdGNvbnN0IGxpc3RFbGVtZW50cyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCJsaVwiKTtcblx0XHRcdGxpc3RFbGVtZW50cy5mb3JFYWNoKChlbGVtZW50KSA9PiB7XG5cdFx0XHRcdGVsZW1lbnQuY2xhc3NMaXN0LnJlbW92ZShcInNlbGVjdGVkLWxpc3RcIik7XG5cdFx0XHR9KTtcblxuXHRcdFx0Y29uc3Qgc2VsZWN0TGlzdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXG5cdFx0XHRcdGBbZGF0YS1saXN0PVwiJHtlLnRhcmdldC5kYXRhc2V0Lmxpc3R9XCJdYFxuXHRcdFx0KTtcblx0XHRcdHNlbGVjdExpc3QuY2xhc3NMaXN0LmFkZChcInNlbGVjdGVkLWxpc3RcIik7XG5cdFx0fVxuXHR9KTtcbn1cblxuZnVuY3Rpb24gbmV3VGFza0Rpc3BsYXkoKSB7XG5cdGNvbnN0IHNpZGViYXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnNpZGViYXJcIik7XG5cdGNvbnN0IG1haW5EaXNwbGF5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5tYWluLWNvbnRlbnRcIik7XG5cdGNvbnN0IG5ld1Rhc2tEaXNwbGF5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5uZXctdGFzay1kaXZcIik7XG5cdGNvbnN0IGFkZFRhc2tCdXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLm5ldy10YXNrLWJ1dHRvblwiKTtcblx0YWRkVGFza0J1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGUpID0+IHtcblx0XHRzaWRlYmFyLmNsYXNzTGlzdC5hZGQoXCJvcGFjaXR5XCIpO1xuXHRcdG1haW5EaXNwbGF5LmNsYXNzTGlzdC5hZGQoXCJvcGFjaXR5XCIpO1xuXHRcdG5ld1Rhc2tEaXNwbGF5LmNsYXNzTGlzdC5yZW1vdmUoXCJoaWRlXCIpO1xuXHR9KTtcbn1cblxuZnVuY3Rpb24gY2xvc2VUYXNrRGlzcGxheSgpIHtcblx0Y29uc3Qgc2lkZWJhciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuc2lkZWJhclwiKTtcblx0Y29uc3QgbWFpbkRpc3BsYXkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLm1haW4tY29udGVudFwiKTtcblx0Y29uc3QgbmV3VGFza0Rpc3BsYXkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLm5ldy10YXNrLWRpdlwiKTtcblx0Y29uc3QgY2xvc2VUYXNrID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5mYS10aW1lc1wiKTtcblx0Y29uc3QgZG9uZUJ1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuYWRkLXRhc2stYnV0dG9uXCIpO1xuXHRjbG9zZVRhc2suYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIChlKSA9PiB7XG5cdFx0c2lkZWJhci5jbGFzc0xpc3QucmVtb3ZlKFwib3BhY2l0eVwiKTtcblx0XHRtYWluRGlzcGxheS5jbGFzc0xpc3QucmVtb3ZlKFwib3BhY2l0eVwiKTtcblx0XHRuZXdUYXNrRGlzcGxheS5jbGFzc0xpc3QuYWRkKFwiaGlkZVwiKTtcblx0fSk7XG5cdGRvbmVCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIChlKSA9PiB7XG5cdFx0c2lkZWJhci5jbGFzc0xpc3QucmVtb3ZlKFwib3BhY2l0eVwiKTtcblx0XHRtYWluRGlzcGxheS5jbGFzc0xpc3QucmVtb3ZlKFwib3BhY2l0eVwiKTtcblx0XHRuZXdUYXNrRGlzcGxheS5jbGFzc0xpc3QuYWRkKFwiaGlkZVwiKTtcblx0fSk7XG59XG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsImltcG9ydCB7IGluaXQgfSBmcm9tIFwiLi9kb20uanNcIjtcblxuY29uc29sZS5sb2coXCJTZXQgdXAgY29tcGxldGVcIik7XG5pbml0KCk7XG4iXSwic291cmNlUm9vdCI6IiJ9