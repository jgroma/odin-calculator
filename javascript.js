let firstNumber = 4;

let secondNumber = 5;

let operator = "+";

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

const operate = function (operator,firstNumber,secondNumber) {
    let result;
    if (operator === "+") {
        result = add(firstNumber,secondNumber);
    } else if (operator === "-") {
        result = subtract(firstNumber,secondNumber);
    } else if (operator === "*") {
        result = multiply(firstNumber,secondNumber);
    } else if (operator === "/" && (firstNumber === 0 || secondNumber === 0)) {
        result = "Nope.";
    } else {
        result = divide(firstNumber,secondNumber);
    }

    return result;

};

//console.log(operate("*",2,4));