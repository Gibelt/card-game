function resultBlock(container: Element, result: string) {
  const resultBcg = document.createElement("div");
  resultBcg.classList.add("result__bcg");

  const content = document.createElement("div");
  content.classList.add("result__content");

  const img = document.createElement("img");
  img.setAttribute("src", "static/" + result + ".svg");

  const title = document.createElement("h2");
  title.classList.add("result__title");
  title.classList.add("difficulty__heading");
  title.textContent = result === "success" ? "Вы выйграли!" : "Вы проиграли!";

  const subTitle = document.createElement("p");
  subTitle.classList.add("result__subtitle");
  subTitle.textContent = "Затраченное время:";

  const time = document.createElement("p");
  time.classList.add("result__time");
  time.textContent = window.application.timerResult;

  const button = document.createElement("btn");
  button.classList.add("difficulty__button");
  button.classList.add("result__button");
  button.textContent = "Играть снова";

  button.addEventListener("click", () => {
    window.application.renderScreen("difficulty-screen");
    window.application.timerCounterSec = 0;
    window.application.timerCounterMin = 0;
    window.application.timerResult = "";
  });

  content.appendChild(img);
  content.appendChild(title);
  content.appendChild(subTitle);
  content.appendChild(time);
  content.appendChild(button);

  container.appendChild(resultBcg);
  container.appendChild(content);
}

function difficultyBlock(container: Element) {
  const content = document.createElement("div");
  content.classList.add("difficulty__content");

  const heading = document.createElement("h2");
  heading.textContent = "Выбери сложность";
  heading.classList.add("difficulty__heading");

  const level = document.createElement("div");
  level.classList.add("difficulty__level");

  level.addEventListener("click", (event) => {
    const target = event.target as HTMLInputElement;
    if (!target.dataset.value) {
      return;
    }
    window.application.difficulty = target.dataset.value;
    const levels = document.querySelectorAll<HTMLElement>(
      ".difficulty__level__item"
    );
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
    number.textContent = String(i);
    number.classList.add("difficulty__level__item");
    number.setAttribute("data-value", String(i));
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

function cardBlock(container: Element) {
  shuffle(CARDS);
  let randomArr = CARDS.slice(0, window.application.difficulty * 3);
  let gameArr = randomArr.concat(randomArr);
  shuffle(gameArr);

  for (let i = 0; i < gameArr.length; i++) {
    const img = document.createElement("img");
    img.setAttribute("disabled", "disabled");
    img.classList.add("card__item");
    img.setAttribute("src", "static/" + gameArr[i] + ".jpg");
    img.setAttribute("data-value", gameArr[i]);
    container.appendChild(img);
  }

  setTimeout(cardBack, 5000);
}

function cardBack() {
  const cards = document.querySelectorAll(".card__item");
  cards.forEach((card) => {
    card.setAttribute("src", "static/back-of-card.jpg");
    card.removeAttribute("disabled");
  });
}

function setTimer(timerNumber: Element) {
  let timerTextSec: string = "";
  let timerTextMin: string = "";
  let timerText: string = "";

  if (window.application.timerCounterSec < 10) {
    timerTextSec = "0" + String(window.application.timerCounterSec);
  }

  if (window.application.timerCounterSec >= 10) {
    timerTextSec = String(window.application.timerCounterSec);
  }

  if (window.application.timerCounterSec === 60) {
    window.application.timerCounterSec = 0;
    timerTextSec = "0" + String(window.application.timerCounterSec);
    window.application.timerCounterMin++;
  }

  if (window.application.timerCounterMin < 10) {
    timerTextMin = "0" + String(window.application.timerCounterMin);
  } else {
    timerTextMin = String(window.application.timerCounterMin);
  }

  timerText = timerTextMin + "." + timerTextSec;
  timerNumber.textContent = timerText;

  window.application.timerResult = timerText;

  window.application.timerCounterSec++;
}

function gameTopBlock(container: Element) {
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

  window.application.timer = setInterval(setTimer, 500, number);

  timer.appendChild(min);
  timer.appendChild(sec);
  timer.appendChild(number);

  const button = document.createElement("button");
  button.classList.add("content__button");
  button.textContent = "Начать заново";

  button.addEventListener("click", () => {
    clearInterval(window.application.timer);
    window.application.renderScreen("difficulty-screen");
    window.application.timerCounterSec = 0;
    window.application.timerCounterMin = 0;
    window.application.timerResult = "";
  });

  container.appendChild(timer);
  container.appendChild(button);
}

window.application.blocks["difficulty"] = difficultyBlock;
window.application.blocks["card"] = cardBlock;
window.application.blocks["game-top"] = gameTopBlock;
window.application.blocks["result"] = resultBlock;

// eslint-disable-next-line prettier/prettier
const CARDS = [
  "sa",
  "sk",
  "sq",
  "sj",
  "s10",
  "s9",
  "s8",
  "s7",
  "s6",
  "ha",
  "hk",
  "hq",
  "hj",
  "h10",
  "h9",
  "h8",
  "h7",
  "h6",
  "da",
  "dk",
  "dq",
  "dj",
  "d10",
  "d9",
  "d8",
  "d7",
  "d6",
  "ca",
  "ck",
  "cq",
  "cj",
  "c10",
  "c9",
  "c8",
  "c7",
  "c6",
];

function shuffle(array: string[]) {
  array.sort(() => Math.random() - 0.5);
}
