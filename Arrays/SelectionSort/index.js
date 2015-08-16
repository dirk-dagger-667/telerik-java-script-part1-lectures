(function selectionSort() {

    var sequence = [];
    var inputSequence = prompt("enter the sequence, using ', ' between numbers", 0);
    sequence = inputSequence.split(', ');
    var len = sequence.length;
    var minPosition = 0;
    var memoryOFValue = 0;

    for (var l = 0; l < len; l++) {

        sequence[l] = parseFloat(sequence[l]);

    }

    for (var i = 0; i < len - 1; i++) {

        minPosition = i;
        memoryOFValue = sequence[minPosition];

        for (var j = i + 1; j < len; j++) {

            if (sequence[j] < sequence[minPosition]) {

                minPosition = j;

            }

        }

        if (minPosition != j) {

            sequence[i] = sequence[minPosition];
            sequence[minPosition] = memoryOFValue;

        }

    }

    for (var k = 0; k < len; k++) {

        console.log(sequence[k]);

    }

})();