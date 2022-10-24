function renderDifficultyScreen() {
    const app = document.querySelector('.app');

    application.renderBlock('difficulty', app);
}

application.screens['difficulty-screen'] = renderDifficultyScreen;