const FOOD_ITEMS = [
    {
        title: 'The "Splendid Splinter" Dog',
        about:
            "Named after the legendary 1942 and 1947 triple crown winner, Teddy Williams. A " +
            "massive, grilled footlong hot dog on a toasted brioche bun, loaded with beer cheese, " +
            "crispy onion strings, and fresh jalapeños.",
    },
    {
        title: "The Mick's 7-Bomb Burger",
        about:
            "Named in honor of the 1956 triple crown winner and New York Yankees legend, " +
            "Mickey Mantle. A half-pound double smash burger stacked with thick-cut bacon, smoked " +
            "cheddar, lettuce, tomato, and house barbecue sauce.",
    },
    {
        title: "Miggy's Nachos",
        about:
            "A nod to MLB's most recent triple crown winner in 2012, Miguel Cabrera. A loaded " +
            "mound of tortilla chips topped with braised pulled pork, black beans, queso, pico de gallo, " +
            "and cilantro-lime crema.",
    },
];

const DRINK_ITEMS = [
    {
        title: `Frank Robinson's "1966" Old Fashioned`,
        concept:
            "A timeless, powerful classic honoring the legendary 1966 AL Triple Crown winner " +
            "(and the only player to win MVP in both leagues).",
        ingredients:
            "Ingredients: Bourbon, Angostura bitters, Demerara syrup, and an orange twist.",
    },
    {
        title: `Carl Yastrzemski's "Boston Pop" Punch`,
        concept:
            'A sweet, heavy-hitting tropical cocktail paying tribute to "Yaz" and his iconic ' +
            "1967 Red Sox season.",
        ingredients:
            "Ingredients: Dark rum, spiced rum, pineapple juice, orange juice, grenadine, " +
            "and a splash of dark cherry liqueur.",
    },
    {
        title: 'The "Grand Slam" Pitcher',
        concept:
            "A refreshingly upgraded beer-margarita designed for sharing at the " +
            "table while watching the game.",
        ingredients:
            "Ingredients: Tequila Blanco, triple sec, fresh lime juice, agave nectar, " +
            "topped with local craft IPA or crisp lager.",
    },
];

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

        // asdfasdfa

        card.appendChild(itemHeader);
        card.appendChild(itemInfo);
        menuSection.appendChild(card);
    }

    drinkDiv.appendChild(drinkHeader);
    drinkDiv.appendChild(menuSection);

    return drinkDiv;
}
