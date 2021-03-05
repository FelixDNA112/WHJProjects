var canvas;
var music;
var blue_bar, orange_bar, green_bar, red_bar;
var box;

function preload(){
    music = loadSound("music.mp3");
}


function setup(){
    canvas = createCanvas(800,600);
    blue_bar = createSprite(100,585,200,25)
    blue_bar.shapeColor = "blue"
    orange_bar = createSprite(300,585,200,25)
    orange_bar.shapeColor = "orange"
    green_bar = createSprite(500,585,200,25)
    green_bar.shapeColor = "green"
    red_bar = createSprite(700,585,200,25)
    red_bar.shapeColor = "red"



    box = createSprite(400,300,40,40)
    box.shapeColor = "white"
    box.velocityX = 5;
    box.velocityY = 5;

}

function draw() {
    background(0);

    //createEdgeSprites();
    //box.bounceOff(edges)

    drawSprites();
    if(box.isTouching(blue_bar)){
        box.shapeColor = "blue"
    }
    if(box.isTouching(orange_bar)){
        box.shapeColor = "orange"
    }
    if(box.isTouching(green_bar)){
        box.shapeColor = "green"
    }
    if(box.isTouching(red_bar)){
        box.shapeColor = "red"
    }
}
