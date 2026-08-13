import { ABOUT_TEXT, HOURS } from "./data/home.js";

export function loadHomepage() {
    const page = document.createElement("div");
    page.id = "content";

    const titleDiv = createTitle();
    const aboutDiv = createAbout();
    const hoursDiv = createHours();

    page.appendChild(titleDiv);
    page.appendChild(aboutDiv);
    page.appendChild(hoursDiv);
    return page;
}

function createTitle() {
    const titleDiv = document.createElement("div");
    titleDiv.id = "pageTitle";

    const homeTitle = document.createElement("h1");
    homeTitle.id = "title";
    homeTitle.textContent = "⚾️Triple Crown Tavern⚾️";

    titleDiv.appendChild(homeTitle);

    return titleDiv;
}

function createAbout() {
    const aboutDiv = document.createElement("div");
    aboutDiv.id = "about";

    const aboutTitle = document.createElement("h2");
    aboutTitle.id = "aboutTitle";
    aboutTitle.classList = "sectionTitle";
    aboutTitle.textContent = "About Us";
    aboutDiv.appendChild(aboutTitle);

    const aboutContent = document.createElement("p");
    aboutContent.id = "aboutContent";
    aboutContent.textContent = ABOUT_TEXT;
    aboutDiv.appendChild(aboutContent);

    return aboutDiv;
}

function createHours() {
    const hoursDiv = document.createElement("div");
    hoursDiv.id = "hours";

    const hoursTitle = document.createElement("h2");
    hoursTitle.classList = "sectionTitle";
    hoursTitle.textContent = "Hours";
    hoursDiv.appendChild(hoursTitle);

    for (let i = 0; i < HOURS.length; i++) {
        const line = document.createElement("p");
        line.classList = "hoursContent";
        line.textContent = `${HOURS[i].day}: ${HOURS[i].open}`;
        hoursDiv.appendChild(line);
    }

    return hoursDiv;
}
