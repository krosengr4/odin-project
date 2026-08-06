const CONTACTS = [
    {
        name: "Babe Ruth",
        title: "Founder",
        phone: "465-003-2727",
        email: "greatOne03@mail.com",
    },
    {
        name: "Derek Jeter",
        title: "Captain",
        phone: "222-222-2227",
        email: "elCaptain@realmail.com",
    },
    {
        name: "Joe Torre",
        title: "Manager",
        phone: "123-456-7890",
        email: "joe@yankees.com",
    },
    {
        name: "Mickey Mantle",
        title: "HOF Legend",
        phone: "777-777-0707",
        email: "theMick@mickey.com",
    },
];

export function loadContactPage() {
    const page = document.createElement("div");
    page.id = "content";

    const title = createTitle();
    const content = createContactCards();

    page.appendChild(title);
    page.appendChild(content);

    return page;
}

function createTitle() {
    const titleDiv = document.createElement("div");
    titleDiv.id = "pageTitle";

    const titleHeader = document.createElement("h1");
    titleHeader.id = "title";
    titleHeader.textContent = "Contact Us";

    titleDiv.appendChild(titleHeader);
    return titleDiv;
}

function createContactCards() {
    const cardsDiv = document.createElement("div");
    cardsDiv.id = "nameContent";

    const leftCards = document.createElement("div");
    leftCards.id = "leftNames";
    const rightCards = document.createElement("div");
    rightCards.id = "rightNames";

    for (let i = 0; i < CONTACTS.length; i++) {
        const contactCard = document.createElement("div");
        contactCard.id = "nameCard";

        const name = document.createElement("h2");
        name.id = "name";
        name.textContent = `${CONTACTS[i].name}`;

        const title = document.createElement("p");
        title.id = "info";
        title.classList = "contactTitle";
        title.textContent = `${CONTACTS[i].title}`;

        const phone = document.createElement("p");
        phone.id = "info";
        phone.textContent = `${CONTACTS[i].phone}`;

        const email = document.createElement("p");
        email.id = "info";
        email.textContent = `${CONTACTS[i].email}`;

        //adgfsdafg
        contactCard.appendChild(name);
        contactCard.appendChild(title);
        contactCard.appendChild(phone);
        contactCard.appendChild(email);

        if (i % 2 === 0) {
            leftCards.appendChild(contactCard);
        } else {
            rightCards.appendChild(contactCard);
        }
    }

    cardsDiv.appendChild(leftCards);
    cardsDiv.appendChild(rightCards);
    return cardsDiv;
}
