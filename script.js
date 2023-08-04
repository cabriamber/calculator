// create a calculator that contains functions for the basic math operators: Add, Subtract, Multiply, Divide

let firstNumber = ''; 
let operation = ''; 
let secondNumber = ''; 
let solution = ''; 

/*const buttons = document.querySelectorAll("button"); 
console.table(buttons); 

buttons.forEach((button) => {
  button.addEventListener("click", () => {

  })
})*/

const operate = function(aFirstNumber, aSecondNumber, anOperation) {
  aFirstNumber = Number(firstNumber); 
  aSecondNumber = Number(secondNumber); 
  anOperation = operation; 
  if (operation === "/" && secondNumber === '0') {
    alert("You can't divide by zero!")
    clearAll(); 
  }
  else if (operation === "+") {
    solution = (aFirstNumber + aSecondNumber); 

  }
  else if (operation === "-") {
    solution = (aFirstNumber - aSecondNumber); 
  }
  else if (operation === "x") {
    solution = (aFirstNumber * aSecondNumber); 
  }
  else if (operation === "/") {
    solution = (aFirstNumber / aSecondNumber); 
  }
  firstNumber = solution; 
  displayScreen.textContent = solution; 
  secondNumber = ''; 
  operation = ''; 
  console.log(typeof(solution)); 
  console.log({firstNumber})
  console.log({secondNumber}); 
  console.log({operation}); 
}


const zero = document.getElementById("zero");
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

const equals = document.getElementById("equals");
const clearButton = document.getElementById("clear-button"); 
const deleteButton = document.getElementById("delete-button"); 

const displayScreen = document.getElementById("display-screen"); 

const decimal = document.getElementById("decimal");

divide.addEventListener("click", saveOperator);
multiply.addEventListener("click", saveOperator); 
subtract.addEventListener("click", saveOperator); 
add.addEventListener("click", saveOperator); 

//eight.addEventListener("click", changeDisplay);
zero.addEventListener("click", saveVariable); 
one.addEventListener("click", saveVariable); 
two.addEventListener("click", saveVariable); 
three.addEventListener("click", saveVariable); 
four.addEventListener("click", saveVariable); 
five.addEventListener("click", saveVariable); 
six.addEventListener("click", saveVariable); 
seven.addEventListener("click", saveVariable); 
eight.addEventListener("click", saveVariable); 
nine.addEventListener("click", saveVariable); 

clearButton.addEventListener("click", clearAll); 

equals.addEventListener("click", operate);

deleteButton.addEventListener("click", backspace); 

decimal.addEventListener("click", createDecimal); 

function createDecimal (e) {
  console.log("i'm here"); 
  if (decimalNumber === true) {
    return; 
  }
  else if (displayScreen.textContent === firstNumber) {
    firstNumber = firstNumber + '.';
    displayScreen.textContent = firstNumber; 
    
  }
  else if (displayScreen.textContent === secondNumber) {
    secondNumber = secondNumber + '.'; 
    displayScreen.textContent = secondNumber; 
    
  }
}


function backspace(e) {
  if (displayScreen.textContent === firstNumber) {
    let currentDisplay = displayScreen.textContent; 
    currentDisplay = currentDisplay.substring(0,currentDisplay.length-1); 
    displayScreen.textContent = currentDisplay; 
    firstNumber = currentDisplay; 
    console.log({firstNumber}); 
  }
  else {
    let currentDisplay = displayScreen.textContent; 
    currentDisplay = currentDisplay.substring(0,currentDisplay.length-1); 
    displayScreen.textContent = currentDisplay; 
    secondNumber = currentDisplay; 
    console.log({secondNumber}); 
  }

}


function saveOperator (e) {
  if (operation) {
    operate(); 
    operation = e.target.innerHTML; 

  }
  else {
    operation = e.target.innerHTML; 
    console.log(operation); 
    displayScreen.textContent = operation; 
  }
};

function saveVariable (e) {
  if (firstNumber && !operation && !secondNumber) {
    // a solution has already been calculated, stored as first number, but no operator is selected. The user may wish to add additional digits to the end of the already displayed and stored number 
    firstNumber = firstNumber + e.target.innerHTML;  
    displayScreen.textContent = firstNumber; 
  }
  else if (!operation && !firstNumber && !secondNumber) {
    // all values are clear. No value for has been selected or calculated for any variable. 
    firstNumber = firstNumber + e.target.innerHTML; 
    displayScreen.textContent = firstNumber; 
    //console.log({firstNumber}); 
    //console.log(typeof(firstNumber)); 
  }
  else if (firstNumber && operation && !secondNumber) {
    // first number and operation already have a selected value, second number is needed. 
    secondNumber = secondNumber + e.target.innerHTML; 
    //console.log({secondNumber})
    displayScreen.textContent = secondNumber; 
  }
  else if (firstNumber && operation && secondNumber) {
    // all values are already selected, but the user wishes to add additiona digits to the second number before running the calculation 
    secondNumber = secondNumber + e.target.innerHTML; 
    displayScreen.textContent = secondNumber; 
  }
  /*else if (firstNumber && operation === '/' && secondNumber) {
    alert("You can't divide by zero!")
    clearAll(); 
  }*/


  

}

function clearAll(e) {
  displayScreen.textContent = ''; 
  firstNumber = ''; 
  secondNumber = ''; 
  operation = ''; 
  console.log({operation}); 
}


/* Notes and such: 





*/