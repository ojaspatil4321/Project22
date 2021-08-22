const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var roof;
//Create multiple bobs, mulitple ropes varibale here
var bob1;
var bob5;
var bob4;
var bob3;
var bob2;


var rope1
var rope2
var rope3
var rope4
var rope5

var constuctor

function setup() {
	createCanvas(800, 600);
	rectMode(CENTER);

	engine = Engine.create();
	world = engine.world;

	var roof_options={
		isStatic:true			
	}

	var bob1_options = {
		restitution: 0.8
	  }

	  constuctor(body1,body2, pointA, pointB)
	  {
		  this.pointA = this.pointA
		  this.pointB = this.pointB

		  var options ={
			  bodyA:body1,
			  bodyB:body2,
			  pointB:{x:this.pointA, y:this.pointB}
			  
		  }
	  }




	roof = Bodies.rectangle(400,100,230,20,roof_options);
    World.add(world,roof);

	bob1 = Bodies.circle(200,200,10)
	rope1 =new rope(bob1,roof,-80, 0);
	bob2 = Bodies.circle(200,210,10)
	rope2 =new rope(bob2,roof,-80, 0);
	bob3 = Bodies.circle(200,220,10)
	rope3 =new rope(bob3,roof,-80, 0);
	bob4 = Bodies.circle(200,230,10)
	rope4 =new rope(bob4,roof,-80, 0);
	bob5 = Bodies.circle(200,240,10)
	rope5 =new rope(bob5,roof,-80, 0);

	Engine.run(engine);
	
  
}

function draw() {
  rectMode(CENTER);
  background("#99004d");

  rect(roof.position.x,roof.position.y,230,20);

	display()
	{
		var pointA=this.rope1.bodyA.position;
		var pointB=this.rope1.bodyb.position;
		strokeWeight()
	}

  
  //create ellipse shape for multiple bobs here
  	ellipse(ball1.position.x,ball1.position.y,10);
	ellipse(ball2.position.x,ball.position.y,10);
	ellipse(ball3.position.x,ball.position.y,10);
	ellipse(ball4.position.x,ball.position.y,10);
	ellipse(ball5.position.x,ball.position.y,10);
}

//Write keyPressed function and apply force on pressing up_arrow key on the first bob.
if(keyCode==UP_ARROW)
    {
      Matter.Body.applyForce(ball,{x:0,y:0},{x:0.05,y:0});
    }