var link = "http://www.devbg.org/forum/index.php ";

function parseURL(link) {

    var protEnd = link.indexOf(":"),
        serverStart = link.indexOf("//") + 2,
        serverEnd = link.indexOf("/", serverStart),
        resourceStart = serverEnd + 1,
        resourceEnd = link.length - 1,
        protocolString = '"' + link.substring(0, protEnd) + '"',
        serverString = '"' + link.substring(serverStart, serverEnd) + '"',
        resourceString = '"' + link.substring(resourceStart, resourceEnd) + '"';

        return {

            protocol: protocolString,
            server: serverString,
            resource: resourceString,
            toString: function() {

                return "protocol : " + this.protocol + "\r\n" + "server : " + this.server + "\r\n" + "resource : " + this.resource;

            }

        };

}

var URL = parseURL(link);
console.log(URL.toString());