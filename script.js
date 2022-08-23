let divs = [];
const container = document.querySelector('#container');

const button = document.querySelector('#ask');

button.addEventListener("click", generate);

function generate() {
    // clear dom element
    while (container.firstChild) {
        container.removeChild(container.firstChild);
    }

    // empty array
    divs = [];

    // ask for number and generate
    let numberOfSquares = parseInt(prompt('Enter a number of squares (0-100)'));
    for (let i = 0; i < numberOfSquares * numberOfSquares; i++) {
        const div = document.createElement('div');
        div.classList.add('square');
        div.addEventListener("mouseover", () => color(div));
        divs.push(div);
        container.appendChild(div);
    }

    // make grid
    container.style.display = "grid";
    container.style.gridTemplateColumns = `repeat(${numberOfSquares}, 50px`;
    container.style.gridTemplateRows = `repeat(${numberOfSquares}, 50px`;
}

function color(div) {
    div.classList.add('colored');
}