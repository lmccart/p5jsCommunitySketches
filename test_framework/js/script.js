var script = {
  popcorn: null,
  init: function() {

    var pop = Popcorn.smart("#videoClip", "test.mp4");
    pop.autoplay(false);

    pop.on( "canplayall", function(e) {
      main.prepareVideo();
    });  

    pop.on( "play", function(e) {
        $("#pauseButton").addClass("fa-pause");
        $("#pauseButton").removeClass("fa-play"); 
    });

    pop.on( "pause", function(e) {
        $("#pauseButton").removeClass("fa-pause");
        $("#pauseButton").addClass("fa-play"); 
    });         

    // Song

    pop.code({
      start: 0.5,
      onStart: function( options ) {   
        main.sketch = new p5(s, "sketchCanvas");
      }
    });  


    pop.code({
      start: 25,
      onStart: function( options ) {   
        main.sketch.remove();
      }
    });  

    // Set external

    script.popcorn = pop;

  }

}
