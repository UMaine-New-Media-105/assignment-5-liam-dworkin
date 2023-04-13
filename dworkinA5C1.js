//Liam Dworkin
//NMD 105
//April 2023


let speedX;
let x1;
let directionX;

let speedY;
let y1;
let directionY;

function setup() {
  push();
  frameRate(30);
  pop();
  
  createCanvas(700, 500);
  
  speedX = 3;
  directionX = random(1,5);
  //x1 = width/2;
  x1 = random(width);

  speedY = 3;
  directionY = random(1,5);
  //y1 = height/2;
  y1 = random(height);
  
  
  bubble1 = new bubble(random(x1), random(y1), 20);
  bubble2 = new bubble(random(x1), random(y1), 24);
  bubble3 = new bubble(random(x1), random(y1), 21);
  bubble4 = new bubble(random(x1), random(y1), 12);
  bubble5 = new bubble(random(x1), random(y1), 15);
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
  //defining the bubble's variables

  //calling back each lil bubble
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
  bubble5.show();
}

//code from class assignment for the bubble creation

class bubble {
  constructor(x, y, r) {
    this.x = x;
    this.y = y;
    this.r = r;
    this.rand = random();
  }
  //random variables in x and y (not the best movement yet)
  update() {
    this.x = this.x + this.rand;
    this.y = this.y + this.rand;
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
