let FLAG = 1;
let OPERATOR_DISPLAY = 0;
let RESULT = '';
let number1 = '';
let number2 = '';
let operator = '';
let soln = 0;

function add(num1,num2) {
    sum = num1 + num2;
    return sum;
}

function subtract(num1,num2) {
    diff = num1 - num2;
    return diff;
}

function multiply(num1,num2) {
    mult = num1 * num2;
    return mult;
}

function divide(num1,num2) {
    div = num1 / num2;
    return div;
}


const result = document.getElementById('show-result');
const numBtn = document.querySelectorAll('.numBtn');
const operateBtn = document.querySelectorAll('.operateBtn');
const clearBtn = document.getElementById('clearBtn');
const equalBtn = document.getElementById('equalBtn');

result.innerHTML = '';

clearBtn.onclick = () => clearDisplay();
equalBtn.onclick = (e) => updateDisplay(e.target.value)
for (let i = 0 ; i < numBtn.length ; i++) {
    numBtn[i].addEventListener('click', (e) => updateDisplay(e.target.value));
}
for (let i = 0 ; i < operateBtn.length ; i++) {
    operateBtn[i].addEventListener('click', (e) => updateDisplay(e.target.value));
}


function updateDisplay(value) {
    if (OPERATOR_DISPLAY === 0 && (value === '+' || value === '-' || value === '*' || value === '/')) {
        operator = value;
        console.log(operator);
        OPERATOR_DISPLAY = 1;
        FLAG = 2;
        result.innerHTML += ` ${operator} `;
    }
    else if (FLAG === 1 && value != '=') {
        let num1 = value;
        number1 += value;
        number1 = parseInt(number1);
        result.innerHTML +=`${num1}`;
    }
    else if (FLAG === 2 && value != '=') {
        let num2 = value;
        number2 += value;
        number2 = parseInt(number2);
        result.innerHTML += `${num2}`;
    }
    else if (value === '=') {
        console.log(operator);
        console.log(number1);
        console.log(number2);
        operate(operator, number1, number2);
    }
}

function clearDisplay(){
    result.innerHTML = '';
    FLAG = 1;
    OPERATOR_DISPLAY = 0;
    number1 = '';
    number2 = '';
}

function operate(operator, num1, num2) {
    console.log(operator);
    if (operator === '+') {
        soln = add(num1,num2);
    }
    else if (operator === '-') {
        soln = subtract(num1,num2);
    }
    else if (operator === '*') {
        soln = multiply(num1,num2);
    }
    else if (operator === '/') {
        soln = divide(num1,num2);
    }
    number1 = soln;
    OPERATOR_DISPLAY = 0;
    number2 = '';
    result.innerHTML =`${soln}`;
}
