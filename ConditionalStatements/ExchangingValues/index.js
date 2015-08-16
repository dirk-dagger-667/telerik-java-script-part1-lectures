var firstValue = prompt("enter the first value", 0);
var secondValue = prompt("enter the second value", 0);

if (firstValue > secondValue) {
    var memoryOfValue = firstValue;
    firstValue = secondValue;
    secondValue = memoryOfValue;
    alert("first value is : " + firstValue + "\nsecond value is : " + secondValue);
}
else {
    alert("no change");
}