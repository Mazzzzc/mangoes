class Mango {
    constructor (x,y,r,) {
        var options = {
            isStatic:true,
            restitution:0,
            friction:1,
        }
  
        this.r=r;
        this.x=x;
        this.y=y;
        this.image=loadImage("Plucking mangoes/mango.png");
        this.body = Bodies.circle(x,y,r,options);
        World.add(world,this.body);
    }
    display(){
      /*var pos =this.body.position;
      var angle = this.body.angle;
      push();
      //ellipseMode(RADIUS);
      //fill(255,0,255);
      //stroke(255,0,255);
      //scale(0.5);
      //ellipse(pos.x, pos.y,this.r);
      imageMode(RADIUS);
      scale(0.1);
      translate(this.body.position.x, this.body.position.y);
      rotate(angle);
      image(this.image,0,0,578);
      
      pop();*/
      var mangoPos=this.body.position;
      push()
      translate(mangoPos.x, mangoPos.y); 
      // rectMode(CENTER);
      rotate(this.body.angle) 
      fill(255,0,255) 
      imageMode(CENTER); 
      ellipseMode(CENTER); 
      image(this.image, 0,0,this.r*2, this.r*2) 
      pop()

    }
}