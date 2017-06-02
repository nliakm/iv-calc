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
    } else {
      document.getElementById("quick-move-info-2").style.display = "none";
    }  }


}
