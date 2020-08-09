let img,img1,img2,img3,img4;

const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body
const Constraint = Matter.Constraint;

var chain,stone,Boy1

function preload()
{
	img = loadImage("sprites/boy.png");
	img1 = loadImage("sprites/stone.png");
	img2 = loadImage("sprites/tree.png");
	img3 = loadImage("sprites/mango.png");
	img4 = loadImage("sprites/mango.png")
}

function setup() {
	createCanvas(800, 700);

	
	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	Boy1 = new Boy(150,570,20,20);
	stone = new Stone(60,500,20,20);
	chain = new Chain(stone.body,{x:60,y:500});
	tree = new Tree(520,365)
	 mango1 = new Mango(520,270,20,20);
	 mango2 = new Mango(420,310,20,20);
	 mango3 = new Mango(460,160,20,20);
	 mango4 = new Mango(650,180,20,20);
	 mango5 = new Mango(680,280,20,20);
	 mango6 = new Mango(525,130,20,20);
	 mango7 = new Mango(360,250,20,20);
	 mango8 = new Mango(610,300,20,20);
	 mango9 = new Mango1(435,230,20,20);
	 mango10= new Mango1(585,220,20,20);
	 mango11= new Mango(510,200,20,20);
	 mango12= new Mango1(600,110,20,20);
	 mango13= new Mango1(730,210,20,20);
	 ground = new Ground(50,670,1480,20)
	
	
	Engine.run(engine);
	Engine.run(engine)

}


function draw() {
  rectMode(CENTER);
  Engine.update(engine);
  Engine.update(engine)
  background(255);
  strokeWeight(4);
  
 
  stone.display();
  Boy1.display();
  chain.display();
  tree.display();
  mango1.display();
  mango2.display();
  mango3.display();
  mango4.display();
  mango5.display();
  mango6.display();
  mango7.display();
  mango8.display();
  mango9.display();
  mango10.display();
  mango11.display();
  mango12.display();
  mango13.display();
 ground.display();

  detectCollision(stone,mango1);
  detectCollision(stone,mango2);
  detectCollision(stone,mango3);
  detectCollision(stone,mango4);
  detectCollision(stone,mango5);
  detectCollision(stone,mango6);
  detectCollision(stone,mango5);
  detectCollision(stone,mango7);
  detectCollision(stone,mango8);
  detectCollision(stone,mango9)
  detectCollision(stone,mango10);
  detectCollision(stone,mango11);
  detectCollision(stone,mango12)
  detectCollision(stone,mango13);
  
 
  drawSprites();

  
}

function keyPressed(){
	if(keyCode == 32){
		
		chain.attach(stone.body);
	}
}

function mouseDragged(){

	Matter.Body.setPosition(stone.body,{x:mouseX,y:mouseY})
	
	

}

function mouseReleased(){
	chain.fly();
}


function detectCollision(lstone,lmango){
StoneBodyPosition = lstone.body.position;
MangoBodyPosition = lmango.body.position;
var  distance = dist(StoneBodyPosition.x,StoneBodyPosition.y,MangoBodyPosition.x,MangoBodyPosition.y)
if(distance <= lstone.width/2 + lmango.width/2 && lstone.height/2 + lmango.height/2){
	Matter.Body.setStatic(lmango.body,false)
}

}