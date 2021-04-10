
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);

	juno = createSprite(200,600,50,50)
	juno.shapeColor = "red"
	rock = createSprite(270,600,20,20)
	tree = createSprite(600,50,300,100)
	tree.shapeColor = "green"
	mango1 = createSprite(610,60,10,10)
	mango1.shapeColor = "orange";
	mango2 = createSprite(490,40,10,10)
	mango2.shapeColor = "orange";
	mango3 = createSprite(710,70,10,10)
	mango3.shapeColor = "orange";
	mango4 = createSprite(550,20,10,10)
	mango4.shapeColor = "orange";
	mango5 = createSprite(520,100,10,10)
	mango5.shapeColor = "orange";


	

	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);

  fall();
  
  drawSprites();

  edges= createEdgeSprites()
  mango5.collide(edges)
 
}

function keyPressed(){
	if(keyCode === RIGHT_ARROW){
		rock.velocityX = 1
		rock.velocityY=-2
	}
}

function fall(){
	if(rock.isTouching(mango5)){
		mango5.velocityY=2;
	}
}



