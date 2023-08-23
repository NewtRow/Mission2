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

// this is the start of my attempt to add in NASA images to my html

async function fetchEarthImage() {
    try {
        const response = await fetch('https://api.nasa.gov/EPIC/api/natural/images?api_key=LtKXQLQtnWOLtffuWS5VXAE4RdoBwBKWeSKfTKFb');
        const data = await response.json();

        if (data && data.length > 0) {
            const imageUrl = `https://epic.gsfc.nasa.gov/archive/natural/${data[0].date.replace(/-/g, '/')}/png/${data[0].image}.png`;
            document.body.style.backgroundImage = `url(${imageUrl})`;
            console.log('Image URL:', imageUrl); // Added in for logging
        }
    } catch (error) {
        console.error('Error fetching Earth image:', error);
    }
    
}

// fetching earth images when page loads
window.addEventListener('load', fetchEarthImage);