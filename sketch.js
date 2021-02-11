const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ground, paper, dustbin1,dustbin2,dustbin3,keyPressed;
var paperIMG

function preload()
{
	
}

function setup() {
var canvas	= createCanvas(800, 700);



	engine = Engine.create();
	world = engine.world;

	 ground = new Ground(400,height,800,50);

	 paper = new Paper(200,350,150);
	 
	
	 

	dustbin1 = new Dustbin(420,650,15,50);
	dustbin3 = new Dustbin(500,650,15,1500);
	dustbin2 = new Dustbin(400,525,175,175);

	

	Engine.run(engine);
  
}


function draw() {
background("white");

ground.display();
    paper.display();
	dustbin1.display();
	dustbin2.display();
   //dustbin3.display();
 
  console.log(paper.x,paper.y)

  

  drawSprites();
 
}

function keyPressed(){
	if (keyCode===UP_ARROW){
		Matter.Body.applyForce(paper.body,paper.body.position,{x:225,y:-1500})
		dustbin1.display();
	dustbin2.display();
	}
}

 