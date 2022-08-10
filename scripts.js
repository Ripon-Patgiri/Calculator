//Declaring Global Variables
let FLAG = 1;
let OPERATOR_DISPLAY = 0;
let NUMBER1 = '';
let NUMBER2 = '';
let OPERATOR = '';
let SOLN = 0;
let PRESSED_CLEAR = 0;
let PRESSED_EQUAL = 0;

function add(num1,num2) {
    console.log(num1);
    console.log(num2);
    sum = num1 + num2;
    return sum;
}

function subtract(num1,num2) {
    console.log(num1);
    console.log(num2);
    diff = num1 - num2;
    return diff;
}

function multiply(num1,num2) {
    if(num2 === ''){
        mult = num1;
    }
    else {
        mult = num1 * num2;
    }
    return mult;
}

function divide(num1,num2) {
    if(num2 === ''){
        div = num1;
    }
    else {
        div = num1 / num2;
    }
    return div;
}


const result = document.getElementById('show-result');
const numBtn = document.querySelectorAll('.numBtn');
const operateBtn = document.querySelectorAll('.operateBtn');
const clearBtn = document.getElementById('clearBtn');
const equalBtn = document.getElementById('equalBtn');


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
        OPERATOR = value;
        OPERATOR_DISPLAY = 1;
        FLAG = 2;
        result.innerHTML += ` ${OPERATOR} `;
    }
    else if (OPERATOR_DISPLAY === 1 && (value === '+' || value === '-' || value === '*' || value === '/')) {
        if(value === '/') {
            OPERATOR = '/';
        }
        operate(OPERATOR, NUMBER1, NUMBER2);
        OPERATOR = value;
        result.innerHTML += ` ${OPERATOR} `;
    }
    else if (FLAG === 1 && value != '=') {
        let num1 = value;
        NUMBER1 += value;
        NUMBER1 = parseFloat(NUMBER1);
        result.innerHTML +=`${num1}`;
    }
    else if (FLAG === 2 && value != '=') {
        let num2 = value;
        NUMBER2 += value;
        NUMBER2 = parseFloat(NUMBER2);
        result.innerHTML += `${num2}`;
    }
    else if (value === '=') {
        PRESSED_EQUAL = 1;
        operate(OPERATOR, NUMBER1, NUMBER2);
    }
}

function clearDisplay(){
    result.innerHTML = '';
    FLAG = 1;
    OPERATOR_DISPLAY = 0;
    NUMBER1 = '';
    NUMBER2 = '';
    PRESSED_CLEAR = 1;
}

function operate(operator, num1, num2) {
    if (operator === '+') {
        SOLN = add(num1,num2);
    }
    else if (operator === '-') {
        SOLN = subtract(num1,num2);
    }
    else if (operator === '*') {
        SOLN = multiply(num1,num2);
    }
    else if (operator === '/') {
        SOLN = divide(num1,num2);
        console.log(SOLN);
    }
    NUMBER1 = parseFloat(SOLN);
    NUMBER2 = '';
    result.innerHTML =`${SOLN}`;
    if (PRESSED_CLEAR === 1) {
        OPERATOR_DISPLAY = 0;
        PRESSED_CLEAR = 0;
    } 
}
