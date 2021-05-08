
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

function preload()
{
	
}

function setup() {
	createCanvas(1600, 700);
	rectMode(CENTER)

	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	//ball1 = new Ball(400,350,10,10)
	frame = new Frame(width/2,height/4,width/7,20)
	ballX = width/2
	ballY = height/4 + 300
	ballDiameter = 40
	ball1 = new Ball(ballX-(2*ballDiameter),ballY,ballDiameter)
	ball2 = new Ball(ballX-ballDiameter,ballY,ballDiameter)
	ball3 = new Ball(ballX,ballY,ballDiameter)
	ball4 = new Ball(ballX+ballDiameter,ballY,ballDiameter)
	ball5 = new Ball (ballX+(2*ballDiameter),ballY,ballDiameter)
	string1 = new String(ball1.body,frame.body,-ballDiameter*2,0)
	string2 = new String(ball2.body,frame.body,-ballDiameter*1,0)
	string3 = new String(ball3.body,frame.body,0,0)
	string4 = new String(ball4.body,frame.body,ballDiameter*1,0)
	string5 = new String(ball5.body,frame.body,ballDiameter*2,0)

	



	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);

  ball1.display();
  ball2.display();
  ball3.display();
  ball4.display();
  ball5.display();
  frame.display();
  string1.display();
  string2.display();
  string3.display();
  string4.display();
  string5.display();
  
  
  drawSprites();
 
}



