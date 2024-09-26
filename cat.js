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
		if (this.speed > rat.speed) {
			this.eatRat(rat);
			return true;
		}
	}
	eatRat(rat) {
		if (rat.isAlive) {
			this.weight += rat.weight;
			rat.isDead();
			console.log(`${rat.name} the rat is dead!`);
		}
	}
}
