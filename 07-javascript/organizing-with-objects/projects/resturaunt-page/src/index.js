import "./style.css";
import { loadHomepage } from "./homepage.js";
import { loadMenupage } from "./menupage.js";

const contentDiv = document.querySelector("#content");

const homeBtn = document.querySelector("#homeButton");
const menuBtn = document.querySelector("#menuButton");

function loadHome() {
    contentDiv.replaceChildren(loadHomepage());
}

function loadMenu() {
    contentDiv.replaceChildren(loadMenupage());
}

homeBtn.addEventListener("click", loadHome);
menuBtn.addEventListener("click", loadMenu);
// loadHome();
