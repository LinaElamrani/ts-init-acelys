/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/html-elements/list-html.ts":
/*!****************************************!*\
  !*** ./src/html-elements/list-html.ts ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ListHTML": () => (/* binding */ ListHTML)
/* harmony export */ });
/**
 * list-html.ts
 *  Build ul or ol list with some elements
 * @version 1.0.0
 */
class ListHTML {
    constructor() {
        /**
         * Class attributes
         */
        this.listType = 'ul';
        this.listContent = ['Aubert', 'Talut', 'Saulay']; // string[] <=> Array<string>
    }
    setListType(listType) {
        this.listType = listType;
    }
    build() {
        // Have to build a ul | ol list with as many li as listContent length
        // <ul>
        //  <li>Aubert</li>
        //  <li>Talut</li>
        //  <li>Saulay</li>
        // </ul>
        /**
         * Create a new Object in the DOM
         */
        const list = document.createElement('ul');
        for (const name of this.listContent) {
            const line = document.createElement('li');
            line.textContent = name;
            list.appendChild(line);
        }
        return list;
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
/* harmony import */ var _html_elements_list_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./html-elements/list-html */ "./src/html-elements/list-html.ts");

/* import { ListHTML } from './html-elements/list-html'
/
 * main.ts
 * @author Max
 * @version 1.0.0
 *
 * Entry point of our frontend application
 */
class Main {
    constructor() {
        let myName;
        myName = 'Jean-Luc';
        /*
        * Récupère dans le DOM (Document Object Model) le premier Objet (élément HTML)
        * qui dispose d'un attribut "app"
        */
        const app = document.querySelector('[app]');
        app.innerHTML = myName;
        // New instance of ListHTML
        const listHTML = new _html_elements_list_html__WEBPACK_IMPORTED_MODULE_0__.ListHTML();
        app.appendChild(listHTML.build());
    }
}
/**
* Launch app
*/
const main = new Main();

})();

/******/ })()
;
//# sourceMappingURL=main.js.map