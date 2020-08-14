var fixedRect, movingRect;

function setup() {
  createCanvas(1200,800);
  fixedRect = createSprite(600, 400, 50, 80);
  fixedRect.shapeColor = "green";

  movingRect = createSprite(400,200,80,30);
  movingRect.shapeColor = "green";

  rect1 = createSprite(300, 200, 50, 60);
  rect1.shapeColor = "blue";

  rect2 = createSprite(500, 200, 50, 60);
  rect2.shapeColor = "blue";

  rect2.velocityX = -1;
}

function draw() {
  background(0,0,0);  
  movingRect.x = World.mouseX;
  movingRect.y = World.mouseY;
  
  if (isTouching(movingRect, rect1)){
    movingRect.shapeColor = "yellow"
    rect1.shapeColor = "yellow"
  }   else {
    movingRect.shapeColor = "green"
    rect1.shapeColor = "blue"
  }
  
  bounceOff (rect1, rect2);


  drawSprites();
}