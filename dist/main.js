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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvZG9tLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9pbmRleC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUFnQjs7QUFFaEI7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEVBQUU7O0FBRUY7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLHdCQUF3QixzQkFBc0IsK0NBQStDLHNCQUFzQjtBQUNuSDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUJBQXFCLHdCQUF3QjtBQUM3QztBQUNBO0FBQ0EsbUJBQW1CLHdCQUF3QjtBQUMzQztBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUU7QUFDRjs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTs7QUFFSjtBQUNBLG1CQUFtQixzQkFBc0I7QUFDekM7QUFDQTtBQUNBO0FBQ0EsRUFBRTtBQUNGOzs7Ozs7O1VDckRBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7O1dDdEJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0Esd0NBQXdDLHlDQUF5QztXQUNqRjtXQUNBO1dBQ0EsRTs7Ozs7V0NQQSx3Rjs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSxzREFBc0Qsa0JBQWtCO1dBQ3hFO1dBQ0EsK0NBQStDLGNBQWM7V0FDN0QsRTs7Ozs7Ozs7Ozs7O0FDTmdDOztBQUVoQztBQUNBLDZDQUFJIiwiZmlsZSI6Im1haW4uanMiLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgeyBpbml0IH07XG5cbmNvbnN0IGFkZE5ld0xpc3RJbnB1dCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjbmV3LWxpc3QtaW5wdXRcIik7XG5jb25zdCBhZGROZXdMaXN0QnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5uZXctbGlzdC1idXR0b25cIik7XG5jb25zdCBjcmVhdGVkTGlzdHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmNyZWF0ZWQtbGlzdHNcIik7XG5cbmZ1bmN0aW9uIGluaXQoKSB7XG5cdGFkZE5ld0xpc3RCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIChlKSA9PiB7XG5cdFx0Y3JlYXRlTmV3TGlzdCgpO1xuXHR9KTtcblxuXHRkZWxldGVMaXN0KCk7XG5cdHNlbGVjdExpc3QoKTtcbn1cblxuZnVuY3Rpb24gY3JlYXRlTmV3TGlzdCgpIHtcblx0Y29uc3QgbmV3TGlzdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsaVwiKTtcblx0bmV3TGlzdC5kYXRhc2V0Lmxpc3QgPSBhZGROZXdMaXN0SW5wdXQudmFsdWU7XG5cdG5ld0xpc3QuaW5uZXJIVE1MID0gYCR7YWRkTmV3TGlzdElucHV0LnZhbHVlfSA8aSBjbGFzcz1cImZhcyBmYS10aW1lcy1jaXJjbGVcIiBkYXRhLWRlbGV0ZT1cIiR7YWRkTmV3TGlzdElucHV0LnZhbHVlfVwiPjwvaT5gO1xuXHRjcmVhdGVkTGlzdHMuYXBwZW5kQ2hpbGQobmV3TGlzdCk7XG59XG5cbmZ1bmN0aW9uIGRlbGV0ZUxpc3QoKSB7XG5cdGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoZSkgPT4ge1xuXHRcdGlmIChlLnRhcmdldC5kYXRhc2V0LmRlbGV0ZSA9PSBlLnRhcmdldC5wYXJlbnRFbGVtZW50LmlubmVyVGV4dCkge1xuXHRcdFx0Y29uc3QgZGVsZXRlQnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcihcblx0XHRcdFx0YFtkYXRhLWRlbGV0ZT1cIiR7ZS50YXJnZXQuZGF0YXNldC5kZWxldGV9XCJdYFxuXHRcdFx0KTtcblx0XHRcdGNvbnN0IGRlbGV0ZUxpc3QgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFxuXHRcdFx0XHRgW2RhdGEtbGlzdD1cIiR7ZS50YXJnZXQuZGF0YXNldC5kZWxldGV9XCJdYFxuXHRcdFx0KTtcblx0XHRcdGRlbGV0ZUJ1dHRvbi5yZW1vdmUoKTtcblx0XHRcdGRlbGV0ZUxpc3QucmVtb3ZlKCk7XG5cdFx0fVxuXHR9KTtcbn1cblxuZnVuY3Rpb24gc2VsZWN0TGlzdCgpIHtcblx0ZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIChlKSA9PiB7XG5cdFx0Y29uc29sZS5sb2coZS50YXJnZXQuZGF0YXNldC5saXN0KTtcblx0XHRjb25zb2xlLmxvZyhlLnRhcmdldC5pbm5lclRleHQpO1xuXHRcdGlmIChlLnRhcmdldC5kYXRhc2V0Lmxpc3QgPT0gZS50YXJnZXQuaW5uZXJUZXh0KSB7XG5cdFx0XHRjb25zdCBsaXN0RWxlbWVudHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwibGlcIik7XG5cdFx0XHRsaXN0RWxlbWVudHMuZm9yRWFjaCgoZWxlbWVudCkgPT4ge1xuXHRcdFx0XHRlbGVtZW50LmNsYXNzTGlzdC5yZW1vdmUoXCJzZWxlY3RlZC1saXN0XCIpO1xuXHRcdFx0fSk7XG5cblx0XHRcdGNvbnN0IHNlbGVjdExpc3QgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFxuXHRcdFx0XHRgW2RhdGEtbGlzdD1cIiR7ZS50YXJnZXQuZGF0YXNldC5saXN0fVwiXWBcblx0XHRcdCk7XG5cdFx0XHRzZWxlY3RMaXN0LmNsYXNzTGlzdC5hZGQoXCJzZWxlY3RlZC1saXN0XCIpO1xuXHRcdH1cblx0fSk7XG59XG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsImltcG9ydCB7IGluaXQgfSBmcm9tIFwiLi9kb20uanNcIjtcblxuY29uc29sZS5sb2coXCJTZXQgdXAgY29tcGxldGVcIik7XG5pbml0KCk7XG4iXSwic291cmNlUm9vdCI6IiJ9