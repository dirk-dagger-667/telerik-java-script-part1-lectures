(function findMaximalSequence () {

    var sequence = [];
    var inputSequence = prompt("enter the sequence, using ', ' between numbers", 0);
    sequence = inputSequence.split(', ');
    var len = sequence.length;
    var counter = 0;
    var biggestCount = 0;
    var mostAccurances = 0;
    
    for (var i = 0; i < len; i++) {

        if (sequence[i] == sequence[i + 1]) {

            counter++;

            if (counter > biggestCount) {

                biggestCount = counter + 1;
                mostAccurances = sequence[i];

            }

        }
        else {

            counter = 0;

        }

    }

    String.prototype.repeat = function (num) {

        return new Array(num + 1).join(this);

    }

    console.log(biggestCount);

    console.log("the longest sequence is :" + (" " + mostAccurances).repeat(biggestCount));

})();