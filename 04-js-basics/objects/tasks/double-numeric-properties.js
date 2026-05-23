// Create a function double(obj) that multiplies all numeric property values of obj by 2.

function double(obj) {
    for (key in obj) {
        if (typeof obj[key] == "number") {
            obj[key] *= 2;
        }
    }
}

let menu = {
    width: 200,
    height: 400,
    title: "My Menu",
};

double(menu);
for (key in menu) {
    console.log(menu[key]);
}
