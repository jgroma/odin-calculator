let firstNumber = '';

let secondNumber = '';

let operator = '' ;

let display = document.getElementById('display');

display.innerHTML = 0;

let numberButtons = document.querySelectorAll(".number");

//display.innerHTML = "0";


numberButtons.forEach(function (btn) {
    //let firstNumber;

    btn.addEventListener("click", function () {
       //console.log(this.innerHTML + "is clicked");
        //let value = this.innerHTML;
        //firstNumber += value;
        //if (firstNumber == null || firstNumber == "undefined") {
        //    firstNumber = "";
        //} else {
        //display.innerHTML = '';
        //firstNumber += this.innerHTML;
       // }
       //console.log(firstNumber);
       //display.innerHTML += this.innerHTML;
       //if (typeof firstNumber == 'undefined') {
       // firstNumber = this.innerHTML;
       //} else if (typeof operator == 'undefined') {
       // firstNumber += this.innerHTML;
       //} else if (typeof secondNumber == 'undefined') {
       // secondNumber = this.innerHTML;
       //} else {
       // secondNumber += this.innerHTML;
      //}
      if (operator === '') {
        firstNumber += this.innerHTML;
      } else {
        secondNumber += this.innerHTML;
      };
      display.innerHTML = `${firstNumber} ${operator} ${secondNumber}`;
    console.log('The first number ' + firstNumber + operator + 'The second number ' + secondNumber);
    //return firstNumber
    });
    //console.log(firstNumber);
    
});

//console.log(firstNumber);

//console.log('The first number ' + firstNumber + "Operator " + operator + 'The second number ' + secondNumber);

let operatorButtons = document.querySelectorAll(".operator")

operatorButtons.forEach(function (btn) {
    btn.addEventListener("click", function () {
        operator = this.innerHTML;
        display.innerHTML = `${firstNumber} ${operator} ${secondNumber}`;
        //console.log(operator);
    });
});


//display.innerHTML = `${firstNumber} ${operator};`

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

//console.log(divide(firstNumber,secondNumber))

//const operate = function (operator,firstNumber,secondNumber) {
const operate = function () {
    //firstNumber.Number();
    //secondNumber.Number();
    let result;
    if (operator === "+") {
        result = add(parseInt(firstNumber),parseInt(secondNumber));
    } else if (operator === "-") {
        result = subtract(parseInt(firstNumber),parseInt(secondNumber));
    } else if (operator === "*") {
        result = multiply(parseInt(firstNumber),parseInt(secondNumber));
    } else if (operator === "/" && (parseInt(firstNumber) === 0 || parseInt(secondNumber) === 0)) {
        result = "Nope.";
    } else {
        result = divide(parseInt(firstNumber),parseInt(secondNumber));
    }

    firstNumber = result;

    secondNumber = "";

    operator = "";

    console.log(result);

    return display.innerHTML = result;


};

document.getElementById("equals").addEventListener("click", operate);


//console.log(operate("*",2,4));

/*let numberEight = document.getElementById("eight");
let value = numberEight.innerHTML;*/

/*console.log(value);*/

//event listeners for each button

//function if firstNumber null = firstNumber, if not secondNumber; if operator pressed then move onto a secondNumber;