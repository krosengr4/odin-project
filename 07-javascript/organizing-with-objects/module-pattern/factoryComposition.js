// Composition mimics inheritance-like behavior with factory functions.
// A new object is created from multiple sources, allowing choice of what funcs / fields to include.

// factory function from last example with private properties
function createUser(name) {
    const discordName = "@" + name;

    let reputation = 0;
    const getReputation = () => reputation;
    const giveReputation = () => {
        reputation++;
    };

    return { name, discordName, getReputation, giveReputation };
}

// factory function that has properties and has access to createUser properties
function createPlayer(name, level) {
    const { getReputation, giveReputation } = createUser(name);

    const getLevel = () => level;
    const increaseLevel = () => {
        level++;
    };

    return {
        name,
        getReputation,
        giveReputation,
        getLevel,
        increaseLevel,
    };
}

const newPlayer = createPlayer("mike", 1);
newPlayer.giveReputation();
newPlayer.increaseLevel();
newPlayer.increaseLevel();

// this logs: { name: 'mike', reputation: 1, level: 3 }
console.log({
    name: newPlayer.name,
    reputation: newPlayer.getReputation(),
    level: newPlayer.getLevel(),
});
