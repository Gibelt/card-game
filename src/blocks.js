function difficultyBlock(container) {
    const content = document.createElement('div');
    content.classList.add('difficulty__content');

    const heading = document.createElement('h2');
    heading.textContent = 'Выбери сложность';
    heading.classList.add('difficulty__heading');

    const level = document.createElement('div');
    level.classList.add('difficulty__level');

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

    content.appendChild(heading);
    content.appendChild(level);
    content.appendChild(button);

    container.appendChild(content);
}

application.blocks['difficulty'] = difficultyBlock;