function setup() {
    createCanvas(400, 400);
}

function draw() {
    background(255);
    for (let x = 0; x <= 350; x+=50) {
        rect(x, 0, 400);
    }
}

function mousePressed() {
    fill(0, 0, 255);
    rect(mouseX, 0, 400);
}
