var text = "don4o.minkov@telerik.com is a trainer of web technologies, but his two colleagues - nikolai.kostov@telerik.com and pavel.kolev@telerik.com are C# trainers.";

function extractEMailsFromTextToArray(text) {

    var emailIndex = text.indexOf("@");
    var listOfEmails = [];
    var i = 0,
        j = 0;
    var len = text.length;

    while (emailIndex != -1) {
    

        while((text[emailIndex + i] !== " ") && (emailIndex + i < len)) {

            i++;

        }

        while((text[emailIndex - j] !== " ") && (emailIndex - j >= 0)) {

            j++;

        }

        listOfEmails.push(text.substring(emailIndex - j + 1, i + emailIndex));

        i = 0;
        j = 0;

        emailIndex = text.indexOf("@", emailIndex + 1);

    }
    

    return listOfEmails;
}


extractEMailsFromTextToArray(text);