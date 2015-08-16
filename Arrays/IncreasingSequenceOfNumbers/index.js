(function increasingSequenceOfNumbers() {

    var sequence = [];
    var inputSequence = prompt("enter the sequence, using ', ' between numbers", 0);
    sequence = inputSequence.split(', ');
    var len = sequence.length;
    var counter = 1;
    var biggestCount = 0;
    var positionEnd = 0;
    var sequenceToString = "";

    for (var i = 0; i < len - 1; i++) {

        if (sequence[i] < sequence[i + 1]) {

            counter++;

            if (counter > biggestCount) {

                biggestCount = counter;
                positionEnd = i + 1;

            }

        }
        else {

            counter = 1;

        }

    }

    console.log("the longest sequence is : ");

    for (var j = positionEnd - biggestCount + 1; j <= positionEnd; j++) {

        sequenceToString += sequence[j] + " ";

    }

    console.log(sequenceToString);

})();