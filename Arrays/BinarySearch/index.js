function binarySearch() {

    var sequence = [];
    var inputSequence = prompt("enter the sequence, using ', ' between numbers", 0);
    sequence = inputSequence.split(', ');
    var key = prompt("enter the key for seaching : ", 0);
    key = parseFloat(key);
    var len = sequence.length;
    var min = 0;
    var max = (len - 1);
    var middle = 0;
    var position = -1;
    var l;

    for (l = 0; l < len; l++) {

        sequence[l] = parseFloat(sequence[l]);

    }

    sequence.sort(function (a, b) { return a - b });

    while (min < max) {

        middle = (min + ((max - min) / 2)) | 0;

        if (sequence[middle] === key) {

            position = middle;
            break;

        }
        else if (sequence[middle] < key) {

            min = middle + 1;

        }
        else {

            max = middle - 1;

        }

    }

    if (position == -1) {

        console.log("There is no such value in the sequence!!!");

    }
    else {

        console.log(position);

    }

};

binarySearch();