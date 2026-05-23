function createPerson(name, age) {
    const obj = {};
    obj.name = name;
    obj.age = age;
    obj.introduce = () => {
        console.log(
            `Hello! I am ${person.name} and I am ${person.age} years old!`,
        );
    };

    return obj;
}

let person = createPerson("Bob", 58);
person.introduce();
