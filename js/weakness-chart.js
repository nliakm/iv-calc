var table = document.querySelector('#table');
var selectedCells = table.getElementsByClassName('selected');

var jsonString = '{"defense":{"bug":[{"value":"effective","types":["fire","flying","rock"]},{"value":"noteffective","types":["grass","ground","fight"]},{"value":"resistant","types":[]}],"dark":[{"value":"effective","types":["bug","fairy","fight"]},{"value":"noteffective","types":["dark","ghost"]},{"value":"resistant","types":["psycho"]}],"dragon":[{"value":"effective","types":["dragon","fairy","ice"]},{"value":"noteffective","types":["electric","fire","grass","water"]},{"value":"resistant","types":[]}],"electric":[{"value":"effective","types":["ground"]},{"value":"noteffective","types":["electric","flying","steel"]},{"value":"resistant","types":[]}],"fairy":[{"value":"effective","types":["poison","steel"]},{"value":"noteffective","types":["bug","dark","fight"]},{"value":"resistant","types":["dragon"]}],"fighting":[{"value":"effective","types":["fairy","flying","psycho"]},{"value":"noteffective","types":["bug","dark","rock"]},{"value":"resistant","types":[]}],"fire":[{"value":"effective","types":["ground","rock","water"]},{"value":"noteffective","types":["bug","fairy","fire","grass","ice","steel"]},{"value":"resistant","types":[]}],"ghost":[{"value":"effective","types":["dark","ghost"]},{"value":"noteffective","types":["bug","poison"]},{"value":"resistant","types":["normal","fight"]}],"grass":[{"value":"effective","types":["bug","fire","flying","poison","ice"]},{"value":"noteffective","types":["electric","grass","ground","water"]},{"value":"resistant","types":[]}],"ground":[{"value":"effective","types":["ice","grass","water"]},{"value":"noteffective","types":["rock","poison"]},{"value":"resistant","types":["electric"]}],"normal":[{"value":"effective","types":["fighting"]},{"value":"noteffective","types":[]},{"value":"resistant","types":["ghost"]}],"poison":[{"value":"effective","types":["ground","psycho"]},{"value":"noteffective","types":["bug","grass","fairy","poison","fight"]},{"value":"resistant","types":[]}],"psychic":[{"value":"effective","types":["bug","dark","ghost"]},{"value":"noteffective","types":["fight","psycho"]},{"value":"resistant","types":[]}],"rock":[{"value":"effective","types":["grass","ground","steel","fight","water"]},{"value":"noteffective","types":["fire","normal","flying","poison"]},{"value":"resistant","types":[]}],"water":[{"value":"effective","types":["electric","grass"]},{"value":"noteffective","types":["fire","steel","ice","water"]},{"value":"resistant","types":[]}]}}';
var json = JSON.parse(jsonString);

table.addEventListener('click', function(e) {
  var th = e.target
  var id = e.target.id

  if (th.tagName !== 'TH') {
    return
  }

  if(selectedCells.length == 1) {
    if(th.className == 'selected') {
      th.className = ''
    } else {
      th.className = 'selected'
      if(id.inlcudes("def")) {
        testJSON(selectedCells[0].id)
        testJSON(selectedCells[1].id)
      }
    }
  }else if (selectedCells.length == 2) {
    if(th.className == 'selected') {
      th.className = ''
    } else {
      selectedCells[0].className = ''
      selectedCells[0].className = ''
      th.className = 'selected'
      if(id.includes("def")) {
        testJSON(selectedCells[0].id)
      }

    }
  } else {
    th.className = 'selected'
    if(id.includes("def")) {
      testJSON(selectedCells[0].id)
    }
  }
})

function testJSON(e) {
  var typeString = e.substr(4);
  console.log(typeString);
  // console.log(json['defense'][typeString][0].value);
  for(i in json['defense'][typeString]) {
    if(json['defense'][typeString][i].value == "effective") {
      for (j in json['defense'][typeString][i].value) {
        if(json['defense'][typeString][i].types[j] != null) {
          document.getElementById('att-' + json['defense'][typeString][i].types[j]).className = 'effective'
          console.log(json['defense'][typeString][i].types[j]);
        }
      }
    }

    if(json['defense'][typeString][i].value == "noteffective") {
      for (j in json['defense'][typeString][i].value) {
        if(json['defense'][typeString][i].types[j] != null) {
          document.getElementById('att-' + json['defense'][typeString][i].types[j]).className = 'noteffective'
          console.log(json['defense'][typeString][i].types[j]);
        }
      }
    }

    if(json['defense'][typeString][i].value == "resistant") {
      for (j in json['defense'][typeString][i].value) {
        if(json['defense'][typeString][i].types[j] != null) {
          document.getElementById('att-' + json['defense'][typeString][i].types[j]).className = 'immun'
          console.log(json['defense'][typeString][i].types[j]);
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

}
