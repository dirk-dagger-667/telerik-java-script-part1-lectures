function getWordCount(text, word, isCaseSensitive) {

    function getWordCountCaseInsensitive(word) {

        var charCount = 0;
        var wordCount = 0;
        var textLower = text.toLowerCase();
        var wordLower = word.toLowerCase();
        var len = textLower.length;
        var wordLen = wordLower.length;

        for (var i = 0; i < len; i++) {

            if (textLower[i] == wordLower[charCount]) {

                charCount++;

            }
            else if (textLower[i] != wordLower[charCount]) {

                charCount = 0;

            }
            if (charCount == wordLen - 1) {

                wordCount++;

            }

        }

        return wordCount;

    }

    function getWordCountCaseSensitive(word) {

        var charCount = 0;
        var wordCount = 0;
        var len = text.length;
        var wordLen = word.length;

        for (var i = 0; i < len; i++) {

            if (text[i] == word[charCount]) {

                charCount++;

            }
            else if (text[i] != word[charCount]) {

                charCount = 0;

            }
            if (charCount == wordLen - 1) {

                wordCount++;

            }
        }

        return wordCount;

    }

    switch (arguments.length) {
        case 2:
            return getWordCountCaseInsensitive(word);
            break;
        case 3:
            if (isCaseSensitive == true) {

                return getWordCountCaseSensitive(word);

            }
            else {

                return getWordCountCaseInsensitive(word);

            }

    }

}

var wordCount = getWordCount("ha ha ha!", "ha");
console.log(wordCount + "\n");
wordCount = getWordCount("ha ha ha!", "ha", false);
console.log(wordCount + "\n");
wordCount = getWordCount("ha ha ha!", "ha", true);
console.log(wordCount + "\n");