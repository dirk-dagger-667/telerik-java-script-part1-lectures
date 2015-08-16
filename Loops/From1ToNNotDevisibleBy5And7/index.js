(function numbersFrom1ToN() {

    var i, g;
    var numberN = prompt("enter the number : ", 0);

    if (numberN > 0) {

        for (i = 1; i <= numberN; i++) {

            if (i % 35 == 0) {

                continue;

            }
            else {

                console.log(i);

            }

        }

    }
    else {

        if (numberN < 1) {

            for (i = 1; i >= numberN; i--) {

                if (i % 35 == 0) {

                    continue;

                }
                else {

                    console.log(i);

                }

            }

        }
    }

})();