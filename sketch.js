var bullet,bullet_1,gun,gun_1,wall,weight,thickness,speed;

function preload(){
bullet_1=loadImage("bullet.png");
gun_1=loadImage("gun.png");
}

function setup() {
 createCanvas(800,400);
gun= createSprite(60, 200, 50, 80);
gun.addImage(gun_1);
bullet=createSprite(-50,200,50,80);
bullet.addImage(bullet_1);
bullet.scale=0.5;

 wall=createSprite(650,200,80,height);
 bullet.shapeColor="white";
 wall.shapeColor="turquoise";
 speed=random(50,300);
 thickness=random(30,83);
 weight=random(30,52);
}

function draw() {
  background(0);  
if(keyDown("space")){
  bullet.velocityX=speed;
}
fill(255);
textSize(50);
text("Press Space",300,200)
if(isTouching(bullet,wall)){
 
  bullet.velocityX=0;
  var damage=0.5*weight*speed*speed/thickness*thickness*thickness;
  if(damage<=50){
wall.shapeColor="green";
  }
  if(damage>50){
    wall.shapeColor="red";
  }

}
  drawSprites();
}

function isTouching(obj1,obj2){
  if(obj1.x-obj2.x<obj1.width/2+obj2.width/2
    &&obj2.x-obj1.x<obj2.width/2+obj1.width/2){

      return true;
    }
    else{
      return false;
    }
}