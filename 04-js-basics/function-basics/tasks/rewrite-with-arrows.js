// Replace function expressions with arrow functions
/*

function ask(question, yes, no) {
    if(confirm(question)) {
        yes();
    } else {
        no();
    }
}

ask(
    "Do you agree?",
    function() { console.log("You agreed."); },
    function() { console.log("You canceled the execution"); }
)
*/

function ask(question, yes, no) {
  if (confirm(question)) yes();
  else no();
}

ask(
    "Do you agree?",
    () => console.log("You agreed");
    () => console.log("You cancelled the execution");
);

