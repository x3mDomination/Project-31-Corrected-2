const Engine = Matter.Engine;
const World = Matter.World;
const Body = Matter.Body;
const Bodies = Matter.Bodies;

var engine, world;
var ground,division;
var plinko1,plinko2;
var rand,particle;

var particles = [];
var plinkos = [];
var divisions = [];

var divisionHeight = 300;

function setup() {
  createCanvas(480,800);
  //createSprite(400, 200, 50, 50);

  engine = Engine.create();
  world = engine.world;

  for(var k=0;k<=width;k=k+80){
    division = new Division(k,height-divisionHeight/2,10,divisionHeight);
    divisions.push([division.body.position.x,division.body.position.y]);
  }
  for(var q=75;q<height-400;q=q+200){
    for(var p = 40;p<=width;p=p+50){
      plinko1 = new Plinko(p,q);
      plinkos.push([plinko1.body.position.x,plinko1.body.position.y]);
    }
  }
  for(var e=175;e<height-300;e=e+200){
    for(p=15;p<=width;p=p+50){
     plinko2 = new Plinko(p,e);
     plinkos.push([plinko2.body.position.x,plinko2.body.position.y]);
    }
  }



  ground = new Ground(width/2,height-10,width,20);
}

function draw() {
  Engine.update(engine);

  background(0);  
  drawSprites();

  rectMode(CENTER);
  fill(color(80,0,0));
  rect(width/2,height/2,480,800);
  fill(color(0));
  rect(width/2,height/2,460,780);

  ground.display();

  for(var i=0;i<divisions.length;i++){
    rectMode(CENTER);
    fill("white");
    rect(divisions[i][0],divisions[i][1],10,divisionHeight);
  }
  for(var l=0;l<plinkos.length;l++){
    ellipseMode(CENTER);
    fill("white");
    ellipse(plinkos[l][0],plinkos[l][1],20,20);
  }

  rand = Math.ceil(random(230,250));

  if(frameCount%60===0){
    particles.push(new Particle(rand,10));
  }

  for(var j = 0; j < particles.length; j++){
    particles[j].display();
  }
  //console.log(particle.body.position.x+", "+particle.body.position.y);
  /*
  if(frameCount%60===0){
    particles.push(new Particle(rand,10));
    //console.log(rand);
  }

  for(var j=0;j<particles.length;j++){
    particles[j].display();
    console.log(particles[j].x+", "+particles[j].y);
  }
  */

  

}