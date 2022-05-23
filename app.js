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

//
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
        screen.innerText = screen.innerText + item.innerText;
    })
}
// operator = 
let operateBtn = operBtnsNodeList[operBtnsNodeList.length-1];
operateBtn.addEventListener('click', () => {
    solveTwoOperands();  
})

// Clear Btn
const clearBtn = document.createElement('div');
clearBtn.className = 'clearBtn';
clearBtn.innerText = 'Clear';
clearBtn.addEventListener('click', ()=> {
    screen.innerText = '';
})
container.appendChild(clearBtn)

//Checks if last input on the screen is an operator

function checkLastOper () {
    if (screen.innerText[screen.innerText.length-1] === '+' || screen.innerText[screen.innerText.length-1] === '-' || screen.innerText[screen.innerText.length-1] === '*' || screen.innerText[screen.innerText.length-1] === '/' || screen.innerText[screen.innerText.length-1] === '='){
        screen.innerText[screen.innerText.length-1] = item.innerText;
        return;
    }
}

function solveTwoOperands(){
if(screen.innerText.includes('+')){
    let operands = screen.innerText.split('+')
    screen.innerText = operate('+',parseInt(operands[0]),parseInt(operands[1]))
} else if(screen.innerText.includes('-')){
    let operands = screen.innerText.split('-')
    screen.innerText = operate('-',parseInt(operands[0]),parseInt(operands[1]))
} else if(screen.innerText.includes('/')){
    let operands = screen.innerText.split('/')
    screen.innerText = operate('/',parseInt(operands[0]),parseInt(operands[1]))
} else if(screen.innerText.includes('*')){
    let operands = screen.innerText.split('*')
    screen.innerText = operate('*',parseInt(operands[0]),parseInt(operands[1]))
}     
}