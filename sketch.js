var PLAY = 1;
var END = 0;
var gameState = 1;
var ship,shipImg;
var debris,debrisImg,debris2,debris2Img;
var debrisGroup,debris2Group;
var r;
var bgImg;
var nebula;



function preload(){
shipImg = loadImage("spaceship.png");
debris2Img = loadImage("enemy.png");
debrisImg = loadImage("bird.png");
bgImg = loadImage("download.jpg");
//g//ameOverImg = loadImage("gameOver.png");

}


function setup() {
  createCanvas(1535,720);
 ship =  createSprite(750, 620, 50, 50);
 ship.scale = 0.5;
 ship.addImage(shipImg);

  //gameOver = createSprite(750,360,20,20);
  //gameOver.addImage(gameOverImg)
 
 debrisGroup = createGroup();
 debris2Group = createGroup();

}

function draw() {
  background(bgImg);  
  if(gameState===PLAY){

    
     
    ship.y = World.mouseY;
    ship.x = World.mouseX;

    debri();
    debri2();
    if(debrisGroup.isTouching(ship) || debris2Group.isTouching(ship) ){
     // debrisGroup.destroyEach();
      //debris2Group.destroyEach();
      debrisGroup.setVelocityXEach(0);
      debris2Group.setVelocityXEach(0);


      debrisGroup.setLifetimeEach(0);
      debris2Group.setLifetimeEach(0);
      gameState=END;
    }
   
      
    
   // if(debris2Group.isTouching(ship)){
     // debrisGroup.destroyEach();
      //debris2Group.destroyEach();
      //gameState=END;
    
 
  //  }
  else
   if(gameState===END){
     //gameOver.visible = true;
      debrisGroup.setVelocityXEach(0);
      debris2Group.setVelocityXEach(0);
    
      ship.scale=1.5
      ship.x=750;
      ship.y=720;       
 
      debrisGroup.setLifetimeEach(-1);
      debris2Group.setLifetimeEach(-1);
      stroke(10);
      textSize(100);
      fill("white");
      text("GAME OVER" ,750,360);
     
}
    
  }
  
 


  drawSprites();

}



function debri (){
  
  position = Math.round(random(1,2));
  if(World.frameCount%10===0){
    debris = createSprite(400,25000,20,20);
    debris.scale = 0.4;
      if(position==1)
    {
      debris.x= 400; 
      debris.velocityX = -10;

    }
    else
      {
        if(position==2){
          debris.x = 0;
          debris.velocityX = 10;
        }
    
    r = Math.round(random(1,4));
    if (r == 1){
      debris.addImage(debrisImg);
    }
  else
    if (r == 2){
      debris.addImage(debrisImg);
    }
    else if (r == 3){
      debris.addImage(debrisImg);
    }
   else {
      debris.addImage(debrisImg);
    }
     
  debris.y= Math.round(random(50,350));
   
    debris.setLifetime = 100;
    debrisGroup.add(debris);
    
}
}
}

function debri2(){
  
  position = Math.round(random(1,2));
  if(World.frameCount%10===0){
    debris2 = createSprite(400,25000,20,20);
    debris2.scale = 0.4;
      if(position==1)
    {
      debris2.x= 400; 
      debris2.velocityX = -50;

    }
    else
      {
        if(position==2){
          debris2.x = 0;
          debris2.velocityX = 50;
        }
    
    r = Math.round(random(1,4));
    if (r == 1){
      debris2.addImage(debris2Img);
    }
  else
    if (r == 2){
      debris2.addImage(debris2Img);
    }
    else if (r == 3){
      debris2.addImage(debris2Img);
    }
   else {
      debris2.addImage(debris2Img);
    }
     
  debris2.y= Math.round(random(100,300));
   
    debris2.setLifetime = 100;
    debris2Group.add(debris2);
    
}
}
}

function reset (){

  


}