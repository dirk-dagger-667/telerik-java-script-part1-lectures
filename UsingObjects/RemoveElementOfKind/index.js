Array.prototype.remove = function (element) {

    var arr = [];

    for (var i in this) {

        if (element !== this[i]) {

            arr.push(this[i]);

        }

    }

    return arr;

}

var array = [1, 1, 1, 2, 3, 4, 5, 6, 7, 8, 1, 1, 1, "1"];
var arr = array.remove(1);

console.log(arr);