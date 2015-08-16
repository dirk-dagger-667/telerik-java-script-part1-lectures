(function MinAndMaxInDocWindNav() {

    var arrayOfProperties = [];

    function propertiesToArray(object) {

        for (var property in object) {

            arrayOfProperties.push(property);

        }

    }

    function printPropertiesFromArray() {

        for (var i = 0; i < arrayOfProperties.length; i++) {

            console.log(arrayOfProperties[i]);

        }

    }

    propertiesToArray(document);
    arrayOfProperties.sort();
    printPropertiesFromArray();
    console.log("\n")
    propertiesToArray(window);
    arrayOfProperties.sort();
    printPropertiesFromArray();
    console.log("\n")
    propertiesToArray(navigator);
    arrayOfProperties.sort();
    printPropertiesFromArray();
    console.log("\n")

})();