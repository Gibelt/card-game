/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/style/style.css":
/*!*****************************!*\
  !*** ./src/style/style.css ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/application.ts":
/*!****************************!*\
  !*** ./src/application.ts ***!
  \****************************/
/***/ (() => {


window.application = {
    blocks: {},
    screens: {},
    renderScreen: function (screenName) {
        window.application.screens[screenName]();
    },
    renderBlock: function (blockName, container, result) {
        window.application.blocks[blockName](container, result);
    },
};


/***/ }),

/***/ "./src/blocks.ts":
/*!***********************!*\
  !*** ./src/blocks.ts ***!
  \***********************/
/***/ (() => {


function resultBlock(container, result) {
    var resultBcg = document.createElement("div");
    resultBcg.classList.add("result__bcg");
    var content = document.createElement("div");
    content.classList.add("result__content");
    var img = document.createElement("img");
    img.setAttribute("src", "static/" + result + ".svg");
    var title = document.createElement("h2");
    title.classList.add("result__title");
    title.classList.add("difficulty__heading");
    title.textContent = result === "success" ? "Вы выйграли!" : "Вы проиграли!";
    var subTitle = document.createElement("p");
    subTitle.classList.add("result__subtitle");
    subTitle.textContent = "Затраченное время:";
    var time = document.createElement("p");
    time.classList.add("result__time");
    time.textContent = "01.20";
    var button = document.createElement("btn");
    button.classList.add("difficulty__button");
    button.classList.add("result__button");
    button.textContent = "Играть снова";
    content.appendChild(img);
    content.appendChild(title);
    content.appendChild(subTitle);
    content.appendChild(time);
    content.appendChild(button);
    container.appendChild(resultBcg);
    container.appendChild(content);
}
function difficultyBlock(container) {
    var content = document.createElement("div");
    content.classList.add("difficulty__content");
    var heading = document.createElement("h2");
    heading.textContent = "Выбери сложность";
    heading.classList.add("difficulty__heading");
    var level = document.createElement("div");
    level.classList.add("difficulty__level");
    level.addEventListener("click", function (event) {
        var target = event.target;
        if (!target.dataset.value) {
            return;
        }
        window.application.difficulty = target.dataset.value;
        var levels = document.querySelectorAll(".difficulty__level__item");
        levels.forEach(function (level) {
            if (level.dataset.value === window.application.difficulty) {
                level.classList.remove("difficulty__level__item_disabled");
            }
            else {
                level.classList.add("difficulty__level__item_disabled");
            }
        });
        button.removeAttribute("disabled");
    });
    for (var i = 1; i < 4; i++) {
        var number = document.createElement("div");
        number.textContent = String(i);
        number.classList.add("difficulty__level__item");
        number.setAttribute("data-value", String(i));
        level.appendChild(number);
    }
    var button = document.createElement("button");
    button.textContent = "Старт";
    button.classList.add("difficulty__button");
    button.setAttribute("disabled", "disabled");
    button.addEventListener("click", function () {
        window.application.renderScreen("game-screen");
    });
    content.appendChild(heading);
    content.appendChild(level);
    content.appendChild(button);
    container.appendChild(content);
}
function cardBlock(container) {
    shuffle(CARDS);
    var randomArr = CARDS.slice(0, window.application.difficulty * 3);
    var gameArr = randomArr.concat(randomArr);
    shuffle(gameArr);
    for (var i = 0; i < gameArr.length; i++) {
        var img = document.createElement("img");
        img.setAttribute("disabled", "disabled");
        img.classList.add("card__item");
        img.setAttribute("src", "static/" + gameArr[i] + ".jpg");
        img.setAttribute("data-value", gameArr[i]);
        container.appendChild(img);
    }
    setTimeout(cardBack, 5000);
}
function cardBack() {
    var cards = document.querySelectorAll(".card__item");
    cards.forEach(function (card) {
        card.setAttribute("src", "static/back-of-card.jpg");
        card.removeAttribute("disabled");
    });
}
function gameTopBlock(container) {
    var timer = document.createElement("div");
    timer.classList.add("content__timer");
    var min = document.createElement("p");
    min.classList.add("timer__text");
    min.textContent = "min";
    var sec = document.createElement("p");
    sec.classList.add("timer__text");
    sec.textContent = "sec";
    var number = document.createElement("p");
    number.classList.add("timer__number");
    number.textContent = "00.00";
    timer.appendChild(min);
    timer.appendChild(sec);
    timer.appendChild(number);
    var button = document.createElement("button");
    button.classList.add("content__button");
    button.textContent = "Начать заново";
    container.appendChild(timer);
    container.appendChild(button);
}
window.application.blocks["difficulty"] = difficultyBlock;
window.application.blocks["card"] = cardBlock;
window.application.blocks["game-top"] = gameTopBlock;
window.application.blocks["result"] = resultBlock;
// eslint-disable-next-line prettier/prettier
var CARDS = ["sa", "sk", "sq", "sj", "s10", "s9", "s8", "s7", "s6", "ha", "hk", "hq", "hj", "h10", "h9", "h8", "h7", "h6", "da", "dk", "dq", "dj", "d10", "d9", "d8", "d7", "d6", "ca", "ck", "cq", "cj", "c10", "c9", "c8", "c7", "c6"];
function shuffle(array) {
    array.sort(function () { return Math.random() - 0.5; });
}


/***/ }),

/***/ "./src/run.ts":
/*!********************!*\
  !*** ./src/run.ts ***!
  \********************/
/***/ (() => {


window.application.renderScreen("difficulty-screen");


/***/ }),

/***/ "./src/screens.ts":
/*!************************!*\
  !*** ./src/screens.ts ***!
  \************************/
/***/ (() => {


function renderDifficultyScreen() {
    var app = document.querySelector(".app");
    app.innerHTML = "";
    window.application.renderBlock("difficulty", app);
}
function renderGameScreen() {
    var counter = 0;
    var userChoosenCard = "";
    var userChoosenCardSecond = "";
    var app = document.querySelector(".app");
    app.innerHTML = "";
    var content = document.createElement("div");
    content.classList.add("content");
    var top = document.createElement("div");
    top.classList.add("content__top");
    window.application.renderBlock("game-top", top);
    var cards = document.createElement("div");
    cards.classList.add("content__cards");
    cards.addEventListener("click", function (event) {
        var target = event.target;
        if (!target.dataset.value ||
            target.dataset.value === "x" ||
            target.getAttribute("disabled")) {
            return;
        }
        target.setAttribute("src", "static/" + target.dataset.value + ".jpg");
        if (counter === 0) {
            userChoosenCard = target.dataset.value;
            target.dataset.value = "x";
            counter++;
        }
        else if (counter === 1) {
            userChoosenCardSecond = target.dataset.value;
            userChoosenCard === userChoosenCardSecond
                ? window.application.renderBlock("result", app, "success")
                : window.application.renderBlock("result", app, "loose");
            counter = 0;
            userChoosenCard = "";
            userChoosenCardSecond = "";
        }
    });
    window.application.renderBlock("card", cards);
    content.appendChild(top);
    content.appendChild(cards);
    app.appendChild(content);
}
window.application.screens["difficulty-screen"] = renderDifficultyScreen;
window.application.screens["game-screen"] = renderGameScreen;


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
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
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
  !*** ./src/index.ts ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _application__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./application */ "./src/application.ts");
/* harmony import */ var _application__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_application__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _screens__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./screens */ "./src/screens.ts");
/* harmony import */ var _screens__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_screens__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _blocks__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./blocks */ "./src/blocks.ts");
/* harmony import */ var _blocks__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_blocks__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _run__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./run */ "./src/run.ts");
/* harmony import */ var _run__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_run__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _style_style_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./style/style.css */ "./src/style/style.css");






})();

/******/ })()
;
//# sourceMappingURL=bundle.js.map