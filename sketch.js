var jake,jake_running,edges;
var path,invisibleGround,invisibleGround1,pathImage;
var coinImg,coin,coinImg1,coin1,coinImg2,coin2,bombImg,bomb,bomb1,bomb2,energyImg,energyDrink,energyDrink1,energyDrink2;
var score=0;
var money = 0;
var life = 7;

function preload(){
  //pre-load images
  jake_running=loadAnimation("Jake1.png","jake3.png","jake5.png");
  pathImage=loadImage("path.png");
  coinImg=loadImage("coin.png");
  bombImg=loadImage("bomb.png");
  energyImg=loadImage("energyDrink.png");
}

function setup(){
  createCanvas(400,500);
  //create sprites here
  path=createSprite(200,180,400,20);
  path.addImage("path",pathImage);
  path.velocityY=4;
  path.scale=1.3;

  invisibleGround=createSprite(20,300,20,390);
  invisibleGround.visible=false;

  invisibleGround1=createSprite(385,300,20,390);
  invisibleGround1.visible=false
   
  //creating coin
  coin=createSprite(200,200);
  coin.addAnimation("coin",coinImg);
  coin.scale=0.4;
  coin.velocityY=8;
  
  //creating coin1
  coin1=createSprite(80,200);
  coin1.addAnimation("coin",coinImg);
  coin1.scale=0.4;
  coin1.velocityY=8;

  //creating coin2
  coin2=createSprite(330,200);
  coin2.addAnimation("coin",coinImg);
  coin2.scale=0.4;
  coin2.velocityY=8;

  //creating bomb
  bomb=createSprite(210,100);
  bomb.addAnimation("bomb",bombImg);
  bomb.scale=0.1;
  bomb.velocityY=8;

  //creating bomb1
  bomb1=createSprite(85,100);
  bomb1.addAnimation("bomb",bombImg);
  bomb1.scale=0.1;
  bomb1.velocityY=8;
  
  //creating bomb2
  bomb2=createSprite(335,100);
  bomb2.addAnimation("bomb",bombImg);
  bomb2.scale=0.1;
  bomb2.velocityY=8;
  
  //creating energyDrink
  energyDrink=createSprite(200,300);
  energyDrink.addAnimation("energyDrink",energyImg);
  energyDrink.scale=0.1;
  energyDrink.velocityY=8;

  //creating energyDrink1
  energyDrink1=createSprite(80,300);
  energyDrink1.addAnimation("energyDrink",energyImg);
  energyDrink1.scale=0.1;
  energyDrink1.velocityY=8;

  //creating energyDrink2
  energyDrink2=createSprite(330,300);
  energyDrink2.addAnimation("energyDrink",energyImg);
  energyDrink2.scale=0.1;
  energyDrink2.velocityY=8;

  //creating jake
  jake=createSprite(200,700,30,60);
  jake.addAnimation("running",jake_running);
  edges = createEdgeSprites();

  //adding scale and position to jake
  jake.scale=0.8;
  jake.y=420;
}

function draw() {
  background("blue");
  //make ground move 
  if(path.y>570){
    path.y=height/2
    //scoring
    score=score+Math.round(World.height/80);
  }
 jake.x=World.mouseX;
  
 
 if(coin.y >= 570) {
  coin.y = random(-700,-6000);
}
 
if(coin1.y >= 570) {
  coin1.y = random(-500,-300);
}

if(coin2.y >= 570) {
  coin2.y = random(-900,-1000);
}

if(bomb.y >= 570) {
  bomb.y = random(-5000, -10);
}

if(bomb1.y >= 570) {
  bomb1.y = random(-9000, -10);
}

if(bomb2.y >= 570) {
  bomb2.y = random(-900, -1000);
}

if(energyDrink.y >= 570) {
   energyDrink.y = random(-10000, -8000);
}

if(energyDrink1.y >= 570) {
   energyDrink1.y = random(-10000, -7000);
}

if(energyDrink2.y >= 570) {
   energyDrink2.y = random(-9000, -7000);
}

if(jake.isTouching(coin)) {
  money+=1;
  coin.y = random(-10000, -1000); 
}

if(jake.isTouching(coin1)) {
  money+=1;
  coin1.y = random(-6000, -4000); 
}

if(jake.isTouching(coin2)) {
  money+=1;
  coin2.y = random(-8000, -10); 
}

if(jake.isTouching(bomb)) {
  life-=1;
  bomb.y = random(-1000, -10);
}

if(jake.isTouching(bomb1)) {
  life-=1;
  bomb1.y = random(-100, -10);
}

if(jake.isTouching(bomb2)) {
  life-=1;
  bomb2.y = random(-80, -10);
}

if(jake.isTouching(energyDrink)) {
  life+=1;
  energyDrink.y = random(-1000, -8000);
}

if(jake.isTouching(energyDrink1)) {
  life+=1;
  energyDrink1.y = random(-2000, -800);
}

if(jake.isTouching(energyDrink2)) {
  life+=1;
  energyDrink2.y = random(-1000, -800);
}

jake.collide(invisibleGround);
jake.collide(invisibleGround1);

drawSprites();
 
textSize=10;
fill ("lightblue")
text(money,90,50);
text("Money=",50,50);
text(life,80,40);
text("Life=",50,40);
text(+score,90,30);
text("score=",50,30)

if(score>=500){
  path.velocityY=0;
  bomb.velocityY=0;
  bomb1.velocityY=0;
  bomb2.velocityY=0;
  coin.velocityY=0;
  coin1.velocityY=0;
  coin2.velocityY=0;
  energyDrink.velocityY=0;
  energyDrink1.velocityY=0;
  energyDrink2.velocityY=0;
  jake.pause();
  jake.x=400;
  jake.y=400; 
  textSize=300;
  fill("yellow");
  text("You Won! Refresh the page to restart!",150,200);
}
if(life<=0){
  path.velocityY=0;
  bomb.velocityY=0;
  bomb1.velocityY=0;
  bomb2.velocityY=0;
  coin.velocityY=0;
  coin1.velocityY=0;
  coin2.velocityY=0;
  energyDrink.velocityY=0;
  energyDrink1.velocityY=0;
  energyDrink2.velocityY=0;
  jake.pause();
  jake.x=400;
  jake.y=400;
  textSize=300;
  fill("yellow");
  text("Game Over! Refresh the page to restart!",100,200);
}
}
