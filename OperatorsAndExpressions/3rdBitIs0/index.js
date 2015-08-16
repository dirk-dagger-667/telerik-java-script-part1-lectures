var mask = 8;
var number = prompt("enter the number : ", 0);

alert((number & mask == 0) ? "the 3rd bit is 0" : "the 3rd bit is 1");