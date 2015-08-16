var arrayVariable = ["Az", "Ti", , undefined, 1, null, 1.2, -123.123];

for (var i = 0; i < arrayVariable.length; i++) {
    console.log(arrayVariable[i]);
}

var booleanTrue = true;
var booleanFalse = false;

console.log("\n" + booleanTrue);
console.log(booleanFalse);

var integer = 15;
console.log("\n" + integer);
integer = -32;
console.log(integer);

var floatingPoint = -232.32;
console.log("\n" + floatingPoint);
floatingPoint = 123.23;
console.log(floatingPoint);


var name = "Joro";
function getSubspecies(value) {
    if (value = "leopard"){

        return value;

    }
    else{
        return "Fuck Off!!!"
    }
    
}
var animal = { species: "cat", subspecies: getSubspecies("leopard"), name: name };
console.log("\n" + animal.species);
console.log(animal.subspecies);
console.log(animal.name);

var string = "\nThis is here \nthat is on another line!"
console.log(string);