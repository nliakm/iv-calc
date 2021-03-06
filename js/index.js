$(document).ready(function() {
  function skillSet() {
    $('.bar-info').each(function() {
      var att = 2.71;
      var def = 3.96;
      var sta = 5.1;
      var cp = 3670;
      total = $(this).data("total");
      if(this.className == 'bar-info att') {
        total = Math.round(total / att);
      } else if(this.className == 'bar-info def') {
        total = Math.round(total / 3.96);
      } else if(this.className == 'bar-info sta') {
        total = Math.round(total / 5.1);
      } else if(this.className == 'bar-info cp') {
        total = Math.round(total / 36.70);
      } else {
        total = 100;
      }
      // $(this).attr('data-total',total.toString());
      $(this).css("width", total + "%");
    });
    // Iterate over each element w/ the class percent.  Using
    // jQuery's $(this) will allow us to interact w/ each specific
    // object in the loop.  Then use jQuery's super awesome animate method
    // to implement a counter on each .percent element, which will "count"
    // up incrementally until it reaches the number inside the percent span,
    // aka it's "ceiling".
    /*
    $('.bar-info.att').each(function() {
      var $this = $(this).data("total");
      $({
        Counter: 10
      }).animate({
        Counter: $this.text()
      }, {
        duration: 3000,
        easing: 'swing',
        step: function() {
          $this.text(Math.ceil(this.Counter));
          //$this.text;
        }
      });
    });*/
  };
  // Invoke our skillSet function inside a setTimeout,
  // to create a short delay before the animation begins.
  setTimeout(skillSet, 1000);
});

function openMoveInfos(element) {
  if(element.id == "quick-move-1") {
    if(document.getElementById("quick-move-info-1").style.display == "none") {
      document.getElementById("quick-move-info-1").style.display = "block";
    } else {
      document.getElementById("quick-move-info-1").style.display = "none";
    }
  } else if(element.id == "quick-move-2") {
    if(document.getElementById("quick-move-info-2").style.display == "none") {
      document.getElementById("quick-move-info-2").style.display = "block";
    }  else {
      document.getElementById("quick-move-info-2").style.display = "none";
    }
  }
}

function setTeamRating(element) {
  if(element.id == 'team-blue' && $(element).is(":checked")) {
    document.getElementById('team-selection').options[1].text = 'Dein (Pokémon Name) ist insgesamt einfach erstaunlich. Wirklich ein atemberaubendes Exemplar!';
    document.getElementById('team-selection').options[2].text = 'Dein (Pokémon Name) ist mir insgesamt wirklich aufgefallen.';
    document.getElementById('team-selection').options[3].text = 'Dein (Pokémon Name) ist insgesamt ein gutes Pokémon.';
    document.getElementById('team-selection').options[4].text = 'Dein (Pokémon Name) wird im Kampf insgesamt wahrscheinlich keine großen Fortschritte machen.';
    document.getElementById('image-mystic').style.display = "block";
    document.getElementById('image-instinct').style.display = "none";
    document.getElementById('image-valor').style.display = "none";
    document.getElementById('iv-value').options[1].text = 'Seine Werte sind so hoch, dass ich sie gar nicht berechnen kann! Unglaublich!';
    document.getElementById('iv-value').options[2].text = 'Ich muss sagen, dass ich von seinen Werten sehr beeindruckt bin.';
    document.getElementById('iv-value').options[3].text = 'Seine Werte sind recht beeindruckend.';
    document.getElementById('iv-value').options[4].text = 'Seine Werte sind insgesamt ganz okay.';
  } else if(element.id == 'team-yellow' && $(element).is(":checked")) {
    document.getElementById('team-selection').options[1].text = 'Dein (Pokémon Name) kann es im Kampf mit allen aufnehmen!';
    document.getElementById('team-selection').options[2].text = 'Dein (Pokémon Name) ist insgesamt wirklich stark!';
    document.getElementById('team-selection').options[3].text = 'Dein (Pokémon Name) ist insgesamt ganz gut.';
    document.getElementById('team-selection').options[4].text = 'Dein (Pokémon Name) kann sich im Kampf noch verbessern!';
    document.getElementById('image-mystic').style.display = "none";
    document.getElementById('image-instinct').style.display = "block";
    document.getElementById('image-valor').style.display = "none";
    document.getElementById('iv-value').options[1].text = 'Seine Werte sind die besten, die ich je gesehen habe!';
    document.getElementById('iv-value').options[2].text = 'Seine Werte sind wirklich hoch! Hut ab!';
    document.getElementById('iv-value').options[3].text = 'Seine Werte können sich sehen lassen!';
    document.getElementById('iv-value').options[4].text = 'Seine Werte sind okay.';
  } else if(element.id == 'team-red' && $(element).is(":checked")) {
    document.getElementById('team-selection').options[1].text = 'Von deinem (Pokémon Name) bin ich insgesamt total beeindruckt. Es kann einfach alles!';
    document.getElementById('team-selection').options[2].text = 'Dein (Pokémon Name) ist insgesamt sehr stark. Du kannst stolz sein!';
    document.getElementById('team-selection').options[3].text = 'Dein (Pokémon Name) ist insgesamt ganz gut!';
    document.getElementById('team-selection').options[4].text = 'Dein (Pokémon Name) ist zwar insgesamt im Kampf nicht allzu beeindruckend, aber ich mag es trotzdem!';
    document.getElementById('image-mystic').style.display = "none";
    document.getElementById('image-instinct').style.display = "none";
    document.getElementById('image-valor').style.display = "block";
    document.getElementById('iv-value').options[1].text = 'Seine Werte hauen mich um. WOW!';
    document.getElementById('iv-value').options[2].text = 'Er hat hervorragende Werte! Wie aufregend!';
    document.getElementById('iv-value').options[3].text = 'Seine Werte sind nicht von schlechten Eltern!';
    document.getElementById('iv-value').options[4].text = 'Seine Werte werden dir im Kampf nicht viel bringen.';
  }
}

var jsonString = '{"defense":{"bug":[{"value":"effective","types":["fire","flying","rock"]},{"value":"noteffective","types":["grass","ground","fight"]},{"value":"resistant","types":[]}],"dark":[{"value":"effective","types":["bug","fairy","fight"]},{"value":"noteffective","types":["dark","ghost"]},{"value":"resistant","types":["psycho"]}],"dragon":[{"value":"effective","types":["dragon","fairy","ice"]},{"value":"noteffective","types":["electric","fire","grass","water"]},{"value":"resistant","types":[]}],"electric":[{"value":"effective","types":["ground"]},{"value":"noteffective","types":["electric","flying","steel"]},{"value":"resistant","types":[]}],"fairy":[{"value":"effective","types":["poison","steel"]},{"value":"noteffective","types":["bug","dark","fight"]},{"value":"resistant","types":["dragon"]}],"fighting":[{"value":"effective","types":["fairy","flying","psycho"]},{"value":"noteffective","types":["bug","dark","rock"]},{"value":"resistant","types":[]}],"fire":[{"value":"effective","types":["ground","rock","water"]},{"value":"noteffective","types":["bug","fairy","fire","grass","ice","steel"]},{"value":"resistant","types":[]}],"ghost":[{"value":"effective","types":["dark","ghost"]},{"value":"noteffective","types":["bug","poison"]},{"value":"resistant","types":["normal","fight"]}],"grass":[{"value":"effective","types":["bug","fire","flying","poison","ice"]},{"value":"noteffective","types":["electric","grass","ground","water"]},{"value":"resistant","types":[]}],"ground":[{"value":"effective","types":["ice","grass","water"]},{"value":"noteffective","types":["rock","poison"]},{"value":"resistant","types":["electric"]}],"normal":[{"value":"effective","types":["fighting"]},{"value":"noteffective","types":[]},{"value":"resistant","types":["ghost"]}],"poison":[{"value":"effective","types":["ground","psycho"]},{"value":"noteffective","types":["bug","grass","fairy","poison","fight"]},{"value":"resistant","types":[]}],"psychic":[{"value":"effective","types":["bug","dark","ghost"]},{"value":"noteffective","types":["fight","psycho"]},{"value":"resistant","types":[]}],"rock":[{"value":"effective","types":["grass","ground","steel","fight","water"]},{"value":"noteffective","types":["fire","normal","flying","poison"]},{"value":"resistant","types":[]}],"water":[{"value":"effective","types":["electric","grass"]},{"value":"noteffective","types":["fire","steel","ice","water"]},{"value":"resistant","types":[]}]}}';

function buttonCalc() {

  //var jsonTemp JSON.stringify(jsonString);
  var json = JSON.parse(jsonString);
  for (i in json.defense.fire) {
      console.log("Wert:" + json.defense.fire[i].value);
      for (j in json.defense.fire[i].value) {
          console.log(json.defense.fire[i].types[j]);
      }
  }
  // $.getJSON( "types.json", function( data ) {
  //
  //   });
  document.getElementById('input-area').style.display = "none";
  document.getElementById('result').style.display = "block";

}

/**
function showTrainerRating(element) {
  if(element.id == 'checkbox-att') {
    var elem = document.getElementById('trainer-att');
  } else if(element.id == 'checkbox-def') {
    var elem = document.getElementById('trainer-def');
  } else if(element.id == 'checkbox-sta') {
    var elem = document.getElementById('trainer-sta');
  }
    element.onchange = function() {
      elem.style.display = this.checked ? 'block' : 'none';
    };
}
*/
