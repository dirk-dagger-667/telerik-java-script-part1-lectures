(function CompareCharArrays() {

    var arrayOne = [];
    var arrayTwo = [];
    var arrayOneInput = prompt("enter the first array using the format ', ' between characters", null);
    var arrayTwoInput = prompt("enter the second array using the format ', ' between characters", null);
    arrayOne = arrayOneInput.split(', ');
    arrayTwo = arrayTwoInput.split(', ');
    var lenOne = arrayOne.length;
    var lenTwo = arrayTwo.length;
    arrayOne.sort();
    arrayTwo.sort();


    if (lenOne > lenTwo) {

        console.log("the first array is bigger than the second one!");

    }
    if (lenOne < lenTwo) {

        console.log("the second array is bigger than the first one!");

    }
    else {

        for (var i = 0; i < lenOne; i++) {

            if (arrayOne[i] > arrayTwo[i]) {

                console.log("the first array is larger than the second one!");
                return;

            }
            if (arrayOne[i] < arrayTwo[i]) {

                console.log("the second array is larger than the first one");
                return;

            }

        }

    }

    console.log("the two arrays are equal!");

})();