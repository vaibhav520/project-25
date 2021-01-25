const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload() {

}
var paper, ground, dustbin;

function setup() {
    createCanvas(800, 700);


    engine = Engine.create();
    world = engine.world;

    //Create the Bodies Here.
    ground = new Ground(400, 670, 800, 20);
    paper = new Paper(100, 660, 20, 20);
    dustbin = new Dustbin(600, 650)
    Engine.run(engine);
}


function draw() {
    rectMode(CENTER);
    background(0);
    paper.display();
    ground.display();
    dustbin.display();
    keyPressed();
    drawSprites();
}

function keyPressed() {
    if (keyCode === UP_ARROW) {

        Matter.Body.applyForce(paper.body, paper.body.position, { x: 1, y: -1 });

    }
}