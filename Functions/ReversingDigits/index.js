function reverseDigits(number) {

    var numberString = number.toString();
    var reverse = "";
    var len = numberString.length;


    for (var i = 0; i < len; i++) {

        reverse += numberString[len - i - 1];

    }

    return reverse;

}

console.log(reverseDigits(356));