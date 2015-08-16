var sequence = prompt("enter the sequence of integers using the ' ,' format after each integer!", 0);
sequence = sequence.split(", ");
var len = sequence.length;
var i;

for (i = 0; i < len; i++) {

    sequence[i] = parseInt(sequence[i]);

}

var position = prompt("enter the position of the element that you want to check if it's bigger than ", 0);
position = parseInt(position);

isBiggerFromDirectNeighbours(sequence, position);

function isBiggerFromDirectNeighbours(sequence, position) {

    var len = sequence.length;

    if (position == 0) {

        if ((sequence[position] !== null && sequence[position] !== undefined && sequence[position] !== "")
        && (sequence[position + 1] !== null && sequence[position + 1] !== undefined && sequence[position + 1] !== "")) {

            if (sequence[position] > sequence[position + 1]) {

                console.log("the element is bigger than it's direct neighbour!");

            }
            else {

                console.log("the element is smaller than it's direct neighbour!");

            }

        }
        else {

            console.log("the element or it's neigbour/s is/are not a valid argument(null, undefined, '') ");

        }

    }
    else if (position == len - 1) {

        if ((sequence[position] !== null && sequence[position] !== undefined && sequence[position] !== "")
        && (sequence[position - 1] !== null && sequence[position - 1] !== undefined && sequence[position - 1] !== "")) {

            if (sequence[position] > sequence[position - 1]) {

                console.log("the element is bigger than it's direct neighbour!");

            }
            else {

                console.log("the element is smaller than it's direct neighbour!");

            }

        }
        else {

            console.log("the element or it's neigbour/s is/are not a valid argument(null, undefined, '') ");

        }

    }
    else {

        if ((sequence[position] !== null && sequence[position] !== undefined && sequence[position] !== "")
        && (sequence[position - 1] !== null && sequence[position - 1] !== undefined && sequence[position - 1] !== "")
        && (sequence[position + 1] !== null && sequence[position + 1] !== undefined && sequence[position + 1] !== "")) {

            if (sequence[position] > sequence[position - 1] && sequence[position] > sequence[position + 1]) {

                console.log("the element is bigger than it's direct neighbour!");

            }
            else {

                console.log("the element is smaller than it's direct neighbour!");

            }

        }
        else {

            console.log("the element or it's neigbour/s is/are not a valid argument(null, undefined, '') ");

        }

    }

}