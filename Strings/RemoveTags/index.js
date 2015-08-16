var htmlText = "<html><head><title>Sample site</title></head><body><div>text<div>more text</div>and more...</div>in body</body></html>";

function removeTags(htmlText) {

    var textArray = htmlText.split("");

    var indexOfOpen = htmlText.indexOf("<");
    var indexOfClose = htmlText.indexOf(">");

    while((indexOfClose != -1) && (indexOfOpen != -1)){

        for (var i = indexOfOpen; i <= indexOfClose; i++) {

            textArray[i] = "";

        }

        indexOfOpen = htmlText.indexOf("<", indexOfOpen + 1);
        indexOfClose = htmlText.indexOf(">", indexOfClose + 1);

    }

    return textArray.join().replace(/,/g, "");

}

console.log(removeTags(htmlText));


