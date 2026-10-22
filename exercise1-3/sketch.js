function setup() {
    createCanvas(600, 600);
}

function draw() {
    background(255);
    strokeWeight(3);
    let x2 = 0
    let x4 = 0
    let x6 = 0
    while(x2 <= 600 && x4 <= 600 && x6 <= 600) {
        stroke('blue');
        line(300, 300, 600, x2)
        x2 += 10
        
        stroke('green')
        line(600, 0, 0, x4);
        x4 += 10

        stroke('pink')
        line(600, 600, 0, x6)
        x6 += 10
    }
}