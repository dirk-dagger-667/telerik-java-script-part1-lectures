(function ArrayOf20IntegersMultBy5() {

    var arrayOfNumbers = new Array(20);
    var len = arrayOfNumbers.length;
    var i;


    for (i = 0; i < len ; i++) {

        arrayOfNumbers[i] = 5 * i;
        console.log(arrayOfNumbers[i]);

    }


})();
