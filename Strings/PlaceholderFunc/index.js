function stringFormat() {

    var iParametersCount;
    var sResultStr;
    var sMatch;
    var sMatchParam;

    if (arguments.length === 1) {

        return arguments[0];

    }
    else {

        iParametersCount = arguments.length - 1;
        sResultStr = arguments[0];

        for (i = 0; i < iParametersCount; i++) {

            sMatchParam = "\\{" + i + "\\}";
            sMatch = new RegExp(sMatchParam, "g");
            sResultStr = sResultStr.replace(sMatch, arguments[parseInt(i) + 1]);

        }

        return sResultStr;

    }
}