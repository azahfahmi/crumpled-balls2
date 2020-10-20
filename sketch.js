const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var paper;
var boxBase,boxSide1s,boxSide2s;
var ground;
var loadgarbage;

function setup() {
	createCanvas(900, 650);


	engine = Engine.create();
	world = engine.world;
    
  paper = new Paper(100,352,50,50);

  ground = createSprite(450,630,900,20);
  
  boxBase = new Box(750,610,200,20);
  boxSide1s= new Box(boxBase.x + 110,boxBase.y - 50,20,100);
  boxSide2s= new Box(boxBase.x - 110,boxBase.y - 50,20,100);
	Engine.run(engine);
}


function draw() {
  rectMode(CENTER);
  background(255);
  
  paper.display();
  //boxSide1s.display();
  //boxSide2s.display();
  boxBase.display();
  ground.display();
}

function keyPressed(){
 if(keyCode === UP_ARROW){
 // paper.y = 430;
 // paper.x = 640;
 }
}