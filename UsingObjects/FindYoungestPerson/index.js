function findYoungest(arr) {

    var youngestPersonPosition = 0;
    var youngestPersonAge = 200;

    for (var i in arr) {

        if (arr[i].age < youngestPersonAge) {

            youngestPersonAge = arr[i].age;
            youngestPersonPosition = i;

        }
    }
}