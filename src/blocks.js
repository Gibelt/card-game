function difficultyBlock(container) {
    const content = document.createElement('div');
    content.classList.add('difficulty__content');

    const heading = document.createElement('h2');
    heading.textContent = 'Выбери сложность';
    heading.classList.add('difficulty__heading');

    const level = document.createElement('div');
    level.classList.add('difficulty__level');

    level.addEventListener('click', (event) => {
        const target = event.target;
        if (!target.dataset.value) {
            return;
        }
        application.difficulty = target.dataset.value;
        const levels = document.querySelectorAll('.difficulty__level__item');
        levels.forEach(level => {
            if (level.dataset.value === application.difficulty) {
                level.classList.remove('difficulty__level__item_disabled');
            } else {
                level.classList.add('difficulty__level__item_disabled');
            }
        });
    });

    for (let i = 1; i < 4; i++) {
        const number = document.createElement('div');
        number.textContent = i;
        number.classList.add('difficulty__level__item');
        number.setAttribute('data-value', i);
        level.appendChild(number);
    }

    const button = document.createElement('button');
    button.textContent = 'Старт';
    button.classList.add('difficulty__button');

    button.addEventListener('click', () => {
        application.renderScreen('game-screen');
    });

    content.appendChild(heading);
    content.appendChild(level);
    content.appendChild(button);

    container.appendChild(content);
}

application.blocks['difficulty'] = difficultyBlock;