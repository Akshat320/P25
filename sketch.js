
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var ground;

function preload()
{
	
}

function setup() {
	createCanvas(1200, 700);


	engine = Engine.create();
	world = engine.world;

	ball = new PaperBall(200,250,40);
	box1 = new Dustbin(950,370,200,300);
	box2 = new Dustbin(950,370,200,300);	
	box3 = new Dustbin(950,370,200,300);
	ground = new Ground(600,695,1200,20);
	
	 
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("white");
  


  
  box1.display();
  box2.display();
  box3.display();
  ball.display();
  ground.display();

  
keyPressed();
  drawSprites();
 
}

function keyPressed()
	{
		if (keyCode === UP_ARROW)
		{
			Matter.Body.applyForce(ball.body, ball.body.position,{x:65,y:-80})
		}
	}




