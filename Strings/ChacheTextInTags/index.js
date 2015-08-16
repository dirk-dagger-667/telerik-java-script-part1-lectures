var text = "We are <mixcase>living</mixcase> in a <upcase>yellow submarine</upcase>. We <mixcase>don't</mixcase> have <lowcase>anything</lowcase> else.";


function textChangeCase(str, start, end) {

    var changeCase = "";
    var index = 0;

    while (str.indexOf(start) != -1) {

        if (start === "<upcase>") {

            changeCase = str.substr(str.indexOf(start) + 8, str.indexOf(end) - 8 - str.indexOf(start));
            str = str.replace(str.substr(str.indexOf(start), str.indexOf(end) + 9 - str.indexOf(start)), changeCase.toUpperCase());
        }
        else if (start === "<lowcase>") {

            changeCase = str.substr(str.indexOf(start) + 9, str.indexOf(end) - 9 - str.indexOf(start));
            str = str.replace(str.substr(str.indexOf(start), str.indexOf(end) + 10 - str.indexOf(start)), changeCase.toLowerCase());
        }
    }

    return str;
}

function textMixCase(str) {

    var start = "<mixcase>";
    var end = "</mixcase>";
    var index = 0;

    while (str.indexOf(start) != -1) {

        changeCase = (str.substr(str.indexOf(start) + 9, str.indexOf(end) - 9 - str.indexOf(start))).toLowerCase();

        for (var i = 0; i < changeCase.length / 2; i++) {

            index = Math.floor(Math.random() * (changeCase.length));
            changeCase = changeCase.replace(changeCase[index], changeCase[index].toUpperCase());
        }

        str = str.replace(str.substr(str.indexOf(start), str.indexOf(end) + 10 - str.indexOf(start)), changeCase);
    }

    jsConsole.writeLine(str);
}