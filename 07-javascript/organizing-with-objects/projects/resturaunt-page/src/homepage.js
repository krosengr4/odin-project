const ABOUT_TEXT =
    "Howdy! We are a baseball themed bar and grill! In baseball, the triple " +
    "crown is when a player leads or ties for the lead league in batting " +
    "average, home runs, and runs batted in. Here we serve baseball food and " +
    "drink named after previous triple crown winners!";

const HOURS = [
    { day: "Sunday", open: "8am - 8pm" },
    { day: "Monday", open: "6am - 6pm" },
    { day: "Tuesday", open: "6am - 6pm" },
    { day: "Wednesday", open: "6am - 6pm" },
    { day: "Thursday", open: "10am - 10pm" },
    { day: "Friday", open: "10am - 2am" },
    { day: "Saturday", open: "10am - 2am" },
];

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
    homeTitle.textContent = "Triple Crown Tavern";

    titleDiv.appendChild(homeTitle);

    return titleDiv;
}

function createAbout() {
    const aboutDiv = document.createElement("div");
    aboutDiv.id = "about";

    const aboutTitle = document.createElement("h2");
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
