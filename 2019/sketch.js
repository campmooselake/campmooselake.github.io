//***************************************************
var s1, ax, ay, vx, vy, px, py;
var c, vMultiplier, g, r;
//***************************************************
var Second, Timer, Score, fs;
var bx, by, bs1, bs2, blockbegin, bSpeed;
var FIN;
//***************************************************

function setup() {
  createCanvas(windowWidth, windowHeight);
  rectMode(CENTER);
  noStroke();
  FIN = false;
  bSpeed = 5;
  bs1 = windowWidth / 6;
  blockbegin = random(0 + bs1 / 2, windowWidth - bs1 / 2);
  fs = 30;
  Second = 0;
  Timer = 10;
  Score = 0;
  ax = 0;
  ay = 0;
  vx = 0;
  vy = 0;
  px = windowWidth / 2;
  py = windowHeight / 2;
  s1 = 70;
  g = 0.5;
  r = s1 / 2;
  c = 1;
}
//***************************************************
function draw() {
  background(234, 178, 108);
  fill(234, 178, 120);
  strokeWeight(5);
  ellipse(windowWidth / 2, windowHeight, windowWidth / 1.5);
  ellipse(windowWidth / 2, 0, windowWidth / 1.5);
  fill(234, 0, 0);
  strokeWeight(5);
  rect(windowWidth / 2, 0, windowWidth / 4);
  fill(0);
  rect(windowWidth / 2, windowHeight / 2, windowWidth, 5);
  if (FIN === false) {
    Regles();
    Ballon();
    Block();
    blockbegin = blockbegin + bSpeed;
    Text();
  } else {
    textFont("arial");
    textSize(fs * 1.5);
    textAlign(CENTER);
    fill(0);
    text("FIN! votre pointage: " + Score, windowWidth / 2, windowHeight / 2);
  }
}
//***************************************************
function Ballon() {
  vMultiplier = 0.01;
  ax = rotationY * vMultiplier;
  vx += ax;
  px += vx;
  //px = mouseX;
  ay = rotationX * vMultiplier;
  vy += ay;
  py += vy;
  //py = mouseY;
  fill(200, 100, 0);
  stroke(0);
  strokeWeight(3);
  ellipse(px, py, s1, s1);
  ellipse(px, py, s1 / 1.4, s1);
  ellipse(px, py, s1 / 4, s1);
  //**************Walls*************************
  if (px > windowWidth - r) {
    px = windowWidth - r;
    vx = -vx * g;
  }
  if (px < 0 + r) {
    px = 0 + r;
    vx = -vx * g;
  }
  if (py > windowHeight - r) {
    py = windowHeight - r;
    vy = -vy * g;
  }
  if (py < 0 + r) {
    py = 0 + r;
    vy = -vy * g;
  }
}
//***************************************************
function Block() {
  bx = blockbegin;
  by = windowHeight / 2;
  bs1 = windowWidth / 5.5;
  bs2 = bs1 / 4;
  fill(255);
  rect(bx, by, bs1, bs2);
  //**************BlockWalls******************
  if (bx > windowWidth - bs1 / 2) {
    bx = windowWidth - bs1 / 2;
    bSpeed = -bSpeed;
  } else if (bx < 0 + bs1 / 2) {
    bx = 0 + bs1 / 2;
    bSpeed = -bSpeed;
  }
}
//***************************************************
function Text() {
  textFont("arial");
  textSize(fs);
  textAlign(LEFT);
  fill(0);
  text("Points = " + Score, 50, 50);
  textFont("arial");
  textSize(fs);
  textAlign(RIGHT);
  fill(0);
  text("Temps = " + Timer, windowWidth - 50, 50);
}
//***************************************************
function Regles() {
  Second++;
  if (Second >= 60) {
    Timer--;
    Second = 0;
  }
  if (px >= bx - bs1 / 2 && px <= bx + bs1 / 2 && py >= windowHeight / 2 - 10 && py <= windowHeight / 2 + 10) {
    FIN = true;
  } else {
    if ((py >= windowHeight / 2 - 10) && (py <= windowHeight / 2 + 10)) {
      Timer = 10;
      Second = 0;
      Score++;
    }
  }
}
//***************************************************
function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
//***************************************************