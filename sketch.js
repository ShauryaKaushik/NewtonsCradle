const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

//var rope1;
var bobObject1,bobObject2,bobObject3,bobObject4,bobObject5;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.

    
	Engine.run(engine);
  
	//rope1 = new Rope(100,100,75,35);
	
	bobObject1 = new Bob(100,120,55);	
	bobObject2 = new Bob(90,120,55);
	bobObject3 = new Bob(70,120,55);
	bobObject4 = new Bob(60,120,55);
	bobObject5 = new Bob(50,120,55);
	
}


function draw() {
  rectMode(CENTER);
  background(0);
  
  drawSprites();
 
}



