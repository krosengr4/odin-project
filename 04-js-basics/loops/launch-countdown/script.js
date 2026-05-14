// Print out a simple launch countdown to the output box, from 10 down to blastoff.

// const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));
function sleep(ms) {
    return new Promise((resolve) => setTimeout(resolve, ms));
}

async function countdown(int) {
    for (let i = int; i > 0; i--) {
        console.log(i);
        await sleep(1000);
    }

    console.log("BLASTOFF!!!");
}

countdown(10);
