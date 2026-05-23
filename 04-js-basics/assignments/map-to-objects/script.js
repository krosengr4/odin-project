/* You have an array of user objects, each one has name, surname and id.
 *
 * Write the code to create another array from it, of objects with id and fullName, where fullName
 * is generated from name and surname
 */

let john = { name: "John", surname: "Smith", id: 1 };
let pete = { name: "Pete", surname: "Hunt", id: 2 };
let mary = { name: "Mary", surname: "Key", id: 3 };

let users = [john, pete, mary];

// Solution
let mappedUsers = [];

function mapUsers(userArr) {
    let mappedObj = {};

    for (let user in userArr) {
        mappedObj = {
            fullName: `${userArr[user].name} ${userArr[user].surname}`,
            id: userArr[user].id,
        };

        mappedUsers.push(mappedObj);
    }
}

mapUsers(users);
console.log(mappedUsers[0].id);
console.log(mappedUsers[0].fullName);
