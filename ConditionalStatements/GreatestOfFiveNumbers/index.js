var arrayOfNumbers = [];

for (var i = 1; i <= 5; i++) {

    arrayOfNumbers[i - 1] = prompt("enter " + i + " variable");

}

arrayOfNumbers.sort(function(a, b) {return a-b});

alert("biggest : " + arrayOfNumbers[4]);

