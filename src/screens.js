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
    if (
      !target.dataset.value ||
      target.dataset.value === "x" ||
      target.getAttribute("disabled")
    ) {
      return;
    }
    target.setAttribute("src", "static/" + target.dataset.value + ".jpg");
    if (counter === 0) {
      userChoosenCard = target.dataset.value;
      target.dataset.value = "x";
      counter++;
    } else if (counter === 1) {
      userChoosenCardSecond = target.dataset.value;
      userChoosenCard === userChoosenCardSecond
        ? window.application.renderBlock("result", app, "success")
        : window.application.renderBlock("result", app, "loose");
      counter = 0;
      userChoosenCard = "";
      userChoosenCardSecond = "";
    }
    console.log(counter);
  });

  window.application.renderBlock("card", cards);

  content.appendChild(top);
  content.appendChild(cards);
  app.appendChild(content);
}

window.application.screens["difficulty-screen"] = renderDifficultyScreen;
window.application.screens["game-screen"] = renderGameScreen;
