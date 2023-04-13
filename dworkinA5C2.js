//Liam Dworkin
//NMD 105
//April 10th, 2023

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

  /*added for random direction and speed of some extent it still doesn't work as I want it to with the boundary boxes. I'm working on that. It also doesn't center as much as I'd like. I think all the random variables are causing some issue that or I can't seem to get it to function properly.*/

  speedX = 3;
  directionX = random(3);
  //x1 = width/2;
  x1 = random(width);

  speedY = 3;
  directionY = random(3);
  //y1 = height/2;
  y1 = random(height);

  bubbles = [];

  //loop for the bubbles using the array

  for (let bubblesDrawn = 0; bubblesDrawn < 50; bubblesDrawn++) {
    bubbles[bubblesDrawn] = new bubble(random(x1), random(y1), random(10, 20));
  }

  /*old code from part 1
//  bubble1 = new bubble(random(x1), random(y1), 20);
//  bubble2 = new bubble(random(x1), random(y1), 24);
//  bubble3 = new bubble(random(x1), random(y1), 21);
//  bubble4 = new bubble(random(x1), random(y1), 12);
//  bubble5 = new bubble(random(x1), random(y1), 15); */
}

function draw() {
  x1 += speedX * directionX;
  y1 += speedX * directionY;

  if (x1 + 25 >= width || x1 < 25) {
    // check if hits the right edge
    directionX *= -1;
  }

  //conditional - the same as width boundary but for height

  if (y1 + 25 >= height || y1 < 25) {
    // check if hits the right edge
    directionY *= -1;
  }

  background("navy");

  //loop for the bubbles instead of how I had it, calling each one back

  for (let bubblesShown = 0; bubblesShown < 50; bubblesShown++) {
    bubbles[bubblesShown].update();
    bubbles[bubblesShown].show();

    //bubbles[bubblesShown].move(); (part of experiment)
  }

  /*old code from part 1
 // calling back each lil bubble
  translate (150, 150);
  bubble1.update();
  bubble1.show();
  bubble2.update();
  bubble2.show();
  bubble3.update();
  bubble3.show();
  bubble4.update();
  bubble4.show();
  bubble5.update();
  bubble5.show(); */
}

//code from class assignment for the bubble creation

class bubble {
  constructor(x, y, r) {
    this.x = x;
    this.y = y;
    this.r = r;
    this.rand = random(-3, 3);
  }
  //random variables in x and y (not the best movement yet)
  update() {
    this.x = this.x + this.rand;
    this.y = this.y + this.rand;
  }

  /* an experiment
    move() {
    x1 += speedX * directionX;
    y1 += speedX * directionY;
  } */

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
