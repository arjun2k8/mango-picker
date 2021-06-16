class Stone{
    constructor(x, y,diametre) {
        var options = {
           isStatic:false,
           restitution:0,
           friction:1,
           density:2
        }
        this.body = Bodies.circle(x, y, diametre, options);
        this.diametre=20;
        this.image = loadImage("stone.png");
        World.add(world, this.body);
        
        this.scale = 0.30;
      }
      display(){
        push();
        translate(this.body.position.x, this.body.position.y);
        imageMode(CENTER);
        image(this.image, 0, 0, this.diametre);
        pop();
      }
}