class Rat {
	name;
	weight;
	speed;
	status;
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
	}
}
