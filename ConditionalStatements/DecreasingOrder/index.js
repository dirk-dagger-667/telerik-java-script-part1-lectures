var firstValue = prompt("enter the first value : ", 0);
var secondValue = prompt("enter the second value : ", 0);
var thirdValue = prompt("enter the third value : ", 0);

if (firstValue == secondValue && secondValue == thirdValue) {

    alert("all are equal");

}
else {

    if (firstValue >= secondValue) {

        if (secondValue >= thirdValue) {

            alert("first : " + firstValue + "\nsecond : " + secondValue + "\nthird : " + thirdValue);

        }
        else {

            if (thirdValue >= firstValue) {

                alert("first : " + thirdValue + "\nsecond : " + firstValue + "\nthird : " + secondValue);

            }
            else {

                alert("first : " + firstValue + "\nsecond : " + thirdValue + "\nthird : " + secondValue);

            }

        }

    }
    else {

        if (firstValue >= thirdValue) {

            alert("first : " + secondValue + "\nsecond : " + firstValue + "\nthird : " + thirdValue);

        }
        else {

            if (thirdValue >= secondValue) {

                alert("first : " + thirdValue + "\nsecond : " + secondValue + "\nthird : " + firstValue);


            }
            else {

                alert("first : " + secondValue + "\nsecond : " + thirdValue + "\nthird : " + firstValue);

            }

        }

    }

}