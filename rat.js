class Rat {
	name;
	weight;
	speed;
	isAlive;
	constructor(name, weight, speed, isAlive) {
		this.name = name;
		this.weight = weight;
		this.speed = speed;
		this.isAlive = true;
	}
	squeak(message) {
		console.log(message);
	}
	isDead() {
		this.isAlive = false;
		this.weight = 0;
	}
}
