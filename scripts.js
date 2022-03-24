let num1 = null;
let num2 = null;
let memmoryFull = false;
let mathToSolve = null;
let cleanNextInput = false;
let operator = null;
let cButton = document.getElementById('counter');
let counter;
let count = 0;

function updateDisplay(val) {
    if (val > 9999999999999) {
        document.getElementById("result").value = "OUT OF RANGE";
    } else {
        document.getElementById("result").value = val;
    }

}

function backSpace() {
    if (document.getElementById("result").value == "NaN") {
        updateDisplay("");
    } else {
        updateDisplay(document.getElementById("result").value.slice(0, -1));
    }
}

function addDisplay(val) {
    if (cleanNextInput) {
        cleanScreen();
        cleanNextInput = false;
    }
    if (val == ".") {
        if (document.getElementById("result").value == "") {
            updateDisplay("0.");
        } else if (!document.getElementById("result").value.includes(".")) {
            document.getElementById("result").value += val;
        }
    } else if (document.getElementById("result").value.length <= 12) {
        document.getElementById("result").value += val;
    }
}

function start() {
    console.log("start");
    counter = setInterval(function() {
        count++;
        console.log(count);
        if (count >= 1) {
            document.getElementById("backspaceC").style.backgroundColor = "rgb(122, 119, 114)";
        }
    }, 1000);
}

function end() {
    if (count < 1) {
        backSpace();
    } else {
        clean();
    }
    clearInterval(counter);
    count = 0;
    document.getElementById("backspaceC").style.backgroundColor = null;
}

function clean() {
    cleanScreen();
    num1 = null;
    num2 = null;
    mathToSolve = null;
}

function cleanScreen() {
    document.getElementById("result").value = "";
    document.getElementById("result").placeholder = "0";
}

function solve() {
    if (operator == null) {
        return;
    }
    num2 = document.getElementById("result").value;
    mathToSolve += num2;
    let nums = mathToSolve.split(",");
    switch (operator) {
        case "+":
            updateDisplay(parseFloat(nums[0]) + parseFloat(nums[1]));
            break;
        case "-":
            updateDisplay(parseFloat(nums[0]) - parseFloat(nums[1]));
            break;
        case "*":
            updateDisplay(parseFloat(nums[0]) * parseFloat(nums[1]));
            break;
        case "/":
            updateDisplay(parseFloat(nums[0]) / parseFloat(nums[1]));
            break;
    }
    console.log(mathToSolve);
    operator = null;
    cleanNextInput = true;
}

function operation(op) {
    if (mathToSolve != null) {
        solve();
    }
    cleanNextInput = true;
    num1 = document.getElementById("result").value;
    mathToSolve = num1 + ",";
    console.log(mathToSolve);
    operator = op;
}