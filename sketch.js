const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
 
var Start=0;
var Play=1;
var GameState=Start
var particles = [];
var plinkos = [];
var divisions =[];
var divisionHeight=300;
var score =0;
var bgImg;

function preload(){

  bgImg = loadImage("bg.jpg");
  bg2Img = loadImage("bg2.jpg");
  insImg = loadImage("ins.jpg");
  ins2Img = loadImage("ins.png");
  crossImg = loadImage("cross.png");
}


function setup() {
  createCanvas(800, 800);


  engine = Engine.create();
  world = engine.world;
  Engine.run(engine);

  ins=createSprite(400, 400, 70,70);
	ins.addImage(insImg)
	ins.scale=2.5

  ins2=createSprite(400, 400, 70,70);
	ins2.addImage(ins2Img)
	ins2.scale=1.2

  cross=createSprite(120, 150, 70,70);
	cross.addImage(crossImg)
	cross.scale=0.2
  
	//tower.visible=false

  ground = new Ground(width/2,height,width,20);

  //create division objects
  for (var k = 0; k <=800; k = k + 80) {
    divisions.push(new Divisions(k, height-divisionHeight/2, 10, divisionHeight));
  }

  //create 1st row of plinko objects
  for (var j = 75; j <=width; j=j+50) { 
    plinkos.push(new Plinko(j,75));
  }

  //create 2nd row of plinko objects
  for (var j = 50; j <=width-10; j=j+50) 
  {
    plinkos.push(new Plinko(j,175));
  }

  //create 3rd row of plinko objects
    for (var j = 75; j <=width-10; j=j+50) 
    {
      plinkos.push(new Plinko(j,275));
    }
  
  //create 4th row of plinko objects
  for (var j = 50; j <=width-10; j=j+50) 
  {
    plinkos.push(new Plinko(j,375));
  }



}


function draw() {
  if(GameState===Start)
  {
    background(bg2Img);
    textSize(97)
    fill("Black");
    textFont("freestyle script");
    text("Press 'Enter' to Start",100,530)
  }
  if(keyCode===ENTER)
  {
      GameState=Play
       
  }
  if(GameState===Play)
{
  background(bgImg);
  paricles()
  Engine.update(engine);

  ground.display();

  if(mousePressedOver(cross))
  {
   ins.visible=false
   ins2.visible=false
   cross.visible=false
  }

  //display the plinkos 
  for (var i = 0; i < plinkos.length; i++) {
    plinkos[i].display();   
  }
   
  //display the divisions
  for (var k = 0; k < divisions.length; k++) {
    divisions[k].display();
  }

  //display the paricle
  for(var m = 0;m<particles.length;m++){
    particles[m].display();
  }
  drawSprites()
}
}

function paricles(){
  if (frameCount%90==0||keyCode == 32){
    particles.push(new Particles(random(width/2-100,width/2+200),30));
  }
  }