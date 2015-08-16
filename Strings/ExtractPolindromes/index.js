var text = "ABBA lamal exe, ememe, harararah, and some other text here that means nothing, oho oho oho"

function extractPolidromes(text) {

    var formatedText = text.replace(/\W+/g, " ");
    var splitText = formatedText.split(" ");
    var i;
    var len = splitText.length;
    var listOfPolindromes = [];

    for (i = 0; i < len; i++) {

        if (splitText[i].split("").join() === splitText[i].split("").reverse().join()) {

            listOfPolindromes.push(splitText[i]);

        }

    }

    return listOfPolindromes;

}

extractPolidromes(text);

