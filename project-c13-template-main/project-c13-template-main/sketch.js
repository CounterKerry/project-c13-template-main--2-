// Variáveis

var garden, rabbit, apple, orange, red;
var gardenImg, rabbitImg, appleImg, orangeImg, redImg;

function preload(){
// Carregando imagens
  
  gardenImg = loadImage("garden.png");
  rabbitImg = loadImage("rabbit.png");
  appleImg = loadImage("apple.png");
 orangeImg = loadImage("orangeLeaf.png");
  redImg = loadImage("redImage.png"); 
}

function setup(){
    createCanvas(400,400);  
// Fazendo o fundo

  garden=createSprite(200,200);
  garden.addImage(gardenImg);
// Criando sprite do coelho

  rabbit = createSprite(180,340,30,30);
  rabbit.scale =0.09;
  rabbit.addImage(rabbitImg);
}


function draw() {
    background(0);
  
  edges= createEdgeSprites();
  
  rabbit.collide(edges);
  rabbit.x = World.mouseX;

  spawnApple();
  
  spawnRed();
  
  spawnOrange();

  drawSprites();
  
}

function spawnApple() {

  if (frameCount%60 === 0) {
// Criando as maçãs
    
    apple = createSprite(200, 0, 30, 30);
    apple.addImage("apple.png", appleImg);
    apple.scale = 0.07
    apple.velocityY = 5;
    apple.x = Math.round(random(100, 300));
    
    apple.depht = rabbit.depht;
    rabbit.depht = rabbit.depht +2;

    console.log(apple.depth);
  }
}

function spawnRed() {

  if (frameCount%80 === 0) {
// Criando as folhas
    
    red = createSprite(200, 0, 30, 30);
    red.addImage("redImage.png", redImg);
    red.scale = 0.07
    red.velocityY = 5;
    red.x = Math.round(random(100, 300));
  }
}

function spawnOrange() {

  if (frameCount%70 === 0) {
// Criando as folhas
    
    orange = createSprite(200, 0, 30, 30);
    orange.addImage("orangeLeaf.png", orangeImg);
    orange.scale = 0.07
    orange.velocityY = 5;
    orange.x = Math.round(random(100, 300));
  }
}

