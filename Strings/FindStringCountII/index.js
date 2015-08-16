
String.prototype.stringCount = function (text, sub) {

    text = text.toLowerCase();
    sub = sub.toLowerCase();
    var indexOfSub = text.indexOf(sub);
    var count = 0;

    while (indexOfSub > -1) {

        count++;
        indexOfSub = text.indexOf(sub, indexOfSub + 1);
    }

    return count;
}


