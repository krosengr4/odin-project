const results = document.querySelector("#results");
const calculateBtn = document.querySelector("#calculate");
const clearBtn = document.querySelector("#clear");

function calculate() {
    for (let i = 1; i < 10; i++) {
        const newResult = `${i} x ${i} = ${i * i}`;
        results.textContent += `${newResult}\n`;
    }

    results.textContent += "\nFinished\n\n";
}

calculateBtn.addEventListener("click", calculate);
clearBtn.addEventListener("click", () => (results.textContent = ""));
