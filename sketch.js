const Engine=Matter.Engine;
const World=Matter.World;
const Bodies=Matter.Bodies;

var engine,world;



function setup(){
createCanvas(1200,600)
engine=Engine.create()
world=engine.world
ground1=new ground(600,580,1200,20);
box1=new AdityaBox(730,500,100,100)

}
function draw(){
background("lightblue")
Engine.update(engine)
text(mouseX+"   "+mouseY,mouseX,mouseY)
ground1.display();
box1.display();

}