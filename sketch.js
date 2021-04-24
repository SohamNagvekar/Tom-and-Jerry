var bgImg;
var cat, catImg1, catImg2, catImg3;
var mouse, mouseImg1, mouseImg2;
function preload() {
    bgImg = loadImage("images/garden.png");
    catImg1 = loadImage("images/cat1.png");
    catImg2 = loadAnimation("images/cat2.png", "images/cat3.png");
    catImg3 = loadImage("images/cat4.png");
    mouseImg1 = loadImage("images/mouse1.png");
    mouseImg2 = loadAnimation("images/mouse2.png", "images/mouse3.png");
}

function setup(){
    createCanvas(1000,800);
    cat = createSprite(725,650,100,100)
    cat.addImage("sittingCat", catImg1);
    cat.scale = 0.2;

    mouse = createSprite(200,650,100,100);
    mouse.addImage("standingMouse", mouseImg1);
    mouse.scale = 0.12;
    mouse.setCollider("rectangle", 0, 0,20, 20);
}

function draw() {
    createCanvas(1000,800);
    background(bgImg);
   
    if(cat.isTouching(mouse)){
        cat.addImage("sittingCat", catImg3);
        cat.changeImage("sittingCat");
        cat.velocityX = 0;

        mouse.changeImage("standingMouse");
    }

    drawSprites();
}


function keyPressed(){

  if(keyCode === LEFT_ARROW){
      mouse.addAnimation("mouseTeasing", mouseImg2);
      mouse.changeAnimation("mouseTeasing");
      mouse.frameDelay = 10;

      cat.addAnimation("catMoving", catImg2);
      cat.changeAnimation("catMoving");
      cat.velocityX = -2
  }


}
