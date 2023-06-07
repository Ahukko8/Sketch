const container = document.querySelector('#container');
const resetButton = document.querySelector('#resetButton');
const eraserRadio = document.querySelector('#eraser');
const randomRadio = document.querySelector('#random');
const blackRadio = document.querySelector('#black');
const gridSize = 16;
let currentColor = 'rgba(0, 0, 0, 1)';


function createGrid(size) {
    container.style.setProperty('--grid-size', size);
    for (let i = 0; i < size * size; i++) {
        const gridDiv = document.createElement('div');
        gridDiv.classList.add('square');
        container.appendChild(gridDiv);
    }
}


function resetGrid() {
    while (container.firstChild) {
        container.removeChild(container.firstChild);
    }
    const gridSize = prompt('Enter the number of squares per side for the new grid (maximum 100): ')
    if (gridSize && gridSize > 0 && gridSize <= 100) {
        createGrid(gridSize);
        addHoverEffect();
    } else {
        alert('Invalid input. Please enter a number between 1 and 100.')
    }
}

function setSquareColor(square) {
    if (eraserRadio.checked) {
        square.style.backgroundColor = "";
    } else if (randomRadio.checked) {
        const randomColor = `rgb(${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)} )`;
        square.style.backgroundColor = randomColor;
    } else if (blackRadio.checked) {
        square.style.backgroundColor = 'rgb(0, 0, 0)';
    }
}


function addHoverEffect() {
    const squares = document.querySelectorAll('.square');
    squares.forEach(square => {
        square.addEventListener('mouseover', function () {
            setSquareColor(this);
        });
    });
}


resetButton.addEventListener('click', resetGrid);
createGrid(gridSize);
addHoverEffect();