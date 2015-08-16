var sequence = prompt("enter the sequence of integers using the ' ,' format after each integer!", 0);
sequence = sequence.split(", ");
var len = sequence.length;
var i;

for (i = 0; i < len; i++) {

    sequence[i] = parseInt(sequence[i]);

}

function isBiggerFromDirectNeighbours(sequence, position) {

    var flag;

    if (position == 0) {

        if ((sequence[position] !== null && sequence[position] !== undefined && sequence[position] !== "")
        && (sequence[position + 1] !== null && sequence[position + 1] !== undefined && sequence[position + 1] !== "")) {

            if (sequence[position] > sequence[position + 1]) {

                flag = true;
                return flag;

            }
            else {

                flag = false;
                return flag;

            }

        }
        else {

            alert("the element or it's neigbour/s is/are not a valid argument(null, undefined, '') ");

        }

    }
    else if (position == len - 1) {

        if ((sequence[position] !== null && sequence[position] !== undefined && sequence[position] !== "")
        && (sequence[position - 1] !== null && sequence[position - 1] !== undefined && sequence[position - 1] !== "")) {

            if (sequence[position] > sequence[position - 1]) {

                flag = true;
                return flag;

            }
            else {

                flag = false;
                return flag;

            }

        }
        else {

            alert("the element or it's neigbour/s is/are not a valid argument(null, undefined, '') ");

        }

    }
    else {

        if ((sequence[position] !== null && sequence[position] !== undefined && sequence[position] !== "")
        && (sequence[position - 1] !== null && sequence[position - 1] !== undefined && sequence[position - 1] !== "")
        && (sequence[position + 1] !== null && sequence[position + 1] !== undefined && sequence[position + 1] !== "")) {

            if (sequence[position] > sequence[position - 1] && sequence[position] > sequence[position + 1]) {

                flag = true;
                return flag;

            }
            else {

                flag = false;
                return flag;

            }

        }
        else {

            alert("the element or it's neigbour/s is/are not a valid argument(null, undefined, '') ");

        }

    }

}

function findFirstElemBiggerThanNeighbours(sequence) {

    for (i = 0; i < len; i++) {

        if (isBiggerFromDirectNeighbours(sequence, i) === true) {

            return i;
            break;

        }
        else {

            continue;

        }
        
    }

    alert("none of the elements is bigger than it's neighbours!");

}