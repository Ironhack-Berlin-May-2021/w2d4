// this also renders the player and moves it but with an object oriented (better) structure

class Game {
	constructor() {
		// the player is part of the game
		this.player = new Player();
	}

	preload() {
		// we preload the image - this is called in the main preload function
		this.player.image = loadImage('gustavo.png');
	}
	drawGame() {
		clear();
		// the player is able to draw itself
		this.player.draw();
	}
}

class Player {
	constructor() {
		this.x = 500;
		this.y = 500;
		this.width = 100;
		this.height = 100;
		this.image;
	}
	draw() {
		// as before we need to use this function to draw an image
		image(this.image, this.x, this.y, this.width, this.height);
		// if key is held down player should keep moving
		if (keyIsDown(68)) {
			this.moveRight();
		}
	}
	moveRight() {
		this.x += 10;
	}
	moveLeft() {
		this.x -= 10;
	}
	moveUp() {
		this.y -= 10;
	}
	moveDown() {
		this.y += 10;
	}
}

// we create a new game object from the class
const game = new Game();

// these are the p5 functions again
function preload() {
	game.preload();
}
function setup() {
	createCanvas(1000, 600);
}
function draw() {
	game.drawGame();
}
function keyPressed() {
	if (keyCode === 39) {
		// move the player to the right
		game.player.moveRight();
	}
	if (keyCode === 37) {
		// move the player to the right
		game.player.moveLeft();
	}
	if (keyCode === 40) {
		// move the player to the right
		game.player.moveDown();
	}
	if (keyCode === 38) {
		// move the player to the right
		game.player.moveUp();
	}
}