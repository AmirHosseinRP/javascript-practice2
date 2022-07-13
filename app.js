document.addEventListener('DOMContentLoaded', () => {
    let body = document.body;
    let randomColor, randomSize, randomX, randomY;
    let item;

    let randomCount = Math.floor(Math.random() * 50) + 1;

    for (let i = 1; i < randomCount; i++) {
        item = document.createElement('div');
        item.setAttribute('class', 'circle');
        randomColor = Math.floor(Math.random() * 16777215).toString(16);
        item.style.backgroundColor = `#${randomColor}`;
        randomSize = Math.floor(Math.random() * 200) + 10;
        item.style.width = `${randomSize}px`;
        item.style.height = `${randomSize}px`;
        randomX = Math.floor(Math.random() * 100);
        randomY = Math.floor(Math.random() * 100);
        item.style.right = `${randomX}%`;
        item.style.top = `${randomY}%`;
        body.append(item);
    }
    let items = document.querySelectorAll('.circle');

    items.forEach(item => {
        item.addEventListener('mouseover', event => {
            item.style.backgroundColor = 'blue';
            randomColor = Math.floor(Math.random() * 16777215).toString(16);
            item.style.backgroundColor = `#${randomColor}`;
            randomSize = Math.floor(Math.random() * 200) + 10;
            item.style.width = `${randomSize}px`;
            item.style.height = `${randomSize}px`;
            randomX = Math.floor(Math.random() * 100);
            randomY = Math.floor(Math.random() * 100);
            item.style.right = `${randomX}%`;
            item.style.top = `${randomY}%`;
        })
    })
});