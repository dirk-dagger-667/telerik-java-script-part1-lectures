(function findMinAndMax() {

    var sequenceOfNumbers = [];
    var flag = true;
    var counter = 0;
    var element;

    alert("enter the numbers! \nFor the sequence to stop write 'stop'!");

    while (flag == true) {

        counter++;
        element = prompt("enter the " + counter + " number : ", 0);


        if (element == "stop") {

            break;
            
        }

        sequenceOfNumbers.push(element);

    }

    for (var i = 0; i < sequenceOfNumbers.length; i++) {

        alert(sequenceOfNumbers[i]);

    }

    sequenceOfNumbers.sort(function sortFunction (a, b) { return a - b; });



    alert("minimum value = " + sequenceOfNumbers[0] + "\nmaximum value = " + sequenceOfNumbers[sequenceOfNumbers.length - 1]);

})();