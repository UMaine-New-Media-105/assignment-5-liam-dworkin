function setup() {
  createCanvas(500, 400);
}

function draw() {
  background("navy");
  //defining the bubble's variables
  let bubble1 = new bubble(200, 200, 20);
  let bubble2 = new bubble(120, 300, 24);
  let bubble3 = new bubble(400, 100, 30);
  let bubble4 = new bubble(50, 100, 12);
  let bubble5 = new bubble(250, 300, 15);

  //calling back each lil bubble
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
  }
  //random variables in x and y (not the best movement yet)
  update() {
    this.x = this.x + random(10, 20);
    this.y = this.y + random(0, 10);
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
