const Engine = Matter.Engine;
const Render = Matter.Render;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
const Body = Matter.Body;
const Composites = Matter.Composites;
const Composite = Matter.Composite;
var base1 , base2, base3;
var stones = [];

function setup() {
  createCanvas(windowWidth, windowHeight);
  engine = Engine.create();
  world = engine.world;
  frameRate(80);
   
 base1 = new Base(width/20,height/2,width/10,height/6);
 base2 = new Base(width-80,height/2,width/10,height/6);
 base3 = new Base(width/2,height-1,width/1,height/6);
 
 bridge = new Bridge (15,{x: width/2- 400, y: height/2});
 jointPoint = new Base(width - 600,height/2 +10,40,20);

 Matter.Composite.add(bridge.body,jointPoint);
 jointLink = new Link (bridge,jointPoint);

 for (var i = 0; i <=8; i++){

  var x = random(width/2 -200, width/2 + 300);
  var y = random(-10 , 140);
  var stone = new Stone(x,y,40,40)
  stones.push(stone);
  
  }
}

function draw() {
  background(51);
  Engine.update(engine);
  base1.show();
  base2.show();
  base3.show();
 bridge.show();

for (var stone of stones){

  stone.show();

}

}

