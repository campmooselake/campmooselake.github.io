var posX,posY,vX,vY,speed,size;
var POY,POX,POS,POvY,POspeed;
var PTY,PTX,PTS,PTvY,PTspeed;
var hitBox1,hitBox2,victoire1,victoire2;
var RED,BLUE,Life1,Life2;



/*********************************************/

function setup() {
 createCanvas(windowWidth,windowHeight);
 RED=125;
 BLUE=125;
/**************EndGame***************************/
 Life1=3;
 Life2=3;
 victoire1 = false;
 victoire2 = false;
/**************Box*******************************/
 vX=random(-1,1);
 vY=random(-1,1);
 speed=4;
 posX=windowWidth/2;
 posY=windowHeight/2;
 size=40;
/**************PlayerOne*************************/
 POY=windowHeight/2;
 POX=-25;
 POS=150;
 POvY=0;
 POspeed=5;
/**************PlayerTwo*************************/
 PTY=windowHeight/2;
 PTX=windowWidth+25;
 PTS=150;
 PTvY=0;
 PTspeed=5;
}
/*********************************************/
function draw() {
  background(0);
  drawCollision();
  Box();
  PlayerOne();
  PlayerTwo();
  P1L();
  P2L();
  if (posX>=windowWidth) {
  Life1--;
  vX=random(-1,-1.25);
  vY=random(-1,1);
  posX=windowWidth/2;
  posY=windowHeight/2;
  }else if (Life1 === 0) {
  vX=0;
  vY=0;
  victoire1=true;
 }
 if (victoire1 === true) {
  Victoire1();
 }
  if (posX<=0) {
  Life2--;
  vX=random(1,1.25);
  vY=random(-1,1);
  posX=windowWidth/2;
  posY=windowHeight/2;
  }else if (Life2 === 0) {
  vX=0;
  vY=0;
  victoire2=true;
 }
 if (victoire2 === true) {
  Victoire2();
 }
}
/*********************************************/
function Box(){
  //rectMode(CENTER);
  fill(255);
  stroke(RED,0,BLUE);
  strokeWeight(5);
  //rect(posX,posY,size,size);
  ellipse(posX,posY,size,size);
  fill(0,0,255);
  posX+=vX*speed;
  posY+=vY*speed;
if(posY+(size/2)>=windowHeight){
	vY=random(0.9,1.25);
	vY = -vY;
  RED=125;
  BLUE=125;
}else if(posY-(size/2)<=0){
	vY=random(-0.9,-1.25);	
	vY = -vY;
  RED=125;
  BLUE=125;
}
}
/*********************************************/
function PlayerOne(){
  //rectMode(CORNER);
  fill(255);
  stroke(0,0,255);
  strokeWeight(5);
	//rect(POX,POY,POS1,POS2);
  ellipse(POX,POY,POS,POS);
	POY+=POvY*POspeed;
	if(POY+(POS/2)>=windowHeight){
		POvY=0;
	}
	if(POY-(POS/2)<=0){
		POvY=0;
	}
}
/*********************************************/
function PlayerTwo(){
  rectMode(CORNER);
  fill(255);
  stroke(255,0,0);
  strokeWeight(5);
	//rect(PTX,PTY,PTS1,PTS2);
  ellipse(PTX,PTY,PTS,PTS);
	PTY+=PTvY*PTspeed;
  if(PTY+(PTS/2)>=windowHeight){
    PTvY=0;
  }
  if(PTY-(PTS/2)<=0){
    PTvY=0;
  }
}
/*********************************************/
function keyPressed() {
 switch (keyCode) {
   //****************PlayerOne****************************
  case 87:
     POvY= -1;
   break;
  case 83:
     POvY= +1;
   break;
  case 65:
     POvY= 0;
   break;
   //****************PlayerTwo****************************
  case UP_ARROW:
    PTvY= -1;
   break;
  case DOWN_ARROW:
    PTvY= +1;
   break;
  case LEFT_ARROW:
    PTvY= 0;
   break;
  default:
   break;
 }
}
//***************************************************
function drawCollision() {
  hitBox1=(POS/2)+(size/2);
  hitBox2=(PTS/2)+(size/2);

  if (dist(posX, posY, POX, POY) < hitBox1) {
  vX=random(-0.9,-1.25);
  vY=random(-0.9,-1.25);
	vX = -vX;
  BLUE=255;
  RED=0;
  }
  if (dist(posX, posY, PTX, PTY) < hitBox2) {
  vX=random(0.9,1.25);
  vY=random(0.9,1.25);
	vX = -vX;
  BLUE=0;
  RED=255;
  }
}
//***************************************************
function Victoire1() {
 background(0);
 textSize(100);
 stroke(255,0,0);
 fill(0, 0, 255);
 textFont("impact");
 textAlign(CENTER);
 text("VICTOIRE JOUEUR 1", windowWidth / 2, windowHeight / 3);
 textSize(50);
 text("CTRL/CMD+R", windowWidth / 2, windowHeight / 3 + 50);
}
function Victoire2() {
 background(0);
 textSize(100);
 stroke(0,0,255);
 fill(255, 0, 0);
 textFont("impact");
 textAlign(CENTER);
 text("VICTOIRE JOUEUR 2", windowWidth / 2, windowHeight / 3);
 textSize(50);
 text("CTRL/CMD+R", windowWidth / 2, windowHeight / 3 + 50);
}
function P1L() {
 textSize(50);
 stroke(0,0,255);
 fill(255, 0, 0);
 textFont("impact");
 textAlign(CENTER);
 text("Vie: "+ floor(Life1) , windowWidth / 4*3, windowHeight);
}
function P2L() {
 textSize(50);
 stroke(0,0,255);
 fill(255, 0, 0);
 textFont("impact");
 textAlign(CENTER);
 text("Vie: "+ floor(Life2) , windowWidth / 4, windowHeight);
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
