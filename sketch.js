var fixedRECT,movingRECT

function setup() {
  createCanvas(400,400);
 fixedRECT= createSprite(200, 200, 50, 80);
 fixedRECT.shapeColor="green"

movingRECT=createSprite(400, 200, 80, 30);
movingRECT.shapeColor="green"


}

function draw() {
  background(0);
  movingRECT.y=mouseY
  movingRECT.x=mouseX
  if (movingRECT.x-fixedRECT.x<fixedRECT.width/2+movingRECT.width/2 &&
   fixedRECT.x-movingRECT.x <fixedRECT.width/2+movingRECT.width/2 &&
    movingRECT.y-fixedRECT.y<fixedRECT.height/2+movingRECT.height/2 &&
    fixedRECT.y-movingRECT.y <fixedRECT.height/2+movingRECT.height/2
      
    ) 
  {
    movingRECT.shapeColor="red"
    fixedRECT.shapeColor="red"

  }
  else
   {
   movingRECT.shapeColor="green"
   fixedRECT.shapeColor="green"   
   }
  drawSprites();
}