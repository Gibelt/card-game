function renderDifficultyScreen() {
  const app = document.querySelector(".app");
  app.innerHTML = "";
  window.application.renderBlock("difficulty", app);
}

function renderGameScreen() {
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
    target.setAttribute("src", "src/img/" + target.dataset.value + ".jpg");
  });

  window.application.renderBlock("card", cards);

  content.appendChild(top);
  content.appendChild(cards);
  app.appendChild(content);
}

window.application.screens["difficulty-screen"] = renderDifficultyScreen;
window.application.screens["game-screen"] = renderGameScreen;
