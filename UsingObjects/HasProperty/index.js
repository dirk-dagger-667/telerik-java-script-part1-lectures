function hasProperty(obj, prop) {

    for (var i in obj) {

        if (i == prop) {

            return true;

        }

    }

    return false;

}