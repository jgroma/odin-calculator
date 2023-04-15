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
        if (firstNumber != "") {
            operator = this.innerHTML;
            display.innerHTML = `${firstNumber} ${operator} ${secondNumber}`;
        } else if (firstNumber = "") {
            //do nothing
            //stops user from inputting operators before chosing the first number;
        }
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

    if (firstNumber != "" && secondNumber != "") {

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

        //prevents user from clicking equals sign and triggering the effect of this function if there is no number chosen
    } else if (firstNumber != "") {
        display.innerHTML = firstNumber;
    } else {
        display.innerHTML = 0;
    }

};

document.getElementById("equals").addEventListener("click", operate);


document.getElementById("clear").addEventListener("click", clearDisplay)

function clearDisplay () {
    firstNumber = '';
    secondNumber = '';
    operator = '';
    display.innerHTML = 0;
};

document.getElementById("negative").addEventListener("click", changeSign);

function changeSign () {

    if (secondNumber === '' && firstNumber.includes("-")) {
        firstNumber = firstNumber.split('-').join('');
    } else if (operator != "" && secondNumber.includes("-")) {
        secondNumber = secondNumber.split('-').join('');
    } else if (secondNumber === '') {
        firstNumber = "-" + firstNumber;
    } else {
        secondNumber = "-" + secondNumber;
    };

    display.innerHTML = `${firstNumber} ${operator} ${secondNumber}`;
};
