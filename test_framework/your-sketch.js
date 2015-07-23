var s = function( p ) {

  p.setup = function() {
    var c = p.createCanvas(p.windowWidth, p.windowHeight);
    c.position(0, 0);
    p.fill(0);


  };

  p.draw = function() {
    for (var i=0; i<10; i++) {
      p.ellipse(i*p.width/10, p.height/3, p.width/12, p.width/12);
    }

  
  };

}

// comment out "var myp5 = new p5(s);" line!