const container = document.querySelector("#container");
const resetBtn = document.querySelector("#reset");
const blueBtn = document.querySelector("#blue");
const redBtn = document.querySelector("#red");
const yellowBtn = document.querySelector("#yellow");
const greenBtn = document.querySelector("#green");
const eraseBtn = document.querySelector("#erase");

var color = "black";

blueBtn.addEventListener("click", () => {
    color = "blue";
});

redBtn.addEventListener("click", () => {
    color = "red";
});

yellowBtn.addEventListener("click", () => {
    color = "yellow";
});

greenBtn.addEventListener("click", () => {
    color = "green";
});

eraseBtn.addEventListener("click", () => {
    color = "black";
});

function createGrid(size) {
    const squareSize = 960 / size;

    for (let i = 0; i < size * size; i++) {
        const gridDiv = document.createElement("div");
        gridDiv.classList.add("grid-square");
        gridDiv.setAttribute(
            "style",
            `height: ${squareSize}px; width: ${squareSize}px`,
        );

        gridDiv.addEventListener("mouseover", onHover);

        container.appendChild(gridDiv);
    }
}

function onHover(event) {
    square = event.target;
    square.style.backgroundColor = `${color}`;
}

function promptGridSize() {
    input = prompt("Enter number of squares per side (max 100)");
    let gridSize = parseInt(input);

    if (gridSize == NaN || gridSize < 1) {
        alert("Please enter a valid number!");
        return;
    } else if (gridSize > 100) {
        alert("Please enter a number less than 101!");
        return;
    }

    return gridSize;
    // createGrid(gridSize);
}

const size = promptGridSize();
createGrid(size);

function onReset() {
    container.innerHTML = "";
    createGrid(size);
}

resetBtn.addEventListener("click", onReset);
