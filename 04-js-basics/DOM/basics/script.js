const container = document.querySelector("#container");
const controls = document.querySelector(".controls");

// Selects the first child of #container => .display
const display = container.firstElementChild;
console.log(display); // <div class="display"></div>

// selects the prior sibling => .display
const display2 = controls.previousElementSibling;
console.log(display2); // div.display
