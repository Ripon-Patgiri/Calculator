
let num1 = parseInt(prompt('Num 1: '));
let num2 = parseInt(prompt('Num 2: '));
let operator = prompt('Operator: ');

function add(num1,num2) {
    const sum = num1 + num2;
    alert(sum);
}

function subtract(num1,num2) {
    const diff = num1 - num2;
    alert(diff);
}

function multiply(num1,num2) {
    const mult = num1 * num2;
    alert(mult);
}

function divide(num1,num2) {
    const div = num1 / num2;
    alert(div);
}

function operate(operator, num1, num2) {
    if (operator === '+') {
        add(num1,num2);
    }
    else if (operator === '-') {
        subtract(num1,num2);
    }
    else if (operator === '*') {
        multiply(num1,num2);
    }
    else if (operator === '/') {
        divide(num1,num2);
    }
}

operate(operator, num1, num2);