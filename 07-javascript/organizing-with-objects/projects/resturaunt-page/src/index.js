import "./style.css";
import { loadHomepage } from "./homepage.js";

const contentDiv = document.querySelector("#content");

const homeBtn = document.querySelector("#homeButton");

homeBtn.addEventListener("click", loadHome);

function loadHome() {
    contentDiv.replaceChildren(loadHomepage());
}

// loadHome();
