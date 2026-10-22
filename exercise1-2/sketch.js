function setup() {
    createCanvas(400, 400);
}

function draw() {
    background(255);
    fill(255)
    let z = 10;
    while(z < 400) {
        circle(z, height / 2, 20);
        z += 20
    }

    fill(0, 0, 255);
    let x = 10;
    while(x < mouseX) {
        circle(x, height / 2, 20);
        x += 20
    }

}