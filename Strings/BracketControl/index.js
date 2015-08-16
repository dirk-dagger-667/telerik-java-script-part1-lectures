function ifBracketsCorrect(expression) {

    var len = expression.length;
    var counterCheck = 0;

    for (var i = 0; i < len; i++) {

        if (expression[i] === "(") {

            counterCheck++;

        }
        if(expression[i] === ")") {

            counterCheck--;

        }
        if (counterCheck < 0) {

            return false;

        }

    }

    return true;

}

var expression = prompt("enter the expression : ", 0);

console.log(ifBracketsCorrect(expression));