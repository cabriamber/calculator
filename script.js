// create a calculator that contains functions for the basic math operators: Add, Subtract, Multiply, Divide

let firstNumber = ''; 
let operation = ''; 
let secondNumber = ''; 

const one = document.getElementById("one"); 
const two = document.getElementById("two"); 
const three = document.getElementById("three"); 
const four = document.getElementById("four"); 
const five = document.getElementById("five"); 
const six = document.getElementById("six"); 
const seven = document.getElementById("seven"); 
const eight = document.getElementById("eight"); 
const nine = document.getElementById("nine"); 

const divide = document.getElementById("divide"); 
const multiply = document.getElementById("multiply"); 
const subtract = document.getElementById("subtract"); 
const add = document.getElementById("add"); 

const clear = document.getElementById("clear-button"); 
const deleteButton = document.getElementById("delete-button"); 


const operate = function(firstNumber, secondNumber, Operation) {
  if (operation === "+") {
    return firstNumber + secondNumber; 
  }
  else if (operation === "-") {
    return firstNumber - secondNumber; 
  }
  else if (operation === "*") {
    return firstNumber * secondNumber; 
  }
  else if (operation === "/") {
    return firstNumber / secondNumber; 
  }
}




/* Notes and such: 

const black = document.getElementById("black"); 

black.addEventListener("click", () => colorScheme = "black"); 







*/