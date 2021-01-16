
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(1200, 700);
	engine = Engine.create();
	world = engine.world;
	paperObj=new paper(200,50,50);

	groundObj=new ground(width/2,650,width,20);
	box1=new box(700,605,30,115)
	box2= new box(885,605,30,115)

	//Create the Bodies Here.


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  paperObj.display();
  groundObj.display();
  box1.display();
  box2.display();
  
  drawSprites();
 
}
function keyPressed(){
	if (keyCode === UP_ARROW&&paperObj.body.position.y>400){
		Matter.Body.applyForce(paperObj.body,paperObj.body.position,{x:43,y:-30});




	}



}


