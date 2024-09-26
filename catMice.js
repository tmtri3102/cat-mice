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
let tom = new Cat("Tom", 30, 50);
let jerry = new Rat("Jerry", 40, 20);
tom.squeak("chit chit");
jerry.squeak("meow");
tom.catchRat(jerry);
