var a, b, c, d, e, f, g;
function setup() {
  createCanvas(1300,650);
 a = createSprite(50, 370, 50, 560);
 b =  createSprite(125, 490, 100, 320);
 c = createSprite(1250, 370, 50, 560);
 d =  createSprite(1175, 490, 100, 320);
 e =  createSprite(300, 450, 250, 400);
 f =  createSprite(1000, 450, 250, 400);
 g =  createSprite(650, 370, 450, 560);
}

function draw() {
  background(0);
  triangle(15, 100, 50, 25, 85, 100) ;
  triangle(1215, 100, 1250, 25, 1285, 100) ; 
  quad(600, 25, 400, 90, 900, 90,  700, 25 ) ;
  drawSprites();
}