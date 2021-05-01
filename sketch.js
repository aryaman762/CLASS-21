var fixedRect,movingRect;
var edges

function setup() {

  createCanvas(800,400);
 
  movingRect= createSprite(400, 200, 80, 30);
  game= createSprite(100, 200, 80, 30);

  game.velocityX = 3;
  movingRect.velocityX = -3;;
}

function draw() {
  background(0);  
 
 

bounce(movingRect,game);

edges = createEdgeSprites();

game.bounceOff(edges);
movingRect.bounceOff(edges);
  drawSprites();
}



























































