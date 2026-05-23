// Write the code to sum all salaries and store in the variable sum.
let salaries = {
    John: 100,
    Ann: 160,
    Pete: 130,
};

function sumSalaries(obj) {
    let sum = 0;

    for (key in obj) {
        sum += obj[key];
    }
    return sum;
}

const result = sumSalaries(salaries);
console.log(result);
