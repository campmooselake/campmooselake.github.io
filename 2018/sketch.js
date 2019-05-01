var ballX, ballY, ballSize, ballVX, ballVY;
var PlayerX, PlayerY, PlayerSize, PlayerVX, PlayerVY, speed;
var timer, score, multi, timing, ran, pauseBall;
var dist1, life, dif, start, countdown;

function setup() {
  createCanvas(windowWidth, windowHeight);
  rectMode(CENTER);
  ran = random(4, 5);
  ballSize = windowWidth / 13;
  ballX = 0 + windowWidth / 5;
  ballY = 0 + windowHeight / 5;
  ballVX = ran;
  ballVY = ran;
  timer = 0;
  score = 0;
  dif = 0;
  timing = 450;
  multi = 1.5;
  start = false;
  life = 3;
  countdown = -1;
  /******************Player****************************/
  PlayerX = windowWidth / 2;
  PlayerY = windowHeight / 2;
  PlayerSize = windowWidth / 15;
  PlayerVX = 0;
  PlayerVY = 0;
  speed = 15;
  /****************************************************/
}

function draw() {
  background(0, 100, 99);
  text("Utiliser les flèches pour bouger", windowWidth / 2, windowHeight / 1.5);
  fill(255, 0, 0);
  textFont("segoe ui black");
  textSize(windowWidth / 8);
  textAlign(CENTER);
  text("DODGE-BALL", windowWidth / 2, windowHeight / 3);
  textFont("arial black");
  textSize(windowWidth / 21);
  textAlign(CENTER);
  fill(255, 255, 0);
  text("Appuyer ESPACE pour commencer", windowWidth / 2, windowHeight / 2);
  if (start === true) {
    score++;
    if (score == 60) {
      timer++;
      score = 0;
      countdown--;
    }
    if (countdown >= 0) {
      pauseBall = false;
    } else if (countdown <= 0) {
      pauseBall = true;
    }
    console.log(keyCode);
    textAlign(LEFT);
    background(135, 0, 150);
    fill(0);
    strokeWeight(0);
    textSize(windowWidth / 30);
    text("Score: " + timer, 0 + windowWidth / 20, 0 + windowHeight / 10);
    text("Lives: " + life, 0 + windowWidth / 20, 0 + 2 * windowHeight / 10);
    if (pauseBall === true) {
      Ball();
    }
    strokeWeight(5);
    stroke(255, 0, 0);
    fill(100, 100, 100);
    ellipse(ballX, ballY, ballSize, ballSize);
    Player();
    dist1 = (PlayerSize / 2) + (ballSize / 2);
    if (dist(ballX, ballY, PlayerX, PlayerY) <= dist1) {
      life--;
      countdown = 2;
      PlayerX = 0 + PlayerSize;
      PlayerY = 0 + PlayerSize;
      ballX = windowWidth - ballSize;
      ballY = windowHeight - ballSize;
    }
    if (life <= 0) {
      score = 0;
      background(255, 150, 0);
      textFont("impact");
      textSize(windowWidth / 7);
      textAlign(CENTER);
      stroke(255);
      fill(255, 255, 0);
      strokeWeight(2);
      text("FIN", windowWidth / 2, windowHeight / 2);
      textSize(windowWidth / 13);
      text("Pointage: " + timer, windowWidth / 2, windowHeight / 2 + windowWidth / 10);
      text("CRTL/CMD + R pour recommencer", windowWidth / 2, windowHeight / 2 + windowWidth / 9);
    }
  }
}

function Player() {
  strokeWeight(5);
  stroke(0, 31, 255);
  fill(22, 247, 15);
  ellipse(PlayerX, PlayerY, PlayerSize, PlayerSize);
  /****************************************************/
  PlayerX += PlayerVX;
  PlayerY += PlayerVY;
  /****************************************************/
  if (PlayerX >= windowWidth) {
    PlayerX = 0;
  } else if (PlayerX <= 0) {
    PlayerX = windowWidth;
  } else if (PlayerY <= 0 + PlayerSize / 2) {
    PlayerY = PlayerY + speed;
  } else if (PlayerY >= windowHeight - PlayerSize / 2) {
    PlayerY = PlayerY - speed;
  }
}

function Ball() {
  dif++;
  if (dif == timing * 1) {
    ballVX = ballVX * multi;
    ballVY = ballVY * multi;
    ballSize = ballSize * multi;
  } else if (dif == timing * 2) {
    ballVX = ballVX * multi;
    ballVY = ballVY * multi;
    ballSize = ballSize * multi;
  } else if (dif == timing * 3) {
    ballVX = ballVX * multi;
    ballVY = ballVY * multi;
  } else if (dif == timing * 4) {
    ballVX = ballVX * multi;
    ballVY = ballVY * multi;
  }
  ballX += ballVX;
  ballY += ballVY;
  if (ballX + ballSize / 2 >= windowWidth) {
    ballVX = -ballVX;
    ballX = windowWidth - ballSize / 2 - 5;
  } else if (ballX - ballSize / 2 <= 0) {
    ballVX = -ballVX;
    ballX = 0 + ballSize / 2 + 5;
  } else if (ballY - ballSize / 2 <= 0) {
    ballVY = -ballVY;
    ballY = 0 + ballSize / 2 + 5;
  } else if (ballY + ballSize / 2 >= windowHeight) {
    ballVY = -ballVY;
    ballY = windowHeight - ballSize / 2 - 5;
  }
}

function keyPressed() {
  switch (keyCode) {
    case LEFT_ARROW:
      PlayerVX = -speed;
      PlayerVY = 0;
      break;
    case RIGHT_ARROW:
      PlayerVX = +speed;
      PlayerVY = 0;
      break;
    case UP_ARROW:
      PlayerVY = -speed;
      PlayerVX = 0;
      break;
    case DOWN_ARROW:
      PlayerVY = +speed;
      PlayerVX = 0;
      break;
    case 32:
      start = true;
      break;
    case 16:
      start = false;
      break;
    default:
      break;
  }
}

function keyReleased() {
  switch (keyCode) {
    case LEFT_ARROW:
      PlayerVX = 0;
      break;
    case RIGHT_ARROW:
      PlayerVX = 0;
      break;
    case UP_ARROW:
      PlayerVY = 0;
      break;
    case DOWN_ARROW:
      PlayerVY = 0;
      break;
    default:
      break;
  }
}