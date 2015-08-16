var sideA = prompt("enter the first side : ", 0);
var sideB = prompt("enter the second side : ", 0);
var height = prompt("enter the height : ", 0);
var area = (((parseInt(sideA) + parseInt(sideB)) * height) / 2);

alert((area > 0) ? area : "one or more of the parameters are negative");