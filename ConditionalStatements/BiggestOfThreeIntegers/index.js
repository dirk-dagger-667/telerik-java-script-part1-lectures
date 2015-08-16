var firstValue = prompt("enter the first value : ", 0);
var secondValue = prompt("enter the second value : ", 0);
var thirdValue = prompt("enter the third value : ", 0);

if (firstValue == secondValue && secondValue == thirdValue) {

    alert("all are equal");
}
else {
    if (firstValue > secondValue && secondValue >= thirdValue) {
        alert("biggest is : " + firstValue);
    }
    if (secondValue > thirdValue && thirdValue >= firstValue) {
        alert("biggest is : " + secondValue);
    }
    else {
        alert("biggest is : " + thirdValue);
    }
}