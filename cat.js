class Cat {
	name;
	weight;
	speed;
	constructor(name, weight, speed) {
		this.name = name;
		this.weight = weight;
		this.speed = speed;
	}
	squeak(message) {
		console.log(message);
	}
	catchRat(rat) {
		console.log(`${this.name} the cat is catching ${rat.name} the rat!`);
		this.eatRat(rat);
	}
	eatRat(rat) {
		if (this.rat) {
			this.rat.isAlive();
		} else {
			console.log(`${this.name} the cat is eating ${rat.name} the rat!`);
		}
	}
}
