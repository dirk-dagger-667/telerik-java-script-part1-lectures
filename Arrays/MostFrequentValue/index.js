(function mostFrequentValue() {

    var sequence = [];
    var inputSequence = prompt("enter the sequence, using ', ' between numbers", 0);
    sequence = inputSequence.split(', ');
    var len = sequence.length;
    var counter = 0;
    var biggestCount = 0;
    var mostFrequentValue = 0;

    for (var l = 0; l < len; l++) {

        sequence[l] = parseFloat(sequence[l]);

    }

    for (var i = 0; i < len; i++) {

        for (var j = i; j < len; j++) {

            if (sequence[i] == sequence[j]) {

                counter++;

                if (counter > biggestCount) {

                    biggestCount = counter;
                    mostFrequentValue = sequence[i];

                }

            }

        }

        counter = 0;

    }

    console.log(mostFrequentValue + " ->" + biggestCount + " times");

})();