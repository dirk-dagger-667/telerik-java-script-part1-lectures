var number = prompt("enter a number between 0 and 100 : ", 0);

alert(((number % 2 == 0) || (number % 3 == 0) || (number % 5 == 0) || (number % 7 == 0)) ? "the number is NOT prime" : "the number is prime");