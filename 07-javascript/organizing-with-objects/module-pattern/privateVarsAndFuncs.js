// createUser factory function with a new private variable (reputation)
function createUser(name) {
    const discordName = "@" + name;

    // The reputation var is a private variable.
    // It can only be accessed by the closures we defined. Not directly in the object instance
    let reputation = 0;
    const getReputation = () => reputation;
    const giveReputation = () => {
        reputation++;
    };

    return { name, discordName, getReputation, giveReputation };
}

const gina = createUser("gina");
gina.giveReputation();
gina.giveReputation();

// logs "{ discordName: '@gina', reputation: 2 }"
console.log({
    discordName: gina.discordName,
    reputation: gina.getReputation(),
});
