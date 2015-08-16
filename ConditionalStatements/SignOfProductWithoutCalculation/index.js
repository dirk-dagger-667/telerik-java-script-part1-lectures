var firstMultiple = prompt("enter the first multiple : ", 0);
var secondMultiple = prompt("enter the second multiple : ", 0);
var thirdMultiple = prompt("enter the third multiple : ", 0);

if (firstMultiple == 0 || secondMultiple == 0 || thirdMultiple == 0) {
    alert(0);
}
else {
    if (firstMultiple > 0) {

        if (secondMultiple > 0) {

            if (thirdMultiple > 0) {
                alert("the product is positive");
            }
            else {
                alert("the product is negative");
            }
        }
        else {

            if (thirdMultiple > 0) {
                alert("the product is negative");
            }
            else {
                alert("the product is positive");
            }
        }

    }
    else {

        if (secondMultiple > 0) {

            if (thirdMultiple > 0) {
                alert("the product is negative");
            }
            else {
                alert("the product is positive");
            }
        }
        else {

            if (thirdMultiple > 0) {
                alert("the product is positive");
            }
            else {
                alert("the product is negative");
            }
        }
    }
}
