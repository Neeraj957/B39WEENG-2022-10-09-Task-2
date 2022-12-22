// JS to accept the operation keys
const calButtons = document.querySelectorAll('.dataKeys');
var lastKey;
var operationKeys = ['+', '-', '/', '*', '.', 'back-space', 'AC', '×', ''];


calButtons.forEach(getButtonValue);

function getButtonValue(calButton) {
    calButton.addEventListener('click', (e) => {
        console.log(lastKey);
        var btnValue = e.target.innerText;

        if (operationKeys.includes(lastKey)) {
            if (operationKeys.includes(btnValue)) {
                alert('Please enter a number');
                return;
            }
        }
        lastKey = btnValue;
        if (btnValue !== 'AC' || 'back-space') {
            inputBox.append(btnValue);
        }
    });
}

// JS for evaluation or equal button
var equalBtn = document.querySelector('.evalButton');

equalBtn.addEventListener('click', (e) => {
    var boxValue = document.querySelector('#inputBox').textContent;
    var result = eval(boxValue.replace(/×/g, "*")); //will evaluate and when × is input will replace with * for multiplication
    clear(); // Clears input box before showing results
    inputBox.append(result);
})

// JS for clearing the complete inputBox
var clrBtn = document.querySelector('.all-clear');

clrBtn.addEventListener('click', (e) => {
    var clrBox = document.querySelector('#inputBox').textContent;
    clear();
})

function clear() {
    inputBox.innerText = "";
}

// JS for accepting numbers from keyboard
addEventListener('keydown', (event) => {
    let keyValue = event.key;

    if (operationKeys.includes(lastKey)) {
        if (operationKeys.includes(keyValue)) {
            alert('Please enter a number');
            return;
        }
    }   
    if (Number.isInteger(parseInt(keyValue)) || operationKeys.includes(keyValue)) {
        inputBox.append(keyValue);
        lastKey = keyValue;
    }
    else{
        alert ('Please enter only number');
    }
})

//JS for clearing lastKey
var backSpaceBtn = document.querySelector('.back-space');

backSpaceBtn.addEventListener('click', (b) => {
    var boxValue = document.querySelector('#inputBox').textContent;
    var result = boxValue.slice(0, -1);
    clear(); // Clear input box before showing/appending results
    inputBox.append(result);
    lastKey= ' '; // last key needs to be set to a space string after backspace so operating key can be entered/replaced after clearing
})