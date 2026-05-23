function createPerson(name, age) {
    const obj = {};
    obj.name = name;
    obj.age = age;
    obj.introduce = () => {
        console.log(`Hello! I am ${name} and I am ${age} years old!`);
    };

    return obj;
}

let bob = createPerson("Bob", 58);
bob.introduce();

let sarah = createPerson("Sarah", 12);
sarah.introduce();
