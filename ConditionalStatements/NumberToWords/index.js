var number = prompt("enter the number : ", 0);
var numberToWords = "";
number = parseInt(number);

var ones = number % 10;
var tens = ((number / 10) | 0) % 10;
var hundrets = ((number / 100) | 0);

alert(number);
alert(hundrets);
alert(tens);
alert(ones);

if (number <= 999) {

    switch (hundrets) {
        case 1:
            numberToWords = "one hundred ";
            break;
        case 2:
            numberToWords = "two hundred ";
            break;
        case 3:
            numberToWords = "three hundred ";
            break;
        case 4:
            numberToWords = "four hundred ";
            break;
        case 5:
            numberToWords = "five hundred ";
            break;
        case 6:
            numberToWords = "six hundred ";
            break;
        case 7:
            numberToWords = "seven hundred ";
            break;
        case 8:
            numberToWords = "eight hundred ";
            break;
        case 9:
            numberToWords = "nine hundred ";
            break;
    }
    if (tens == 1) {
        switch (ones) {
            case 0:
                numberToWords = numberToWords + "ten";
                break;
            case 1:
                numberToWords = numberToWords + "eleven";
                break;
            case 2:
                numberToWords = numberToWords + "twelve";
                break;
            case 3:
                numberToWords = numberToWords + "thirteen";
                break;
            case 4:
                numberToWords = numberToWords + "fourteen";
                break;
            case 5:
                numberToWords = numberToWords + "fifteen";
                break;
            case 6:
                numberToWords = numberToWords + "sixteen";
                break;
            case 7:
                numberToWords = numberToWords + "seventeen";
                break;
            case 8:
                numberToWords = numberToWords + "eighteen";
                break;
            case 9:
                numberToWords = numberToWords + "nineteen";
                break;
        }
    }
    else {

        switch (tens) {
            case 2:
                numberToWords = numberToWords + "twenty ";
                break;
            case 3:
                numberToWords = numberToWords + "thirty ";
                break;
            case 4:
                numberToWords = numberToWords + "fourty ";
                break;
            case 5:
                numberToWords = numberToWords + "fifty ";
                break;
            case 6:
                numberToWords = numberToWords + "sixty ";
                break;
            case 7:
                numberToWords = numberToWords + "seventy ";
                break;
            case 8:
                numberToWords = numberToWords + "eighty ";
                break;
            case 9:
                numberToWords = numberToWords + "ninety ";
                break;
        }
        switch (ones) {
            case 1:
                numberToWords = numberToWords + "one";
                break;
            case 2:
                numberToWords = numberToWords + "two";
                break;
            case 3:
                numberToWords = numberToWords + "three";
                break;
            case 4:
                numberToWords = numberToWords + "four";
                break;
            case 5:
                numberToWords = numberToWords + "five";
                break;
            case 6:
                numberToWords = numberToWords + "six";
                break;
            case 7:
                numberToWords = numberToWords + "seven";
                break;
            case 8:
                numberToWords = numberToWords + "eight";
                break;
            case 9:
                numberToWords = numberToWords + "nine";
                break;
        }

    }

    alert(numberToWords);

}

else {

    alert("not a 3-digit number!");

}
