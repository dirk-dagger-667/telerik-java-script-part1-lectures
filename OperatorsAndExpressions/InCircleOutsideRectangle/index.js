var x = prompt("enter the x coordinate", 0);
var y = prompt("enter the y coordinate", 0);

alert(((Math.sqrt((x - 1) * (x - 1) + (y - 1) * (y - 1)) <= 2) && ((y > 1) || (y < -1))) ? 
    "the point is in the circle, but outside of the rectangle" :
    "have no idea where the point is, but it definetely doesn't comply to the specified rule, to be inside the circle, but outside the rectangle");