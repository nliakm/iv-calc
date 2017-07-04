var table = document.querySelector('#table');
var selectedCells = table.getElementsByClassName('selected');

var jsonString = '{"defense":{"bug":[{"value":"effective","types":["fire","flying","rock"]},{"value":"noteffective","types":["grass","ground","fighting"]},{"value":"resistant","types":[]}],"dark":[{"value":"effective","types":["bug","fairy","fighting"]},{"value":"noteffective","types":["dark","ghost"]},{"value":"resistant","types":["psychic"]}],"dragon":[{"value":"effective","types":["dragon","fairy","ice"]},{"value":"noteffective","types":["electric","fire","grass","water"]},{"value":"resistant","types":[]}],"electric":[{"value":"effective","types":["ground"]},{"value":"noteffective","types":["electric","flying","steel"]},{"value":"resistant","types":[]}],"fairy":[{"value":"effective","types":["poison","steel"]},{"value":"noteffective","types":["bug","dark","fighting"]},{"value":"resistant","types":["dragon"]}],"fighting":[{"value":"effective","types":["fairy","flying","psychic"]},{"value":"noteffective","types":["bug","dark","rock"]},{"value":"resistant","types":[]}],"fire":[{"value":"effective","types":["ground","rock","water"]},{"value":"noteffective","types":["bug","fairy","fire","grass","ice","steel"]},{"value":"resistant","types":[]}],"flying":[{"value":"effective","types":["electric","rock","ice"]},{"value":"noteffective","types":["bug","fighting","grass"]},{"value":"resistant","types":["ground"]}],"ghost":[{"value":"effective","types":["dark","ghost"]},{"value":"noteffective","types":["bug","poison"]},{"value":"resistant","types":["normal","fighting"]}],"grass":[{"value":"effective","types":["bug","fire","flying","poison","ice"]},{"value":"noteffective","types":["electric","grass","ground","water"]},{"value":"resistant","types":[]}],"ground":[{"value":"effective","types":["ice","grass","water"]},{"value":"noteffective","types":["rock","poison"]},{"value":"resistant","types":["electric"]}],"ice":[{"value":"effective","types":["fire","fighting","rock","steel"]},{"value":"noteffective","types":["ice"]},{"value":"resistant","types":[]}],"normal":[{"value":"effective","types":["fighting"]},{"value":"noteffective","types":[]},{"value":"resistant","types":["ghost"]}],"poison":[{"value":"effective","types":["ground","psychic"]},{"value":"noteffective","types":["bug","grass","fairy","poison","fighting"]},{"value":"resistant","types":[]}],"psychic":[{"value":"effective","types":["bug","dark","ghost"]},{"value":"noteffective","types":["fighting","psychic"]},{"value":"resistant","types":[]}],"rock":[{"value":"effective","types":["grass","ground","steel","fighting","water"]},{"value":"noteffective","types":["fire","normal","flying","poison"]},{"value":"resistant","types":[]}],"water":[{"value":"effective","types":["electric","grass"]},{"value":"noteffective","types":["fire","steel","ice","water"]},{"value":"resistant","types":[]}]}}';
var json = JSON.parse(jsonString);

table.addEventListener('click', function(e) {
  var th = e.target
  var id = e.target.id

  if (th.tagName !== 'TH') {
    return
  }

  if(selectedCells.length == 1) {
    if(th.className == 'selected') {
      deselectTypes(selectedCells[0].id);
      th.className = ''
    } else {
      deselectTypes(selectedCells[0].id);
      selectedCells[0].className = ''
      th.className = 'selected'
      highlightAttTypes(selectedCells[0].id)

      if(id.inlcudes("def")) {
        highlightAttTypes(selectedCells[0].id)
        //highlightAttTypes(selectedCells[1].id)
      }
    }
  // } else if (selectedCells.length == 2) {
  //   if(th.className == 'selected') {
  //     deselectTypes(selectedCells[0].id);
  //     th.className = ''
  //   } else {
  //     selectedCells[1].className = ''
  //     selectedCells[0].className = ''
  //     th.className = 'selected'
  //     if(id.includes("def")) {
  //       highlightAttTypes(selectedCells[0].id)
  //     }
  //
  //   }
  } else {
    th.className = 'selected'
    if(id.includes("def")) {
      highlightAttTypes(selectedCells[0].id)
    }
  }
})

function deselectTypes(e) {

  if(selectedCells.length == 1) {
    var typeString = e.substr(4);
    for(i in json['defense'][typeString]) {
      if(json['defense'][typeString][i].value == "effective") {
        for (j in json['defense'][typeString][i].value) {
          if(json['defense'][typeString][i].types[j] != null) {
            console.log("remove effective: " + json['defense'][typeString][i].types[j]);
            document.getElementById('att-' + json['defense'][typeString][i].types[j]).className = '';
            document.getElementById(typeString + '-' + json['defense'][typeString][i].types[j]).className = '';
          }
        }
      }
      if(json['defense'][typeString][i].value == "noteffective") {
        for (j in json['defense'][typeString][i].value) {
          if(json['defense'][typeString][i].types[j] != null) {
            console.log("remove noteffective: " + json['defense'][typeString][i].types[j]);
            document.getElementById('att-' + json['defense'][typeString][i].types[j]).className = '';
            document.getElementById(typeString + '-' + json['defense'][typeString][i].types[j]).className = '';
          }
        }
      }
      if(json['defense'][typeString][i].value == "resistant") {
        for (j in json['defense'][typeString][i].value) {
          if(json['defense'][typeString][i].types[j] != null) {
            console.log("remove immun: " + json['defense'][typeString][i].types[j]);
            document.getElementById('att-' + json['defense'][typeString][i].types[j]).className = '';
            document.getElementById(typeString + '-' + json['defense'][typeString][i].types[j]).className = '';                
          }
        }
      }
    }
  }
}

function highlightAttTypes(e) {
  var typeString = e.substr(4);
  console.log("Defensive type: " + typeString);
  for(i in json['defense'][typeString]) {
    if(json['defense'][typeString][i].value == "effective") {
      for (j in json['defense'][typeString][i].value) {
        if(json['defense'][typeString][i].types[j] != null) {
          console.log("Effektiv: " + json['defense'][typeString][i].types[j]);
          document.getElementById('att-' + json['defense'][typeString][i].types[j]).className = 'effective';
          document.getElementById(typeString + '-' + json['defense'][typeString][i].types[j]).className = 'effective';
        }
      }
    }

    if(json['defense'][typeString][i].value == "noteffective") {
      for (j in json['defense'][typeString][i].value) {
        if(json['defense'][typeString][i].types[j] != null) {
          console.log("Nicht effektiv: " + json['defense'][typeString][i].types[j]);
          document.getElementById('att-' + json['defense'][typeString][i].types[j]).className = 'noteffective';
          document.getElementById(typeString + '-' + json['defense'][typeString][i].types[j]).className = 'noteffective';
        }
      }
    }

    if(json['defense'][typeString][i].value == "resistant") {
      for (j in json['defense'][typeString][i].value) {
        if(json['defense'][typeString][i].types[j] != null) {
          console.log("Immun: " + json['defense'][typeString][i].types[j]);
          document.getElementById('att-' + json['defense'][typeString][i].types[j]).className = 'immun';
          document.getElementById(typeString + '-' + json['defense'][typeString][i].types[j]).className = 'immun';
        }
      }
    }
  }
}


  // for (i in json.defense.fire) {
  //     console.log("Wert:" + json.defense.fire[i].value);
  //     for (j in json.defense.fire[i].value) {
  //         console.log(json.defense.fire[i].types[j]);
  //     }
  // }

  function compareTypes(type1, type2) {
    //Typ effektiv und 1 und 2 sind identisch
    if(document.getElementById('att-' + type1).className == "effective"
    && document.getElementById('att-' + type2).className == "effective"
    && document.getElementById('att-' + type1).className == document.getElementById('att-' + type2)) {
      document.getElementById('att-' + type1).className = "supereffective";
    }
    //Typ effektiv aber 1 und 2 nicht identisch
    else if(document.getElementById('att-' + type1).className == "effective"
    && document.getElementById('att-' + type2).className == "effective"
    && document.getElementById('att-' + type1).className != document.getElementById('att-' + type2)) {
      document.getElementById('att-' + type1).className = "effective";
    }
    //1 und 2 effektiv und nicht effektiv oder umgekehrt und identisch
    else if((document.getElementById('att-' + type1).className == "effective"
    && document.getElementById('att-' + type2).className == "noteffective"
    && document.getElementById('att-' + type1).className == document.getElementById('att-' + type2))
    || (document.getElementById('att-' + type1).className == "noteffective"
    && document.getElementById('att-' + type2).className == "effective"
    && document.getElementById('att-' + type1).className == document.getElementById('att-' + type2))) {
      document.getElementById('att-' + type1).className == "";
    }
}
