let divs = [];
const container = document.querySelector('#container');

const slider = document.querySelector("#slider");

const sliderLabel = document.querySelector('#slider-label');

let numberOfSquares = slider.value;

slider.addEventListener('input', () => {
    numberOfSquares = slider.value;
    generate();
})

function generate() {
    // update grid label text
    sliderLabel.textContent = `${numberOfSquares} x ${numberOfSquares}`;

    // clear dom element
    while (container.firstChild) {
        container.removeChild(container.firstChild);
    }

    // empty array
    divs = [];

    // regenerate
    for (let i = 0; i < numberOfSquares * numberOfSquares; i++) {
        const div = document.createElement('div');
        div.classList.add('square');
        div.addEventListener("mouseover", () => div.style.backgroundColor = "grey");
        div.style.border = "1px solid";
        borders.checked = "true";
        divs.push(div);
        container.appendChild(div);
    }

    // make grid
    container.style.display = "grid";
    container.style.gridTemplateColumns = `repeat(${numberOfSquares}, 1fr`;
    container.style.gridTemplateRows = `repeat(${numberOfSquares}, 1fr`;
}

// grey
const grey = document.querySelector('#grey');
grey.addEventListener('click', classic);
function classic() {
    for (let i = 0; i < divs.length; i++) {
        divs[i].addEventListener('mouseover', () => divs[i].style.backgroundColor = "grey");
    }
}

// rainbow 
const rainbow = document.querySelector('#rainbow');
rainbow.addEventListener('click', randomColor);
function randomColor() {
    for (let i = 0; i < divs.length; i++) {
        divs[i].addEventListener("mouseover", () => {
            divs[i].style.backgroundColor = `rgb(${randomRGB()}, ${randomRGB()}, ${randomRGB()})`
        });
    }
}
function randomRGB() {
    return Math.floor(Math.random() * 256);
}

// eraser
const eraser = document.querySelector("#eraser");
eraser.addEventListener('click', erase);
function erase() {
    for (let i = 0; i < divs.length; i++) {
        divs[i].addEventListener('mouseover', () => divs[i].style.backgroundColor = "transparent");
    }
}

// clear
const clear = document.querySelector('#clear');
clear.addEventListener('click', clean);
function clean() {
    for (let i = 0; i < divs.length; i++) {
        divs[i].style.backgroundColor = "";
    }
}

// borders 
const borders = document.querySelector('#borders');
borders.addEventListener('change', () => {
    if (!borders.checked) {
        for (let i = 0; i < divs.length; i++) {
            divs[i].style.border = "";
        }
    } else {
        for (let i = 0; i < divs.length; i++) {
            divs[i].style.border = "1px solid";
        }
    }
})

generate();
