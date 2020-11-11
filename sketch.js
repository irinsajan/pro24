
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var ball,ground,box1,box2,box3;
function preload()
{
	
}

function setup() {
	createCanvas(1500,700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	//ball = new Ball(200,200,5);
	ground = new Ground(750,height,1600,20);
	box1 = new Dustbin(1415,690,70,20);
	box2 = new Dustbin(1450,650,20,100);
	box3 = new Dustbin(1390,650,20,100);

	//keyPressed ();

	Engine.run(engine);
  
}


function draw() {
rectMode(CENTER);
background(0);
drawSprites();
box1.display();
box2.display();
box3.display();
ground.display();
 
}
function keyPressed{
	if (keyCode === UP_ARROW){
		Matter.Body.applyForce(paperObject.Body,paperObject.Body.position,{x:85,y:-85});
	}
}