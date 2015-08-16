var strings = prompt("enter the text you wish", 0);


String.prototype.reverse = function () {

    var len = strings.length;
    var reverseString = [];

    for (var i = 0; i < len; i++) {

        reverseString[i] = this[len - 1 - i];

    }
    
    return reverseString.join("");
}

console.log(strings.reverse());