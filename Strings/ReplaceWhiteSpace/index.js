var text = "text text text text text text text  text   text, text!!!!! !!!! ! ";

function replaceWhiteSpaces(text) {

    text = text.replace(/ /g, '$nbsp');
    return text;
}

console.log(replaceWhiteSpaces(text));