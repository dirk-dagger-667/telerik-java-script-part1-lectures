function getMostReaccuringNumber(sequence, givenNumber){

    var count = 0;
    var i;
    var len = sequence.length;

    for (i = 0; i < len; i++) {

        if (sequence[i] == givenNumber) {

            count++;

        }

    }

    return count;

}

function testGetMostReaccuringNumber() {

    var sequence = [1, 20, 3, 10, 9, 1, 1, 1, 20, 30, 15, 18 ,19 ,2, 4, 4, 4];
    var numberCheck = 1;
    var correctCount = 4;

    if (getMostReaccuringNumber(sequence, numberCheck) == correctCount) {

        console.log("Everything is fine!");

    }
    else {

        console.log("There's something fishy in Denmark!");

    }

}