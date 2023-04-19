//Liam Dworkin
//NMD 105
//April 17th, 2023

let speedX;
let x1;
let directionX;

let speedY;
let y1;
let directionY;

function setup() {
  createCanvas(700, 550);
  push();
  frameRate(30);
  pop();
  angleMode(DEGREES);

  /*added for random direction and speed of some extent. issues with the boundaries have been solved by removing redundancy and moving all of the conditionals into the classes themselves*/

  // speedX = 3;
  // directionX = random(1,3);
  //x1 = width/2;
  x1 = random(width);

  // speedY = 3;
  // directionY = random(1,3);
  //y1 = height/2;
  y1 = random(height);

  bubbles = [];
  bubbles1 = [];
  yeetBall1 = [];

  //loop for the bubbles using the array

  //bubble increases the catchers size

  for (let bubblesDrawn = 0; bubblesDrawn < 50; bubblesDrawn++) {
    bubbles[bubblesDrawn] = new bubble(x1, y1, random(7, 10));
  }

  //bubbleBad shrinks the catcher

  for (let bubblesDrawn1 = 0; bubblesDrawn1 < 50; bubblesDrawn1++) {
    bubbles1[bubblesDrawn1] = new bubbleBad(x1, y1, random(4, 6));
  }

  //added in the yeetBall (catchers)

  for (let yeetBallDrawn = 0; yeetBallDrawn < 3; yeetBallDrawn++) {
    yeetBall1[yeetBallDrawn] = new yeetBall(x1, y1, 1);
  }
}

function draw() {
  // x1 += speedX * directionX;
  // y1 += speedY * directionY;

  background("lavender");

  /*the goal is to have some sort of agar.io like simulation- the bubbles will be collected for enlarging the sprite (yeetBall) and there are particles that will then 'damage' and shrink the yeetBall sprite- I have not yet added in functionality because I wanted to ask about how to do it*/

  for (let bubblesShown = 0; bubblesShown < 50; bubblesShown++) {
    bubbles[bubblesShown].update();
    bubbles[bubblesShown].show();
    //bubbles[bubblesShown].move(); (part of experiment)
  }

  for (let bubblesShown1 = 0; bubblesShown1 < 50; bubblesShown1++) {
    bubbles1[bubblesShown1].update();
    bubbles1[bubblesShown1].show();
    //bubbles[bubblesShown].move(); (part of experiment)
  }

  for (let bubblesShown2 = 0; bubblesShown2 < 3; bubblesShown2++) {
    yeetBall1[bubblesShown2].update();
    yeetBall1[bubblesShown2].show();
    //bubbles[bubblesShown].move(); (part of experiment)
  }
}

//code from class assignment for the bubble creation

//boundaries have been solved !!!
//now they have been moved into the classes themselves

class bubble {
  constructor(x, y, r) {
    this.x = x;
    this.y = y;
    this.r = r;
    this.randX = random(1, 5);
    this.randY = random(1, 5);
  }

  //random variables in x and y

  update() {
    this.x = this.x + this.randX;
    this.y = this.y + this.randY;

    //added the class into the conditional itself

    if (this.x + 25 >= width || this.x < 25) {
      // check if hits the right edge
      this.randX *= -1;
    }

    //conditional - the same as width boundary but for height

    if (this.y + 25 >= height || this.y < 25) {
      // check if hits the top/bottom edge
      this.randY *= -1;
    }
  }

  show() {
    push();
    stroke("gold");
    strokeWeight(5);
    fill("salmon");
    translate(this.x, this.y, this.r * 2);
    ellipse(0, 0, this.r * 3);
    pop();
  }
}

class bubbleBad {
  constructor(x, y, r) {
    this.x = x;
    this.y = y;
    this.r = r;
    this.randX = random(1, 5);
    this.randY = random(1, 3);
  }

  //random variables in x and y

  update() {
    this.x = this.x + this.randX;
    this.y = this.y + this.randY;

    //added the conditional into the class itself

    if (this.x + 25 >= width || this.x < 25) {
      // check if hits the right edge
      this.randX *= -1;
    }

    //conditional - the same as width boundary but for height

    if (this.y + 25 >= height || this.y < 25) {
      // check if hits the top/bottom edge
      this.randY *= -1;
    }
  }

  show() {
    push();
    stroke("green");
    strokeWeight(5);
    fill(random(200));
    translate(this.x, this.y, this.r * 2);
    ellipse(0, 0, this.r * 3);
    pop();
  }
}

class yeetBall {
  constructor(x, y, r) {
    this.x = x;
    this.y = y;
    this.r = r;
    this.randX = random(1, 3);
    this.randY = random(1, 3);
  }
  //random variables in x and y (not the best movement yet)
  update() {
    this.x = this.x + this.randX;
    this.y = this.y + this.randY;

    //added the conditional into the class itself

    if (this.x + 25 >= width || this.x < 25) {
      // check if hits the right edge
      this.randX *= -1;
    }

    //conditional - the same as width boundary but for height

    if (this.y + 25 >= height || this.y < 25) {
      // check if hits the top/bottom edge
      this.randY *= -1;
    }
  }
  show() {
    push();
    translate(this.x, this.y, this.r * 2);
    rotate(random(1, 10));
    strokeWeight(5);
    stroke("violet");
    fill("hsla(170, 80%, 75%, .7)");
    ellipse(0, 0, 80, 80);
    scale(2 / 5);
    translate(50 * -2.3, 50 * -0.03);
    fill("purple");
    textSize(75);
    noStroke();
    text("(✿ᴗ✿)", 0, 0);
    pop();
  }
}
