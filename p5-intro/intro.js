// this preloads assets like images
let player;
let playerX = 100;
function preload() {
	// console.log('this is preload');
	player = loadImage('gustavo.png');
}
function setup() {
	console.log('this is setup');
	// this creates the canvas
	createCanvas(1000, 600);
}
let x = 0;
let speed = 2;

function draw() {
	// console.log(mouseX, mouseY);
	clear();
	// console.log('i am drawing');

	let rectColor = color(0, 256, 0);
	// rect(xCoordinate, yCoordinate, width, height)
	stroke(rectColor);
	fill(rectColor);
	// this moves the rect
	x += speed;
	if ((x) > 1000) {
		// change direction
		speed = - 2;
	}
	rect(x, 100, 50, 50);
	// stroke('red');
	// fill('red');
	// circle(x, y, radius)
	// circle(mouseX, mouseY, 100);

	// line - line(startX, startY, endX, endY)
	// strokeWeight(5);
	// stroke('green');
	// line(0, 100, 1000, 100);
	// line(0, 150, 1000, 200);
	// line(0, 200, 1000, 200);
	noStroke();

	// renders the player - image(image, x, y, width, height)
	image(player, playerX, 200, 100, 100);
}

function keyPressed() {
	console.log(keyCode);
	if (keyCode === 39) {
		// move the player to the right
		playerX += 20;
	}
	// if 
}