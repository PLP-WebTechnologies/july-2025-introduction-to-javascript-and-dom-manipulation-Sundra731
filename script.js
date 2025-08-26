//PART 1
// Variables and Data Types(strings, numbers, booleans)
let username = "Joanna";
let age = 16;
let isSunny = true;
console.log(username, age, isSunny);
// operators and conditionals
let num1 = window.prompt("Enter first number:"); // capturing user input
let num2 = window.prompt("Enter second number:");
let operation = window.prompt("Enter operation (+, -, *, /):");
let result;
if (operation === "+"){
    result = Number(num1) + Number(num2);
}
else if (operation === "-"){
    result = Number(num1) - Number(num2);
}
else if (operation === "*"){
    result = Number(num1) * Number(num2);
}
else if (operation === "/"){
    result = Number(num1) / Number(num2);
}
else{
    result = "Invalid operation";
}
console.log("Result: " + result);

//PART 2
// Functions
// Function that returns the sum of two numbers
function sum(a, b){
    return a + b;
}
console.log(sum(5, 10));
// Function that calculates the amount paid after a percentage discount
const amountPaid = function(price, percentageDiscount){
    let discountAmount = (percentageDiscount / 100) * price;
    return price - discountAmount;
}   
console.log(amountPaid(2000, 10))
// Function that capitalizes the first letter of a string
function capitalize(str) {
  return str.charAt(0).toUpperCase() + str.slice(1);
}

console.log(capitalize("sundra"));

//PART 3
//Loops
//for loop
for (let i = 10; i >= 1; i--){
    console.log(i);
}
//while loop
let i = 1;
while(i <= 10){
    console.log(i);
    i++;
}
// for...of loop
let fruits = ["apple", "banana", "cherry"];
for (let fruit of fruits){
    console.log(fruit);
}

// PART 4
// 3 DOM Manipulation and Events
function myFunction(){
    document.getElementById("paragraph").textContent =
    "You clicked me!";
    document.querySelector("h1").style.color = "Chocolate";
}
document.getElementById("toggleBtn").addEventListener("click", function() {
  document.body.classList.toggle("dark");
});