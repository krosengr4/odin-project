const btn1 = document.querySelector("#btn1");
// Adding funcitonality directly on the DOM node
btn1.onclick = () =>
    alert("Adding functionality directly on the DOM node in js with onclick()");

const btn2 = document.querySelector("#btn2");
// Attach an event listener to the DOM node
btn2.addEventListener("click", (e) => {
    alert("Attaching event listener on the DOM node in js");
    console.log(e); // we use e here (passed in as parameter) to make this function a callback.
});
