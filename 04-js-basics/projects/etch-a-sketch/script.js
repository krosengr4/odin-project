const container = document.querySelector("#container");
const resetBtn = document.querySelector("#reset");

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
    square.style.backgroundColor = "blue";
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
