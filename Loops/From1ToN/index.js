(function index() {

    var i, g;
    var numberN = prompt("enter the number N : ", 0);

    if (numberN > 0) {

        for (i = 1; i <= numberN; i++) {

            console.log(i);

        }

    }
    else {

        for (g = 1; g >= numberN; g--) {

            console.log(g);

        }

    }
})();