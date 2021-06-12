'use strict'

class HumanARMY {
    constructor(name) {
        this.name = name;
    }
}
class Tanks extends HumanArmy {
    constructor(name) {
        super(name);
        this.damage = Math.floor(Math.random() * 10 + 1);
    }
}
let tank1 = new Tanks('Danilo');
console.log(tank1.name);
console.log(tank1.damage);