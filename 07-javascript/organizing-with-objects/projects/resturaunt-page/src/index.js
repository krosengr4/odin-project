import "./style.css";
import { loadHomepage } from "./homepage.js";
import { loadMenupage } from "./menupage.js";
import { loadContactPage } from "./contactpage.js";

const contentDiv = document.querySelector("#content");

const homeBtn = document.querySelector("#homeButton");
const menuBtn = document.querySelector("#menuButton");
const contactBtn = document.querySelector("#contactButton");

function loadHome() {
    contentDiv.replaceChildren(loadHomepage());
}

function loadMenu() {
    contentDiv.replaceChildren(loadMenupage());
}

function loadContact() {
    contentDiv.replaceChildren(loadContactPage());
}

homeBtn.addEventListener("click", loadHome);
menuBtn.addEventListener("click", loadMenu);
contactBtn.addEventListener("click", loadContact);
// loadHome();
