//namespacing
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var thorn;
var ground;
var wall1;
var bg;
var brick, brick1, brick2, brick3, brick4;
var coin;
var thornImg;
var thornGroup;
var gameState = "play";

function preload() {
    bg = loadImage("./Images/bg.png");
    thornImg = loadAnimation("Images/obstacle1.png", "Images/obstacle2.png", "Images/obstacle3.png", "Images/obstacle4.png");
    marioImg = loadAnimation("Images/mario00.png", "Images/mario01.png", "Images/mario02.png", "Images/mario03.png");
    restartImg = loadImage("Images/restart.png")
}

function setup() {
    var canvas = createCanvas(displayWidth, displayHeight);

    backgroundSprite = createSprite(displayWidth/2, displayHeight/2+90, displayWidth, displayHeight);
    backgroundSprite.addImage(bg);
    backgroundSprite.scale = 2.2;
    backgroundSprite.velocityX= -1;

    ground = createSprite(displayWidth/2, displayHeight -130, displayWidth, 20)
    ground.visible = false;
    //for(var x = 1200; x< -7000; x= x +200 ){
    //wall1 =createSprite(600, 400, 60, 80);
    //}

    marioSprite = createSprite(200, displayHeight -150);
    marioSprite.addAnimation("mario running", marioImg);
    marioSprite.scale = 3

    restart = createSprite(displayWidth/2, displayHeight/2-30);
    restart.addImage(restartImg);

    //create Group()
    thornGroup = new Group();

}

function draw() {
    background("#5F91FE");
console.log(backgroundSprite.x)
    if(gameState === "play"){

        restart.visible = false;
        spawnThorn();
        spawnWall();

        if(thornGroup.isTouching(marioSprite)){
            gameState = "end";
           
        }

        if (backgroundSprite.x < -200){
            backgroundSprite.x = 0
        }
       
    
    }else if(gameState === "end") {
        restart.visible = true;
      
        textSize(40)
        text ("Game Over", 600, 400);
        marioSprite.velocityX = 0;
        thornGroup.setVelocityXEach(0);
        marioSprite.velocityY = 0;
    }
    

    //Matter.Body.applyForce(wall1.body, wall1.body.position, { x: -10, y: 0 });

    marioSprite.velocityY = marioSprite.velocityY + 0.8;
    marioSprite.collide(ground);
   
    drawSprites();

}

function keyPressed() {
    if (keyCode === 32) {

        marioSprite.velocityY = -10;
    }
    if (keyCode === 37) {

        marioSprite.velocityX = -6;
    }
    if (keyCode === 39) {

        marioSprite.velocityX = 6;
    }
}

function spawnThorn() {
    if (frameCount % 100 === 0) {

        thornSprite = createSprite(1200,  displayHeight -150);
        thornSprite.addAnimation("thorn", thornImg);
        thornSprite.velocityX = -6;
        thornSprite.lifetime = 200;
        thornGroup.add(thornSprite);
       

    }
}

function spawnWall() {
    if (frameCount % 100 === 0) {
       

    }
}




