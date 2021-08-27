class Spike 
{
  constructor(x, y, w,h) 
  {
    var options = {
     isStatic:true
    };
    this.w = w;
    this.h = h;
    this.body = Bodies.rectangle(x, y, w, h, options);
    this.image=loadImage("spikeone.png");
    World.add(world, this.body);
  }

  show() {
    var pos = this.body.position;
    push();
    rectMode(CENTER);
    noStroke();
    fill(148,127,146);
    rect(pos.x,pos.y, this.w, this.h);
    image(this.image,650,100,90,100)
    pop();
  }
}
