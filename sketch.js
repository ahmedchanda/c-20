function setup() {
  createCanvas(800,400);

  moving=createSprite(400, 200, 80, 30);
  fixed=createSprite(200,200,50,80)
  moving.shapeColor="green"
  fixed.shapeColor="green"
  moving.debug=true
  fixed.debug=true

}

function draw() {
  background('yellow');  
  moving.x=World.mouseX;
  moving.y=World.mouseY;
  if(moving.x-fixed.x<moving.width/2+fixed.width/2&&fixed.x-moving.x<fixed.width/2+moving.width/2&&
    moving.y-fixed.y<moving.height/2+fixed.height/2&&fixed.y-moving.y<fixed.height/2+moving.height/2){
    moving.shapeColor='red'
    fixed.shapeColor='red'
  }
else{
  moving.shapeColor="green"
  fixed.shapeColor="green"
}
  drawSprites();
}