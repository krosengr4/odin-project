const container = document.querySelector("#container");

const content = document.createElement("div"); // Create new div element
content.classList.add("content"); // Add "content" as a class to div
content.textContent = "Here is your beautiful text content"; // Adds text to div
container.appendChild(content); // Append content child to container div

const contentTitle = document.createElement("h2");
contentTitle.classList.add("title");
contentTitle.textContent = "Div Title";
contentTitle.setAttribute("style", "text-decoration: underline;"); // Underline the content title
container.insertBefore(contentTitle, content); // Insert content title before the content in container div

// Exercise
// a <p> with red text that says “Hey I’m red!”
const redText = document.createElement("p");
redText.textContent = "Hey I'm red!";
redText.setAttribute("style", "color: red;");
content.appendChild(redText);

// an <h3> with blue text that says “I’m a blue h3!”
const blueHeader = document.createElement("h3");
blueHeader.textContent = "I'm a blue h3!";
blueHeader.setAttribute("style", "color: blue");
content.insertBefore(blueHeader, redText);

// a <div> with a black border and pink background
const pinkDiv = document.createElement("div");
pinkDiv.setAttribute("style", "border-style: solid; background-color: pink;");
container.appendChild(pinkDiv);
// a <h1> that says "I'm in a div"
const header = document.createElement("h1");
header.textContent = "I'm in a div";
pinkDiv.appendChild(header);
// a <p> that says "ME TOO!"
const p = document.createElement("p");
p.textContent = "ME TOO!";
pinkDiv.appendChild(p);
