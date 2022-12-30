let result;
let num1;
let num2;

function plus() {
    num1 = Number(document.getElementById("num1").value);
    num2 = Number(document.getElementById("num2").value);  
    result = num1 + num2;
}
function minus() {
    num1 = Number(document.getElementById("num1").value);
    num2 = Number(document.getElementById("num2").value);  
    result = num1 - num2;
}
function times() {
    num1 = Number(document.getElementById("num1").value);
    num2 = Number(document.getElementById("num2").value);  
    result = num1 * num2;
}
function divide() {
    num1 = Number(document.getElementById("num1").value);
    num2 = Number(document.getElementById("num2").value);  
    result = num1 / num2;
}

function res() {
    if (Number.isInteger(num1) == true || Number.isInteger(num2) == true) {
    alert(result)
    }
    else {
        alert("это не число или заполните второе поле !")
    }
}