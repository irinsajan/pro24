
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var ball,ground,box1,box2,box3;


function setup() {
	createCanvas(1500,700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	ball = new Ball(200,200,10);
	ground = new Ground(750,height,1500,20);
	box1 = new Dustbin(1415,690,70,20);
	box2 = new Dustbin(1450,650,20,100);
	box3 = new Dustbin(1390,650,20,100);


	Engine.run(engine);
  
}


function draw() {

background(0);

box1.display();
box2.display();
box3.display();
ground.display();
ball.display();
 
}
function keyPressed{
	if (keyCode === UP_ARROW){
		Matter.Body.applyForce(ball.body,ball.body.position,{x:85,y:-85});
	}
}
