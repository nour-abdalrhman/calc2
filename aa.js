document.getElementById("calcButton").addEventListener("click", calc);
function calc() {
    var firstnumber = Number(document.getElementById("first").value);
    var secondnumber = Number(document.getElementById("scound").value);
    var operat = document.getElementById("operat").value;
    var result;

    if (operat == "+") {
        result = firstnumber + secondnumber;
    } else if (operat == "-") {
        result = firstnumber - secondnumber;
    } else if (operat == "*") {
        result = firstnumber * secondnumber;
    } else if (operat == "/") 
        if (secondnumber != 0) {
            result = firstnumber / secondnumber;
        } 
    document.getElementById("result").innerHTML = "result"    +   result; }