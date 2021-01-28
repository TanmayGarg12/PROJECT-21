var canvas;
var block,block1,block2,block3;
var ball;
var music;
var edges;

function preload(){
    music = loadSound("music.mp3");
}


function setup(){
    canvas = createCanvas(800,600);

    block = createSprite(0,580,360,30);
    block.shapeColor = "red";

    block1 = createSprite(295,580,200,30);
    block1.shapeColor = "blue";

    block2 = createSprite(515,580,200,30);
    block2.shapeColor ="pink";

    block3 = createSprite(740,580,220,30);
    block3.shapeColor = "yellow";

    ball = createSprite(random(20,750),100, 40,40);
    ball.shapeColor = "black";
    ball.velocityX = 4;
    ball.velocityY = 9;

}

function draw() {
    background(rgb(169,169,169));
    edges=createEdgeSprites();
    ball.bounceOff(edges);

    if(block.isTouching(ball) && ball.bounceOff(block)){
        ball.shapeColor ="orange";
        music.play();
    }

    if(block1.isTouching(ball)){
        ball.shapeColor = "green";
        ball.velocityX = 0;
        ball.velocityY = 0;
        music.stop();
    }

    if(block2.isTouching(ball) && ball.bounceOff(block2)){
        ball.shapeColor ="red";
    }

    if(block3.isTouching(ball) && ball.bounceOff(block3)){
        ball.shapeColor = "voilet";
    }

    drawSprites();
}