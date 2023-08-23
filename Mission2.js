console.log('Hello World!');


// deleare the variables using let and const
const originalText = "I feel itchy.";
let newText = "You hit the spot!";

// use of functions
function changeText() {
    document.getElementById("demo").textContent = newText;
}

//  the use of document.getElementById() and events
document.getElementById("changeTextButton").addEventListener("click", changeText);

// using loops.
for (let index = 1; index <= 5; index++) {
    console.log(`Loop iteration ${index}`);
}

// demonstrate the use of both arithmetic and comparitive operators
let number1 = 10;
let number2 = 5;

let sum = number1 + number2;
let difference = number1 - number2;
let product = number1 * number2;
let quotient = number1 / number2;

console.log(`sum: ${sum}`);
console.log(`Difference: ${difference}`);
console.log(`Product: ${product}`);
console.log(`Quotient ${quotient}`);

if (number1 > number2) {
    console.log(`${number1} is greater than ${number2}`);
}else {
    console.log(`${number1} is not greater than ${number2}`);
}
