var numberToCheck = prompt("enter the number : ", 0);

numberToCheck = (numberToCheck / 100) | 0;
alert((numberToCheck % 10 == 7) ? "The 3rd digit IS 7" : "The 3rd digit is NOT 7");
