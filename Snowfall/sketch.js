var snowflake,snowflakeImg
var bgImg

function preload() {
  snowflakeImg = loadImage("snow4.webp");
  bgImg = loadImage("Snowfall.gif");
}
function setup() {
  createCanvas(800,400);
 
}

function draw() {
  background(bgImg);  
  drawSprites();
  createSnowflake();
}

function createSnowflake(){
  if(frameCount%10===0){
  snowflake = createSprite(random(0,800), 0, 50, 50);
  snowflake.velocityX = -2;
  snowflake.velocityY = 4;
  snowflake.addImage(snowflakeImg);
  snowflake.scale = 0.1;
  }
}