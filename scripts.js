let num1 = null;
let num2 = null;
let isCalc = false;

function display(val) {
    if (document.getElementById("result").value.length <= 12) {
        document.getElementById("result").value += val;
    }
}

function clear() {
    cleanScreen();
    num1 = null;
    num2 = null;
}

function cleanScreen() {
    document.getElementById("result").value = "";
    document.getElementById("result").placeholder = "0";
}

function solve() {
    console.log(document.getElementById("result").value);
}

function add() {
    num1 = document.getElementById("result").value;
    mathTodo = "+";
    isCalc = true;
}

function subtract() {

}

function multiply() {

}

function divide() {

}