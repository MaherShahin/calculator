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
