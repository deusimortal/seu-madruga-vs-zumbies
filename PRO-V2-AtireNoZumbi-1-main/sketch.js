var wooooo,wooooimg;
var homen,homenimg,homenzuuuuuuu,homenzuuuuuuuimg;
var madrutiro;
var horda
var amor, amor2,maomoroso;
var amorimg,amor2img,moamorosoimg
function preload(){
  wooooimg = loadImage("assets/bg.jpeg");
  homenimg = loadImage("assets/shooter_2.png");
  homenzuuuuuuuimg = loadImage("assets/zombie.png");
  madrutiro = loadImage("assets/shooter_3.png");
  moamorosoimg = loadImage("assets/heart_3.png");
  amorimg = loadImage("assets/heart_1.png");
  amor2img = loadImage("assets/heart_2.png");
}

function setup() {
createCanvas(windowWidth,windowHeight);

wooooo = createSprite(windowWidth/2,windowHeight/2+75,30,31)
wooooo.addImage(wooooimg);
wooooo.scale = 1.2;
homen = createSprite(windowWidth/2-540,windowHeight/2+100,60,60);
homen.addImage(homenimg);
homen.scale = 0.4;
homen.setCollider("rectangle",0,0,500,400);
homen.debug = true;
horda = new Group();
amor = createSprite(windowWidth-150,40,20,20);
amor.addImage(amorimg);
amor.scale = 0.4;
amor.visible = true;
amor2 = createSprite(windowWidth-100,40,20,20);
amor2.addImage(amor2img);
amor2.scale = 0.4
amor2.visible = false;
maomoroso = createSprite(windowWidth-150,40,20,20);
maomoroso.addImage(moamorosoimg);
maomoroso.scale = 0.4
maomoroso.visible = false;
}

function draw() {
  background(0);
  if(keyDown("UP_ARROW")||touches.lenght>0.1){
    homen.y = homen.y-15;
  }
  if(keyDown("DOWN_ARROW")||touches.lenght>0.1){
    homen.y = homen.y+15;
  }
  if(keyDown("LEFT_ARROW")||touches.lenght>0.1){
    homen.x = homen.x-15;
  }
  if(keyDown("RIGHT_ARROW")||touches.lenght>0.1){
    homen.x = homen.x+15;
  }
  if(keyWentDown("t")||touches.lenght>2){
    homen.addImage(madrutiro);
  }
  else if(keyWentUp("t")){
    homen.addImage(homenimg)
  }

  if(horda.isTouching(homen)){
   for(var coveiro = 0;
    coveiro<horda.lenght;
    coveiro++){
      if(horda[coveiro].isTouching(homen)){
        horda[coveiro].destroy();
      }
    } 
  }
  
  criarzumbooss();
  
  drawSprites();
}

function criarzumbooss(){
  if(frameCount%20===0){
    homenzuuuuuuu =createSprite(random(1401,1499),random(500,822),40,40);
    homenzuuuuuuu.addImage(homenzuuuuuuuimg);
    homenzuuuuuuu.scale = 0.2;
    homenzuuuuuuu.lifetime = 401;
    homenzuuuuuuu.velocityX = -10;
    homenzuuuuuuu.setCollider("rectangle",0,0,600,900);
    homenzuuuuuuu.debug = true;
    horda.add(homenzuuuuuuu); 
  }
}