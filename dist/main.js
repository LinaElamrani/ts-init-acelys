/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/html-elements/table-html.ts":
/*!*****************************************!*\
  !*** ./src/html-elements/table-html.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TableHTML": () => (/* binding */ TableHTML)
/* harmony export */ });
Object(function webpackMissingModule() { var e = new Error("Cannot find module './../patterns/composite/composite'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
/**
 * list-html.ts
 *  Build ul or ol list with some elements
 * @version 1.0.0
 */

class TableHTML {
    constructor() {
        this.listContent = []; // string[] <=> Array<string>
        this.table = new Object(function webpackMissingModule() { var e = new Error("Cannot find module './../patterns/composite/composite'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())('table');
        this.thead = new Object(function webpackMissingModule() { var e = new Error("Cannot find module './../patterns/composite/composite'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())('thead');
        this.tbody = new Object(function webpackMissingModule() { var e = new Error("Cannot find module './../patterns/composite/composite'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())('tbody');
        this.tfoot = new Object(function webpackMissingModule() { var e = new Error("Cannot find module './../patterns/composite/composite'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())('tfoot');
        this.cellDefs = new Set();
    }
    addContent(content) {
        this.listContent = content;
        //this.cellDefs.add(content.cellDef)
        return this;
    }
    setCellDefs(cellDefs) {
        cellDefs.forEach((cd) => {
            this.cellDefs.add(cd);
        });
    }
    compose() {
        // Compose content of tbody
        for (const content of this.listContent) {
            // Remove cellDef from content
            const cleanContent = {};
            for (const property in content) {
                if (property !== 'cellDef') {
                    cleanContent[property] = content[property];
                }
            }
            const row = new Object(function webpackMissingModule() { var e = new Error("Cannot find module './../patterns/composite/composite'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())('tr');
            // Loop over clean properties to add table divider
            for (const property in cleanContent) {
                const td = new Object(function webpackMissingModule() { var e = new Error("Cannot find module './../patterns/composite/composite'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())('td');
                td.setContent(cleanContent[property]);
                row.addComponent(td);
            }
            this.tbody.addComponent(row);
        }
        this.table.addComponent(this.tbody);
        // Compose thead
        const row = new Object(function webpackMissingModule() { var e = new Error("Cannot find module './../patterns/composite/composite'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())('tr');
        this.cellDefs.forEach((cd) => {
            const th = new Object(function webpackMissingModule() { var e = new Error("Cannot find module './../patterns/composite/composite'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())('th');
            th.setContent(cd);
            row.addComponent(th);
        });
        this.thead.addComponent(row);
        this.table.addComponent(this.thead);
    }
    build() {
        return this.table.build();
    }
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
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Main": () => (/* binding */ Main)
/* harmony export */ });
/* harmony import */ var _html_elements_table_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./html-elements/table-html */ "./src/html-elements/table-html.ts");
Object(function webpackMissingModule() { var e = new Error("Cannot find module './scss/main.scss'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};


/**
 * main.ts
 * @author Aélion <jean-luc.aubert@aelion.fr>
 * @version 1.0.0
 *
 * Entry point of our frontend application
 */
class Main {
    constructor() {
        this.app = document.querySelector('[app]');
        // Instance of HtmlTable
        //this.getDatas()
    }
    getDatas() {
        return __awaiter(this, void 0, void 0, function* () {
            const datas = yield this.studentList();
            const names = datas
                .map((data) => {
                return {
                    name: data.lastName,
                    firstname: data.firstName
                };
            });
            const tableEl = new _html_elements_table_html__WEBPACK_IMPORTED_MODULE_0__.TableHTML();
            tableEl.addContent(names);
            tableEl.compose();
            this.app.appendChild(tableEl.build());
        });
    }
    studentList() {
        return __awaiter(this, void 0, void 0, function* () {
            const endPoint = 'http://127.0.0.1:5000/api/v1/students';
            return fetch(endPoint).then((response) => {
                return response.json();
            });
        });
    }
}
/**
 * Launch app
 */
const main = new Main();
/**
 * Event handling with JS
 */
const formFields = new Map([
    ['lastName', {}],
    ['email', {}],
    ['login', {}],
    ['password', {}]
]);
window.keyupHandler = (el) => {
    // Assume form is valid
    let formIsValid = true;
    formFields.forEach((value, key) => {
        const field = document.querySelector('input[name="' + value + ']"'); // `input[name="${value}"]``
        if (field.value.trim().length === 0) {
            formIsValid = false;
            return;
        }
    });
    // Now change the disabled
    if (formIsValid) {
        document.querySelector('#student-form button').removeAttribute('disabled');
    }
    else {
        document.querySelector('#student-form button').setAttribute('disabled', 'disabled');
    }
};

})();

/******/ })()
;
//# sourceMappingURL=main.js.map