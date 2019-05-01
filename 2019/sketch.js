//***************************************************
var s1, ax, ay, vx, vy, px, py;
var c, vMultiplier, g, r;
//***************************************************
var Second, Timer, Second2, Timer2, TimerText, Score, fs;
var bx, by, bs1, bs2, blockbegin, bSpeed;
var FIN, DEBUT, Cooldown, cirlce;
//***************************************************

function setup() {
  createCanvas(windowWidth, windowHeight);
  rectMode(CENTER);
  noStroke();
  Cooldown = 0;
  FIN = false;
  DEBUT = true;
  bSpeed = 5;
  bs1 = windowWidth / 6;
  blockbegin = random(0 + bs1 / 2, windowWidth - bs1 / 2);
  fs = 20;
  Second = 0;
  Timer = 10;
  Second2 = 0;
  Timer2 = 5;
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
  fill(50, 0, 255);
  ellipse(windowWidth / 2, windowHeight / 2, windowWidth / 4);
  fill(0);
  rect(windowWidth / 2, windowHeight / 2, windowWidth, 5);
  TimerText = Timer2;
  Regles();
  Ballon();
  if (Timer2 >= 0) {
    Second2++;
  }
  if (Second2 >= 60) {
    Timer2--;
    Second2 = 0;
  } else if (Timer2 <= 0) {
    DEBUT = false;
    TimerText = "";
  }
  textFont("arial");
  textSize(fs * 4);
  textAlign(CENTER);
  fill(0);
  text(TimerText, windowWidth / 2, windowHeight / 2 - 50);
  if (DEBUT === false) {
    Second++;
    if (Second >= 60) {
      Timer--;
      Second = 0;
      Cooldown = 0;
    } else if (Timer <= 0) {
      FIN = true;
    }
    if (FIN === false) {
      Block();
      blockbegin = blockbegin + bSpeed;
      Text();
    } else {
      textFont("arial");
      textSize(fs * 1.5);
      textAlign(CENTER);
      fill(0);
      text("FIN! pointage: " + Score, windowWidth / 2, windowHeight / 2 - 10);
    }
    circle = (px + s1 / 2) || (px - s1 / 2) || (py + s1 / 2) || (py - s1 / 2);
  }
}
//***************************************************
function Ballon() {
  vMultiplier = 0.01;
  ax = rotationY * vMultiplier;
  vx += ax;
  px += vx;
  px = mouseX;
  ay = rotationX * vMultiplier;
  vy += ay;
  py += vy;
  py = mouseY;
  fill(200, 100, 0);
  stroke(0);
  strokeWeight(3);
  ellipse(px, py, s1, s1);
  //  ellipse(px, py, s1 / 1.4, s1);
  //  ellipse(px, py, s1 / 4, s1);
  fill(0);
  rect(px, py, s1, 3)
  rect(px, py, 3, s1)
  textFont("calibri");
  textSize(s1 / 4 * 3);
  textAlign(CENTER);
  fill(0);
  text(") (", px, py + 12);
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
  if (px + s1 / 2 >= bx - bs1 / 2 && px - s1 / 2 <= bx + bs1 / 2 && py + s1 / 2 >= windowHeight / 2 - 10 && py - s1 / 2 <= windowHeight / 2 + 10) {
    FIN = true;
  } else {
    if (DEBUT === false) {
      if ((py >= windowHeight / 2 - 10) && (py <= windowHeight / 2 + 10)) {
        if (FIN === false) {
          if (Cooldown <= 1) {
            Score++;
          }
        }
        Timer = 10;
        Second = 0;
        Cooldown++;
      }
    }
  }
}
//***************************************************
function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
//***************************************************