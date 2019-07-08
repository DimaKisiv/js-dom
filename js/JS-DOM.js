                        
document.querySelector('.numbers').childNodes.
    forEach(el => el.addEventListener('click', numberClick));
document.querySelector('.operations').childNodes.
    forEach(el => el.addEventListener('click', operationClick));
    
const display = document.getElementById('calcDisplay');
const arithmeticOperations = ['+', '-', '*', '/'];
let resultState = false;

function numberClick(ev) {
    resultStateCheck();
    display.value += ev.target.value;
}

function operationClick(ev) {
    resultState = false;
    switch(ev.target.value) {
        case '+': 
        case '-':
        case '*':
        case '/':
            arithmeticOperation(ev.target.value);
            break;
        case '.':
            dotOperation();
            break;    
        case '√':
            sqrtOperation();
            break;
        case 'sqr':
            sqrOperation();
            break;
        case 'x':
            removeOperation();
            break;
        case '=':
            resultOperation();
            break;
    }
}

function arithmeticOperation(val) {
    if(display.value.length > 0) {
        if (arithmeticOperations.indexOf(display.value[display.value.length - 1]) !== -1) {
            display.value = display.value.slice(0, -1);
        }
        display.value += val;
    }
}

function sqrtOperation() {
    display.value = Math.sqrt(display.value);
    resultState = true;
}

function sqrOperation() {
    let numericValue = parseFloat(display.value);
    if (!isNaN(numericValue)) {
        display.value = numericValue * numericValue;
        resultState = true;
    }
}

function resultOperation(val) {
    const resultStr =  eval(display.value);
    if (!isNaN(resultStr)) {
        if (display.value != resultStr) {
            resultState = true;
        }
        display.value = resultStr;
    }
}

function dotOperation() {
    if (display.value.indexOf('.') === -1) {
        display.value += '.';
    }
}

function removeOperation() {
    resultStateCheck();
    if (display.value.length > 0) {
        display.value = display.value.slice(0, -1);
    }
}

function resultStateCheck() {
    if (resultState) {
        display.value = '';
        resultState = false;
    }
}

