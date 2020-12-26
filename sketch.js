var particles = [];
var plinkos = [];
var divisions = [];
var divisionHeight = 300;

const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;



function setup() {
 
  createCanvas(400,600);
  engine = Engine.create();
  world = engine.world;
  for(var k = 0; k <= innerWidth; k = k+80) {
    divisions.push(new Division(k, height - divisionHeight/2, 10, divisionHeight))
      }

for(var j = 40; j <= innerWidth; j=j+50){
  plinkos.push(new Plinko(j, 75))
}
for(var j = 15; j <= innerWidth - 10; j=j+50){
  plinkos.push(new Plinko(j, 175))
}

if(frameCount%60===0){
particles.push(new Particle(random(width/2-10, width/2+10, 10, 10)))
}

ground = new Ground(200,600,800,20);


}

function draw() {
  background(0); 
  
ground.display();
for(var k = 0; k < divisions.length; k++){
  divisions[k].display();
}
for(var f = 0; f < particles.length; f++){
  particles[f].display();
}
for(var j = 0; j < plinkos.length; j++){
  plinkos[j].display();
}

}


