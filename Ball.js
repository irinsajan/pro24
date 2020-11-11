class Ball{
    constructor(x,y,radius){
        this.body = Matter.Bodies.circle(x,y,radius,{restitution:0.8})
        World.add(world,this.body);
        this.radius = radius;
    }
    display(){
        fill("red");
        ellipseMode(RADIUS);
        ellipse(this.body.position.x,this.body.position.y,this.radius,this.radius);
    }
}
