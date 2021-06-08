class Stone {
    constructor(x, y) {
      var options = {
        'density':0.9,
        'friction': 0.8,
        'restitution':1
      };
      this.body = Bodies.rectangle(x, y, 100, 100, options);
      this.width = 150;
      this.height = 40;
      World.add(world, this.body);
    };
    display(){
      var pos = this.body.position;
      
  
      push();
      translate(pos.x, pos.y);
      
      strokeWeight(3);
      stroke('white')
      fill('grey')
      rectMode(CENTER)
      rect(0, 0, this.width, this.height);
      pop();
    };
  };