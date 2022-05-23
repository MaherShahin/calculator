// add function
function add(a,b) {
    return a+b;
}

//substract
function substract(a,b) {
    return a-b;
}

//multiply
function multiply(a,b) {
    return a*b;
}

//divide
function divide(a,b) {
    return a/b;
}

//operate
function operate(operator,a,b){
    a = Number(a);
    b = Number(b);

    switch(operator){
        case "+":
            return add(a,b);
        case "-":
            return substract(a,b);
        case "*":
            return multiply(a,b);
        case "/":
            return divide(a,b);
    }
}

const container = document.querySelector('.container');
const screen = document.querySelector('.screen');
let screenText = document.querySelector('.screen').innerText

// add 5 buttons for +,-,*,/,=
const plusBtn = document.createElement('div');
plusBtn.className = `plusBtn oper`;
plusBtn.innerText = '+';
container.appendChild(plusBtn)

const minusBtn = document.createElement('div');
minusBtn.className = `minusBtn oper`;
minusBtn.innerText = '-';
container.appendChild(minusBtn)

const timesBtn = document.createElement('div');
timesBtn.className = `timesBtn oper`;
timesBtn.innerText = '*';
container.appendChild( timesBtn);

const divideBtn = document.createElement('div');
divideBtn.className = `divideBtn oper`;
divideBtn.innerText = '/';
container.appendChild(divideBtn);

const equalBtn = document.createElement('div');
equalBtn.className = `equalBtn oper`;
equalBtn.innerText = '=';
container.appendChild(equalBtn)

//adding all the numbers on container
function addNumbers(){
    for (i=9; i>=0; i--){
        const numberBtn = document.createElement('div');
        numberBtn.className = `btn-${i} num`;
        numberBtn.innerText = `${i}`
        container.appendChild(numberBtn);    
    }
}
addNumbers();

// dot button 
const dotBtn = document.createElement('div');
dotBtn.className = `dotBtn`;
dotBtn.innerText = '.';
container.appendChild(dotBtn);

// Clear Btn
const clearBtn = document.createElement('div');
clearBtn.className = 'clearBtn';
clearBtn.innerText = 'Clear';
clearBtn.addEventListener('click', ()=> {
    screen.innerText = '';
})
container.appendChild(clearBtn)

// Backsapace Btn
const backspaceBtn = document.createElement('div');
backspaceBtn.className = 'backspaceBtn';
backspaceBtn.innerText = 'Backspace';
backspaceBtn.addEventListener('click', () => {
    screen.innerText =  screen.innerText.slice(0,screen.innerText.length-1)
})
container.appendChild(backspaceBtn)

// functionality for writing the numbers on the screen when pressing on btn//
let numBtnsNodeList = document.querySelectorAll('.num')
for (i=0;i<numBtnsNodeList.length;i++){
    let item = numBtnsNodeList[i];
    item.addEventListener('click', () => {
        screen.innerText = screen.innerText + item.innerText;
    })
}

//functionality for writing the operators on the screen when pressing their btn and making sure not more than 1 operator is written in sequence
let operBtnsNodeList = document.querySelectorAll('.oper');
//operator buttons without =
for (i=0;i<operBtnsNodeList.length-1;i++){
    let item = operBtnsNodeList[i];
    item.addEventListener('click', () => {
        checkLastOper();
        if (screen.innerText.includes('+') || screen.innerText.includes('-') || screen.innerText.includes('*') || screen.innerText.includes('/')){
            screen.innerText = solveTwoOperands(screen.innerText);
        }
        screen.innerText = screen.innerText + item.innerText;
        // if the screen text already includes an operator then evaluate our result and then allow the next operation
    })
};

//dotBtn functionality
dotBtn.addEventListener('click', () => {
    if (!screen.innerText.includes('.') ){
        screen.innerText = screen.innerText + '.';
    }
})
// operator = 
let operateBtn = operBtnsNodeList[operBtnsNodeList.length-1];
operateBtn.addEventListener('click', () => {
    let display = screen.innerText;
    screen.innerText = solveTwoOperands(display);
})

//Checks if last input on the screen is an operator

let lastInput = screen.innerText[screen.innerText.length-1];

function checkLastOper () {
    if (lastInput === '+' || lastInput === '-' || lastInput === '*' || lastInput === '/' || lastInput === '=') {
        lastInput = item.innerText;
        return;
    }
}


function solveTwoOperands(string){

if(string.includes('+')){
    let operands = string.split('+')
    let result = operate('+',Number(operands[0]),Number(operands[1]));
    string = result;
} else if(string.includes('-')){
    let operands = string.split('-')
    let result = operate('-',Number(operands[0]),Number(operands[1]));
    string = result;
} else if(string.includes('/')){
    let operands = string.split('/')
    if (operands[1] === '0') { string = "Cute! Try again"; return;};
    let result  = operate('/',Number(operands[0]),Number(operands[1]));
    string = result;
} else if(string.includes('*')){
    let operands = string.split('*')
    let result  = operate('*',Number(operands[0]),Number(operands[1]));
    string = result;
}
return string;
}
