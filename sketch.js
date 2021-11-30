var box;


function setup() {
  createCanvas(750,750);
  box = createSprite(375,375,100,100)
  box.shapeColor = "red"
}

function draw() 
{
  background("blue");

if (keyIsDown(RIGHT_ARROW)) {
box.x = box.x+2
}

if (keyIsDown(LEFT_ARROW)) {
box.x = box.x-2
}
if (keyIsDown(UP_ARROW)) {
box.y = box.y-2
}
if (keyIsDown(DOWN_ARROW)) {
box.y = box.y+2
}
  drawSprites()
}




