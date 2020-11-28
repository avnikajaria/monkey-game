
var monkey , monkey_running
var banana ,bananaImage, obstacle, obstacleImage
var bananaGroup, obstacleGroup

var survivalTime = 0;
var score = 0;


function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");
 
}



function setup() {
  createCanvas(500, 500);
  
  bananaGroup = new Group();
  obstacleGroup = new Group();
  
  monkey = createSprite(80,300,20,20);
  monkey.addAnimation("moving",monkey_running);
  monkey.scale = 0.1
  
  ground = createSprite(400,300,1000,10);
  ground.velocityX = -4;
  ground.x = ground.width/2;
  console.log(ground.x);
  
  invisibleGround = createSprite(500,300,1000,10);
  invisibleGround.visible = false;
  
  
  
}


function draw() {
   background(180);
  
  if(keyDown("space")&& monkey.y >= 100) {
        monkey.velocityY = -12;
  }
  
  monkey.velocityY = monkey.velocityY + 0.8
  
  monkey.collide(invisibleGround);
  
  if(ground.x<0){
    ground.x = ground.width/2;
  }
  
  food();
  
  obstacles();
  
  stroke("white");
  textSize(20);
  fill("white");
  text("Score:"+ score,500,50);
  
  stroke("black");
  textSize(20);
  fill("black");
  survivalTime= Math.round(Math.ceil(frameCount/30))
  console.log(frameRate());
  text("Survival Time:" + survivalTime,100,50);

   drawSprites();
}

function food(){
  if(frameCount % 80 === 0){
    banana = createSprite(450,200,40,40);
    banana.y = Math.round(random(120,200));
    banana.addImage(bananaImage);
    banana.velocityX = -4;
    banana.scale = 0.1;
    banana.lifetime = 150
    
    bananaGroup.add(banana);
  }
}

function obstacles(){
 if (frameCount % 300 === 0){
   var obstacle = createSprite(600,165,10,40);
   obstacle.y = Math.round(random(120,300));
   obstacle.addImage(obstacleImage);
   obstacle.velocityX = -4;
  
    obstacle.scale = 0.2;
    obstacle.lifetime = 800;
   
    obstacleGroup.add(obstacle);
 }
}






