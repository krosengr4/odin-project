import { FOOD_ITEMS, DRINK_ITEMS } from "./data/menu.js";

export function loadMenupage() {
    const page = document.createElement("div");
    page.id = "content";

    const title = createTitle();
    const foodDiv = createFoodSection();
    const drinkDiv = createDrinkSection();

    page.appendChild(title);
    page.appendChild(foodDiv);
    page.appendChild(drinkDiv);
    return page;
}

function createTitle() {
    const titleDiv = document.createElement("div");
    titleDiv.id = "pageTitle";

    const titleHeader = document.createElement("h1");
    titleHeader.id = "title";
    titleHeader.textContent = "Menu";

    titleDiv.appendChild(titleHeader);
    return titleDiv;
}

function createFoodSection() {
    const foodDiv = document.createElement("div");

    const foodHeader = document.createElement("h2");
    foodHeader.id = "menuTitle";
    foodHeader.classList = "sectionTitle";
    foodHeader.textContent = "Food";

    const menuSection = document.createElement("div");
    menuSection.id = "menuSection";

    for (let i = 0; i < FOOD_ITEMS.length; i++) {
        const card = document.createElement("div");
        card.classList = "itemCard";

        const itemHeader = document.createElement("h2");
        itemHeader.id = "itemTitle";
        itemHeader.classList = "itemContent";
        itemHeader.textContent = `${FOOD_ITEMS[i].title}`;

        const itemAbout = document.createElement("p");
        itemAbout.id = "itemAbout";
        itemAbout.classList = "itemContent";
        itemAbout.textContent = `${FOOD_ITEMS[i].about}`;

        card.appendChild(itemHeader);
        card.appendChild(itemAbout);
        menuSection.appendChild(card);
    }

    foodDiv.appendChild(foodHeader);
    foodDiv.appendChild(menuSection);

    return foodDiv;
}

function createDrinkSection() {
    const drinkDiv = document.createElement("div");

    const drinkHeader = document.createElement("h2");
    drinkHeader.id = "drinkTitle";
    drinkHeader.classList = "sectionTitle";
    drinkHeader.textContent = "Drink";

    const menuSection = document.createElement("div");
    menuSection.id = "menuSection";

    for (let i = 0; i < DRINK_ITEMS.length; i++) {
        const card = document.createElement("div");
        card.classList = "itemCard";

        const itemHeader = document.createElement("h2");
        itemHeader.id = "itemTitle";
        itemHeader.classList = "itemContent";
        itemHeader.textContent = `${DRINK_ITEMS[i].title}`;

        const itemInfo = document.createElement("p");
        itemInfo.id = "itemAbout";
        itemInfo.classList = "itemContent";
        itemInfo.innerHTML = `${DRINK_ITEMS[i].concept} <br /><br />${DRINK_ITEMS[i].ingredients}`;

        card.appendChild(itemHeader);
        card.appendChild(itemInfo);
        menuSection.appendChild(card);
    }

    drinkDiv.appendChild(drinkHeader);
    drinkDiv.appendChild(menuSection);

    return drinkDiv;
}
