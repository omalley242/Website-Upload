function setup() {
	createCanvas(windowWidth, windowHeight);
}

function draw() {
	if (keyCode === RIGHT_ARROW) {
		background(51);
	}
	else if (keyCode === LEFT_ARROW) {
		background(255);
	}
	else if (keyCode === SHIFT) {
		fill(51);
		rect(50,50,50,50);
	}

}
