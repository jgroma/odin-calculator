let firstNumber = '';

let secondNumber = '';

let operator = '' ;

let display = document.getElementById('display');

display.innerHTML = 0;


let numberButtons = document.querySelectorAll(".number");

numberButtons.forEach(function (btn) {

    btn.addEventListener("click", function () {

      if (firstNumber === '' && operator === '') {
        firstNumber = this.innerHTML;
      } else if (operator === '') {
        firstNumber += this.innerHTML;
      } else if (secondNumber === '') {
        secondNumber = this.innerHTML;
      } else {
        secondNumber += this.innerHTML;
      };
      display.innerHTML = `${firstNumber} ${operator} ${secondNumber}`;
    });
    
});


let operatorButtons = document.querySelectorAll(".operator")

operatorButtons.forEach(function (btn) {
    btn.addEventListener("click", function () {
        operator = this.innerHTML;
        display.innerHTML = `${firstNumber} ${operator} ${secondNumber}`;
    });
});



const add = function(a,b) {
    return result = a + b;
};

const subtract = function (a,b) {
    return result = a - b;
};

const multiply = function (a,b) {
    return result = a * b;
};

const divide = function (a,b) {
    return result = a / b;
};

const operate = function () {

    let result;
    if (operator === "+") {
        result = add(parseInt(firstNumber), parseInt(secondNumber));
    } else if (operator === "-") {
        result = subtract(parseInt(firstNumber), parseInt(secondNumber));
    } else if (operator === "*") {
        result = multiply(parseInt(firstNumber), parseInt(secondNumber));
    } else if (operator === "/" && (parseInt(firstNumber) === 0 || parseInt(secondNumber) === 0)) {
        result = "Nope.";
    } else {
        result = divide(parseInt(firstNumber), parseInt(secondNumber));
    }

    firstNumber = result;

    secondNumber = "";

    operator = "";

    display.innerHTML = firstNumber;


};

document.getElementById("equals").addEventListener("click", operate);


document.getElementById("clear").addEventListener("click", clearDisplay)

function clearDisplay () {
    firstNumber = '';
    secondNumber = '';
    operator = '';
    display.innerHTML = 0;
};