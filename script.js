const divs = [];
const container = document.querySelector('#container');

for (let i = 0; i < 16; i++) {
    const div = document.createElement('div');
    div.classList.add('square');
    div.addEventListener("mouseover", () => color(div));
    divs.push(div);
    container.appendChild(div);
}

function color(div) {
    div.classList.add('colored');
}