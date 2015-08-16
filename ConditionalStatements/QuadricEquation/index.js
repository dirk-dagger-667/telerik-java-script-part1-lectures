var coefA = prompt("enter coef. a = ", 0);
var coefB = prompt("enter coef. b = ", 0);
var coefC = prompt("enter coef. c = ", 0);
var x1 = 0;
var x2 = 0;
coefA = parseFloat(coefA);
coefB = parseFloat(coefB);
coefC = parseFloat(coefC);

x1 = ((-coefB) + Math.sqrt(coefB * coefB - 4 * coefA * coefC)) / (2 * coefA);
x2 = ((-coefB) - Math.sqrt(coefB * coefB - 4 * coefA * coefC)) / (2 * coefA);

if ((coefB * coefB - 4 * coefA * coefC) >= 0) {
    if (x1 == x2) {

        alert("x = " + x1);

    }
    else {

        alert("x1 = " + x1 + "\nx2 = " + x2);

    }
}
else {

    alert("there are no real solutions");

}

