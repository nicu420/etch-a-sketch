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
        div.addEventListener("mouseover", () => {
            if (role === 'grey') {
                div.style.backgroundColor = "grey";
            } else if (role === 'transparent') {
                div.style.backgroundColor = "transparent";
            } else {
                div.style.backgroundColor = colorString();
                role = '';
            }
        });
        borders.checked = bordersOn;
        div.style.border = bordersOn ? "1px solid" : "";
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
        divs[i].addEventListener('mouseover', () => {
            divs[i].style.backgroundColor = "grey";
        });
    }
    role = "grey";
}

// rainbow 
const rainbow = document.querySelector('#rainbow');
rainbow.addEventListener('click', randomColor);
function randomColor() {
    for (let i = 0; i < divs.length; i++) {
        divs[i].addEventListener("mouseover", () => {
            divs[i].style.backgroundColor = colorString();
        });
    }
    role = '';
}
function colorString() {
    return `rgb(${randomRGB()}, ${randomRGB()}, ${randomRGB()})`;
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
    role = 'transparent';
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
    bordersOn = borders.checked;
})

let bordersOn = borders.checked;
let role = 'grey';

generate();
