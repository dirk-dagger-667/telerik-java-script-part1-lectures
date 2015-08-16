(function TestTrigometry() {

    var point1 = Point(1, 2);
    var point2 = Point(1, 3);

    console.log(point1.toString());
    console.log(point2.toString());

    var line = Line(point1, point2);

    console.log(line.toString());
})();

function Point(x, y) {

    return {

        x: x,
        y: y,
        toString: function (){

            return this.x + ' ' + this.y;
        }
    }
}

function calcDistanceBetweenPoints(startPoint, endPoint) {

    return (Math.sqrt((endPoint.x - startPoint.x) * (endPoint.x - startPoint.x) + (endPoint.y - startPoint.y) * (endPoint.y - startPoint.y)));

}

function Line(startPoint, endPoint) {

    return {

        startPoint: startPoint,
        endPoint: endPoint,
        Length: calcDistanceBetweenPoints(startPoint, endPoint),
        toString: function () {

            return this.startPoint + '\r\n' + this.endPoint;

        }
    }
}

function isTrianglePossible(firstLine, secondLine, thirdLine) {

    if (((first.Length + secondLine.Length) > thirdLine.Length)
        && ((secondLine.Length + thirdLine.Length) > firstLine.Length)
        && ((firstLine.Length + thirdLine.Length) > secondLine.Length)) {

        return true;

    }
    else {

        return false;

    }
}
