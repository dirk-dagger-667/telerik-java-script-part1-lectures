var htmlDocAsString = '<p>Please visit <a href="http://academy.telerik. com">our site</a> to choose a training course. Also visit <a href="www.devbg.org">our forum</a> to discuss the courses.</p>';

function replaceLinkWithURL(htmlDocAsString) {

    var replacedString = htmlDocAsString.replace(/<a href="/g, "[URL=");
    replacedString = replacedString.replace(/">/g, "]");
    replacedString = replacedString.replace(/<\/a>/g, "[URL]");

    return replacedString;
}

console.log(replaceLinkWithURL(htmlDocAsString));