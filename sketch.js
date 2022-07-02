var box;
function setup() {
  createCanvas(400,400);
  box=createSprite(200,200,20,22);
}

function draw() 
{
  background(30);
  if (keyDown("up")){
 // console.log("up")
    box.position.y-=5;
  }
  if (keyDown("down")){
   // console.log("down")
      box.position.y+=5;
    }
    if (keyDown("left")){
    //  console.log("left")
        box.position.x-=5;
      }
      if (keyDown("right")){
        
          box.position.x+=5;
        }
  drawSprites();
}




