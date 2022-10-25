function renderGameScreen() {
    const app = document.querySelector('.app');
    app.innerHTML = '';
}

function renderDifficultyScreen() {
    const app = document.querySelector('.app');
    app.innerHTML = '';

    application.renderBlock('difficulty', app);
}

application.screens['difficulty-screen'] = renderDifficultyScreen;
application.screens['game-screen'] = renderGameScreen;