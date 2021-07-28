var flower
function setup() {
createCanvas(400,400);
flower = createSprite(140, 200, 60, 40);
flower.shapeColor = "teal"
}

function draw() {
  background(30);
  if (keyDown (LEFT_ARROW)){
    flower.x=flower.x-2
  }

  if (keyDown (RIGHT_ARROW)){
    flower.x=flower.x+2
  }

  if (keyDown (UP_ARROW)){
    flower.y=flower.y-2
  }

  if (keyDown (DOWN_ARROW)){
    flower.y=flower.y+2
  } 
  drawSprites ();
}




