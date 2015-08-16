function test() {

    var people = [{ name: ' Kolyo Terorista ', age: 50 },
              { name: ' Gosho Traktorista ', age: 60 },
              { name: ' Mitio Bagerista ', age: 55 }];
    var template = document.getElementById("list-item").innerHTML;
    var peopleList = generateList(people, template);
    document.write(peopleList);
}

function generateList(ppl, tmpl) {

    tmpl = new String(tmpl); //parse to string
    tmpl = tmpl.replace(/<strong>/g, '<li><strong>'); //add <li> tag
    tmpl = tmpl.replace(/<\/span>/g, '</span></li>'); //add</li> tag
    var list = new String('<ul>');//string for keeping the result

    for (var i in ppl) {

        var currentLI = tmpl.replace('-{name}-', ppl[i].name);
        currentLI = currentLI.replace('-{age}-', ppl[i].age);
        list += currentLI;
    }

    list += '</ul>';
    return list;
}