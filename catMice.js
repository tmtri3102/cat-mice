/*
Animal 
===========
- name: string
- weight: number
- speed: number
- status: boolean
===========
+ squeak(string): void

Rat 
===========
- name: string
- weight: number
- speed: number
- isAlive: boolean
===========
+ squeak(string): void

Cat
===========
- name: string
- weight: number
- speed: number
===========
+ squeak(string): void
+ catchRat(rat): void
+ eatRat(rat): void

*/
class Rat {
	name;
	weight;
	speed;
	status;
	constructor(name, weight, speed, isAlive) {
		this.name = name;
		this.weight = weight;
		this.speed = speed;
		this.isAlive = null;
	}
	squeak(message) {
		console.log(message);
	}
}
