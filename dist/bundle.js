/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/style/style.css":
/*!*****************************!*\
  !*** ./src/style/style.css ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/application.js":
/*!****************************!*\
  !*** ./src/application.js ***!
  \****************************/
/***/ (() => {

window.application = {
  blocks: {},
  screens: {},
  renderScreen: function (screenName) {
    window.application.screens[screenName]();
  },
  renderBlock: function (blockName, container) {
    window.application.blocks[blockName](container);
  },
};


/***/ }),

/***/ "./src/blocks.js":
/*!***********************!*\
  !*** ./src/blocks.js ***!
  \***********************/
/***/ (() => {

function resultBlock(container, result) {
  const content = document.createElement("div");
  content.classList.add("result__content");

  const img = document.createElement("img");
  
}

function difficultyBlock(container) {
  const content = document.createElement("div");
  content.classList.add("difficulty__content");

  const heading = document.createElement("h2");
  heading.textContent = "Выбери сложность";
  heading.classList.add("difficulty__heading");

  const level = document.createElement("div");
  level.classList.add("difficulty__level");

  level.addEventListener("click", (event) => {
    const target = event.target;
    if (!target.dataset.value) {
      return;
    }
    window.application.difficulty = target.dataset.value;
    const levels = document.querySelectorAll(".difficulty__level__item");
    levels.forEach((level) => {
      if (level.dataset.value === window.application.difficulty) {
        level.classList.remove("difficulty__level__item_disabled");
      } else {
        level.classList.add("difficulty__level__item_disabled");
      }
    });
    button.removeAttribute("disabled");
  });

  for (let i = 1; i < 4; i++) {
    const number = document.createElement("div");
    number.textContent = i;
    number.classList.add("difficulty__level__item");
    number.setAttribute("data-value", i);
    level.appendChild(number);
  }

  const button = document.createElement("button");
  button.textContent = "Старт";
  button.classList.add("difficulty__button");
  button.setAttribute("disabled", "disabled");

  button.addEventListener("click", () => {
    window.application.renderScreen("game-screen");
  });

  content.appendChild(heading);
  content.appendChild(level);
  content.appendChild(button);

  container.appendChild(content);
}

function cardBlock(container) {
  shuffle(CARDS);
  let randomArr = CARDS.slice(0, window.application.difficulty * 3);
  let gameArr = randomArr.concat(randomArr);
  shuffle(gameArr);

  for (let i = 0; i < gameArr.length; i++) {
    const img = document.createElement("img");
    img.classList.add("card__item");
    img.setAttribute("src", "static/" + gameArr[i] + ".jpg");
    img.setAttribute("data-value", gameArr[i]);
    container.appendChild(img);
  }

  setTimeout(cardBack, 2000);
}

function cardBack() {
  const cards = document.querySelectorAll(".card__item");
  cards.forEach((card) => {
    card.setAttribute("src", "static/back-of-card.jpg");
  });
}

function gameTopBlock(container) {
  const timer = document.createElement("div");
  timer.classList.add("content__timer");

  const min = document.createElement("p");
  min.classList.add("timer__text");
  min.textContent = "min";

  const sec = document.createElement("p");
  sec.classList.add("timer__text");
  sec.textContent = "sec";

  const number = document.createElement("p");
  number.classList.add("timer__number");
  number.textContent = "00.00";

  timer.appendChild(min);
  timer.appendChild(sec);
  timer.appendChild(number);

  const button = document.createElement("button");
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
const CARDS = ["sa", "sk", "sq", "sj", "s10", "s9", "s8", "s7", "s6","ha", "hk", "hq", "hj", "h10", "h9", "h8", "h7", "h6", "da", "dk", "dq", "dj", "d10", "d9", "d8", "d7", "d6", "ca", "ck", "cq", "cj", "c10", "c9", "c8", "c7", "c6"];

function shuffle(array) {
  array.sort(() => Math.random() - 0.5);
}


/***/ }),

/***/ "./src/run.js":
/*!********************!*\
  !*** ./src/run.js ***!
  \********************/
/***/ (() => {

window.application.renderScreen("difficulty-screen");


/***/ }),

/***/ "./src/screens.js":
/*!************************!*\
  !*** ./src/screens.js ***!
  \************************/
/***/ (() => {

function renderDifficultyScreen() {
  const app = document.querySelector(".app");
  app.innerHTML = "";
  window.application.renderBlock("difficulty", app);
}

function renderGameScreen() {
  let counter = 0;
  let userChoosenCard = "";
  let userChoosenCardSecond = "";
  const app = document.querySelector(".app");
  app.innerHTML = "";

  const content = document.createElement("div");
  content.classList.add("content");

  const top = document.createElement("div");
  top.classList.add("content__top");

  window.application.renderBlock("game-top", top);

  const cards = document.createElement("div");
  cards.classList.add("content__cards");

  cards.addEventListener("click", (event) => {
    const target = event.target;
    if (!target.dataset.value) {
      return;
    }
    target.setAttribute("src", "static/" + target.dataset.value + ".jpg");
    if (counter === 0) {
      userChoosenCard = target.dataset.value;
    } else if (counter === 1) {
      userChoosenCardSecond = target.dataset.value;
      userChoosenCard === userChoosenCardSecond ? renderSucces() : renderLoose();
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

function render() {

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
// This entry need to be wrapped in an IIFE because it need to be in strict mode.
(() => {
"use strict";
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _application__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./application */ "./src/application.js");
/* harmony import */ var _application__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_application__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _screens__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./screens */ "./src/screens.js");
/* harmony import */ var _screens__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_screens__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _blocks__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./blocks */ "./src/blocks.js");
/* harmony import */ var _blocks__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_blocks__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _run__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./run */ "./src/run.js");
/* harmony import */ var _run__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_run__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _style_style_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./style/style.css */ "./src/style/style.css");






})();

/******/ })()
;
//# sourceMappingURL=bundle.js.map