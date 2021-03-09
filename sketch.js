var girl;
var girlimg1,girlimg2,girlimg3,girlimg4,girlimg5;
var backgr1,backgr2,backgr3,backgr4,backgr5;
var maze1,maze2,maze3;
var certi1,certi1img;

var level,gameState;



function preload() {
  backgr1 = loadImage("images/backgd1.png");
  backgr2 = loadImage("images/backgd2.jpg");
  backgr3 = loadImage("images/backgd3.jpg");
  backgr4 = loadImage("images/backgd4.jpg");
  backgr5 = loadImage("images/backgd5.jpg");

  girlimg1 = loadImage("images/baby.png");
  girlimg2 = loadImage("images/girllevel2.png")
  girlimg3 = loadImage("images/girllevel3.png")
  girlimg4 = loadImage("images/girllevel4.png")
  girlimg5 = loadImage("images/girllevel5.png")

  certi1img = loadImage("images/certificate.png")
}


function setup() {
  createCanvas(800,700);
  maze1 = new Group();
  maze2 = new Group();
  maze3 = new Group();
  maze4 = new Group();
  maze5 = new Group();
  
  girl = createSprite(70,250);
  girl.addImage("girlLevel1",girlimg1);
  girl.addImage("girlLevel2",girlimg2);
  girl.addImage("girlLevel3",girlimg3);
  girl.addImage("girlLevel4",girlimg4);
  girl.addImage("girlLevel5",girlimg5);

  girl.scale = 0.15;

  certi1 = createSprite(580,650);
  certi1.addImage(certi1img);
  certi1.scale = 0.05;

  level=5;
  gameState=0;

  level1maze1 = createSprite(70,120,70,200);
  level1maze2 = createSprite(430,50,650,70);
  level1maze3 = createSprite(720,350,70,640);
  level1maze4 = createSprite(660,630,100,70);
  level1maze5 = createSprite(635,500,200,70);
  level1maze6 = createSprite(290,630,500,70);
  level1maze7 = createSprite(288,500,220,70);
  level1maze8 = createSprite(215,375,220,70);
  level1maze9 = createSprite(500,375,200,70);
  level1maze10= createSprite(400,250,150,70);
  level1maze11= createSprite(70,450,70,350);
  level1maze12= createSprite(215,245,70,200);
  level1maze13= createSprite(355,185,70,200);
  level1maze14= createSprite(575,280,70,250);
  level1maze15= createSprite(430,470,70,250);

  level2maze1 = createSprite(400,95,600,40);
  level2maze2 = createSprite(110,125,40,100);
  level2maze3 = createSprite(156,180,80,30);
  level2maze4 = createSprite(690,280,40,335);  
  level2maze5 = createSprite(108,445,40,345);
  level2maze6 = createSprite(380,600,600,40);
  level2maze7 = createSprite(690,575,40,100);
  level2maze8 = createSprite(660,520,95,40);
  level2maze9 = createSprite(400,120,40,95);
  level2maze10= createSprite(304,239,40,95);
  level2maze11= createSprite(495,470,40,90);
  level2maze12= createSprite(400,550,40,90);
  level2maze13= createSprite(498,280,40,180);
  level2maze14= createSprite(593,305,40,225);
  level2maze15= createSprite(445,433,450,40);
  level2maze16= createSprite(312,520,200,40);
  level2maze17= createSprite(290,350,400,40);
  level2maze18= createSprite(250,265,290,40);

  level3maze1 = createSprite(420,40,800,65);
  level3maze2 = createSprite(45,390,65,550);
  level3maze3 = createSprite(320,610,610,65);
  level3maze4 = createSprite(770,300,65,700);
  level3maze5 = createSprite(155,150,65,170);
  level3maze6 = createSprite(435,125,65,150);
  level3maze7 = createSprite(545,150,65,175);
  level3maze8 = createSprite(655,190,65,170);
  level3maze9 = createSprite(330,330,65,430);
  level3maze10= createSprite(150,500,65,270);
  level3maze11= createSprite(435,540,65,180);
  level3maze12= createSprite(545,435,65,195);
  level3maze13= createSprite(655,540,65,200);
  level3maze14= createSprite(265,175,65,120);
  level3maze15= createSprite(165,300,180,65);
  level3maze16= createSprite(200,400,100,65);
  level3maze17= createSprite(225,510,150,65);
  level3maze18= createSprite(395,370,140,65);
  level3maze19= createSprite(490,270,185,65);
  level3maze20= createSprite(680,270,110,65);
  level3maze21= createSprite(625,370,130,65);

  level4maze1 = createSprite(50,390,60,700);
  level4maze2 = createSprite(250,60,375,50);
  level4maze3 = createSprite(650,60,250,50);
  level4maze4 = createSprite(750,390,60,700);
  level4maze5 = createSprite(160,670,200,50);
  level4maze6 = createSprite(520,670,400,50);
  level4maze7 = createSprite(280,100,40,80);
  level4maze8 = createSprite(150,170,40,70);
  level4maze9 = createSprite(265,150,260,40);
  level4maze10= createSprite(650,370,40,480);
  level4maze11= createSprite(150,370,40,235);
  level4maze12= createSprite(240,345,40,120);
  level4maze13= createSprite(330,415,40,60);
  level4maze14= createSprite(470,370,40,145);
  level4maze15= createSprite(560,448,40,150);
  level4maze16= createSprite(150,570,40,70);
  level4maze17= createSprite(240,490,40,70);
  level4maze18= createSprite(330,548,40,115);
  level4maze19= createSprite(465,548,40,110);
  level4maze20= createSprite(375,270,40,110);
  level4maze21= createSprite(465,195,40,100);
  level4maze22= createSprite(560,270,40,110);
  level4maze23= createSprite(560,145,170,40);
  level4maze25= createSprite(350,225,230,40);
  level4maze26= createSprite(340,303,50,40);
  level4maze27= createSprite(105,350,50,40);
  level4maze28= createSprite(365,583,50,40);
  level4maze29= createSprite(645,270,150,40);
  level4maze30= createSprite(250,390,180,40);
  level4maze31= createSprite(440,422,200,40);
  level4maze32= createSprite(360,502,200,40);
  level4maze33= createSprite(170,583,170,40);
  level4maze34= createSprite(550,583,170,40);

  level5maze1 = createSprite(400,48,720,30);
  level5maze2 = createSprite(390,650,700,30);
  level5maze3 = createSprite(750,390,30,550);
  level5maze4 = createSprite(50,300,30,600);
  level5maze5 = createSprite(130,176,30,150);
  level5maze6 = createSprite(210,120,30,150);
  level5maze7 = createSprite(590,120,30,150);
  level5maze8 = createSprite(670,180,30,150);
  level5maze9 = createSprite(440,90,30,80);
  level5maze10= createSprite(210,280,30,80);
  level5maze11= createSprite(285,220,30,90);
  level5maze12= createSprite(365,240,30,150);
  level5maze13= createSprite(438,220,30,90);
  level5maze14= createSprite(515,285,30,90);
  level5maze15= createSprite(130,450,30,150);
  level5maze16= createSprite(210,550,30,85);
  level5maze17= createSprite(290,505,30,260);
  level5maze18= createSprite(360,450,30,150);
  level5maze19= createSprite(440,420,30,220);
  level5maze20= createSprite(670,387,30,165);
  level5maze21= createSprite(513,580,30,150);
  level5maze22= createSprite(670,550,30,90);
  level5maze23= createSprite(210,410,30,90);
  level5maze24= createSprite(400,115,250,30);
  level5maze25= createSprite(540,180,100,30);
  level5maze26= createSprite(700,120,100,30);
  level5maze27= createSprite(180,250,250,30);
  level5maze28= createSprite(560,250,220,30);
  level5maze29= createSprite(280,320,320,30);
  level5maze30= createSprite(560,318,100,30);
  level5maze31= createSprite(100,390,80,30);
  level5maze32= createSprite(240,386,80,30);
  level5maze33= createSprite(170,515,80,30);
  level5maze34= createSprite(100,585,90,30);
  level5maze35= createSprite(390,515,80,30);
  level5maze36= createSprite(425,585,150,30);
  level5maze37= createSprite(620,585,80,30);
  level5maze38= createSprite(550,450,220,30);
  level5maze39= createSprite(530,380,150,30);
  level5maze40= createSprite(590,520,150,30);
  
  
  
  



  


  maze1.add(level1maze1);
  maze1.add(level1maze2);
  maze1.add(level1maze3);
  maze1.add(level1maze4);
  maze1.add(level1maze5);
  maze1.add(level1maze6);
  maze1.add(level1maze7);
  maze1.add(level1maze8);
  maze1.add(level1maze9);
  maze1.add(level1maze10);
  maze1.add(level1maze11);
  maze1.add(level1maze12);
  maze1.add(level1maze13);
  maze1.add(level1maze14);
  maze1.add(level1maze15);

  maze2.add(level2maze1);
  maze2.add(level2maze2);
  maze2.add(level2maze3);
  maze2.add(level2maze4);
  maze2.add(level2maze5);
  maze2.add(level2maze6);
  maze2.add(level2maze7);
  maze2.add(level2maze8);
  maze2.add(level2maze9);
  maze2.add(level2maze10);
  maze2.add(level2maze11);
  maze2.add(level2maze12);
  maze2.add(level2maze13);
  maze2.add(level2maze14);
  maze2.add(level2maze15);
  maze2.add(level2maze16);
  maze2.add(level2maze17);
  maze2.add(level2maze18);

  maze3.add(level3maze1);
  maze3.add(level3maze2);
  maze3.add(level3maze3);
  maze3.add(level3maze4);
  maze3.add(level3maze5);
  maze3.add(level3maze6);
  maze3.add(level3maze7);
  maze3.add(level3maze8);
  maze3.add(level3maze9);
  maze3.add(level3maze10);
  maze3.add(level3maze11);
  maze3.add(level3maze12);
  maze3.add(level3maze13);
  maze3.add(level3maze14);
  maze3.add(level3maze15);
  maze3.add(level3maze16);
  maze3.add(level3maze17);
  maze3.add(level3maze18);
  maze3.add(level3maze19);
  maze3.add(level3maze20);
  maze3.add(level3maze21);

  maze4.add(level4maze1);
  maze4.add(level4maze2);
  maze4.add(level4maze3);
  maze4.add(level4maze4);
  maze4.add(level4maze5);
  maze4.add(level4maze6);
  maze4.add(level4maze7);
  maze4.add(level4maze8);
  maze4.add(level4maze9);
  maze4.add(level4maze10);
  maze4.add(level4maze11);
  maze4.add(level4maze12);
  maze4.add(level4maze13);
  maze4.add(level4maze14);
  maze4.add(level4maze15);
  maze4.add(level4maze16);
  maze4.add(level4maze17);
  maze4.add(level4maze18);
  maze4.add(level4maze19);
  maze4.add(level4maze20);
  maze4.add(level4maze21);
  maze4.add(level4maze22);
  maze4.add(level4maze23);
  //maze4.add(level4maze24);
  maze4.add(level4maze25);
  maze4.add(level4maze26);
  maze4.add(level4maze27);
  maze4.add(level4maze28);
  maze4.add(level4maze29);
  maze4.add(level4maze30);
  maze4.add(level4maze31);
  maze4.add(level4maze32);
  maze4.add(level4maze33);
  maze4.add(level4maze34);

  maze5.add(level5maze1);
  maze5.add(level5maze2);
  maze5.add(level5maze3);
  maze5.add(level5maze4);
  maze5.add(level5maze5);
  maze5.add(level5maze6);
  maze5.add(level5maze7);
  maze5.add(level5maze8);
  maze5.add(level5maze9);
  maze5.add(level5maze10);
  maze5.add(level5maze11);
  maze5.add(level5maze12);
  maze5.add(level5maze13);
  maze5.add(level5maze14);
  maze5.add(level5maze15);
  maze5.add(level5maze16);
  maze5.add(level5maze17);
  maze5.add(level5maze18);
  maze5.add(level5maze19);
  maze5.add(level5maze20);
  maze5.add(level5maze21);
  maze5.add(level5maze22);
  maze5.add(level5maze23);
  maze5.add(level5maze24);
  maze5.add(level5maze25);
  maze5.add(level5maze26);
  maze5.add(level5maze27);
  maze5.add(level5maze28);
  maze5.add(level5maze29);
  maze5.add(level5maze30);
  maze5.add(level5maze31);
  maze5.add(level5maze32);
  maze5.add(level5maze33);
  maze5.add(level5maze34);
  maze5.add(level5maze35);
  maze5.add(level5maze36);
  maze5.add(level5maze37);
  maze5.add(level5maze38);
  maze5.add(level5maze39);
  maze5.add(level5maze40);
  
  



  
  





  
 

  maze1.setVisibleEach(false);
  maze2.setVisibleEach(false);
  maze3.setVisibleEach(false);
  maze4.setVisibleEach(false);
  maze5.setVisibleEach(false);
 
  
}


function draw() {

if(level ===1){

   background(backgr1); 
   girl.collide(maze1);
   gameStateControl();

}


else if(level === 2){
  background(backgr2);
  girl.changeImage("girlLevel2",girlimg2);
  girl.collide(maze2);
  gameStateControl();
  girl.debug = true;
 

}

else if(level === 3){
  background(backgr3);
  girl.changeImage("girlLevel3",girlimg3);
  girl.collide(maze3);
 
  gameStateControl(); 

}

else if(level === 4){
  background(backgr4);
  girl.changeImage("girlLevel4",girlimg4);
  girl.collide(maze4);
  //girl.x = 450;
  //girl.y = 50;
  gameStateControl(); 

}

else if(level === 5){
  background(backgr5);
  girl.changeImage("girlLevel5",girlimg5);
  girl.x = 80;
  girl.y = 620;
  //girl.collide(maze5);
  gameStateControl(); 

}

else if(level >=6){
// will display the final win of the game.. 
}

  drawSprites();
}




function gameStateControl(){
  
  if(gameState === 0){
    textSize(40);
    fill("red");
    stroke("yellow");
    text("Press SPACE to start",width/2 -150,height/2);

    if(level === 2){
      girl.x = 100;
      girl.y = 220;
    }else if(level === 3){
      girl.x = 710;
      girl.y = 600;
    }

    if(keyDown("space")){
      gameState = 1;
    }
  }
else if(gameState === 1){
 
  if (keyDown(LEFT_ARROW)){
    girl.x = girl.x-5;
  } 

  if (keyDown(RIGHT_ARROW)){
    girl.x = girl.x+5;
  } 

  if (keyDown(UP_ARROW)){
    girl.y = girl.y-5;
  } 

  if (keyDown(DOWN_ARROW)){
    girl.y = girl.y+5;
  } 


if(girl.isTouching(certi1)){
  // level = level+1;
   gameState = 2;
}
}

else if(gameState === 2){
  textSize(40);
  fill("red");
  stroke("yellow");
  text("Level Completed,Press R",width/2 -100,height/2);

  if(keyDown("R")){
    gameState = 0;
    level = level+1;
  }
}
}

function spawnDiamonds(){
  if(frameCount % 100===0){
    var diamond = createSprite(random(10,width-50),random(0,width-50));
   // diamond.velocityX = random(-8,8);
    //diamond.velocityY = random(3,8);
    diamond.addImage(diamondImg);
    diamond.scale =0.04;
    diamond.lifetime = 200;
    diamondGroup.add(diamond);
  }
}