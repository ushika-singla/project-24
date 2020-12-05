
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var paper;
var rectangle1,rectangle2,rectangle3;
var ground;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.

   paper = new Paper(200,200);

   rectangle1 = createSprite(400,650,200,20);
	rectangle1.shapeColor=color("white");

	rectangle2 = createSprite(300,610,20,100);
	rectangle2.shapeColor=color("white");

	rectangle3 = createSprite(500,610,20,100);
	rectangle3.shapeColor=color("white");

	groundSprite=createSprite(width/2, height-35, width,10);
	groundSprite.shapeColor=color("yellow");

	ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
 	World.add(world, ground);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);

  paper.display();
  
  drawSprites();
 
}

function keyPressed(){
 if(keyCode === UP_ARROW){

        Matter.Body.applyForce(paperObject.body,paperObject.body.position,{x:85,y:-85});

 }

}