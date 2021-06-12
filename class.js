'use strict'

var allTanks = [];
class HumanArmy {
    constructor(name) {
        this.name = name;
    }
}
class Tanks extends HumanArmy {
    constructor(name) {
        super(name);
        this.damage = Math.floor(Math.random() * (100 - 80) + 80);
    }
}
class Soldiers extends Tanks {
    constructor(name) {
        super(name);
        this.damage = Math.floor(Math.random() * (20 - 10) + 10);
    }
}
//function createTanks()
(function() {
    for (let i = 1; i < 10; i++) {
        let tenkisti = new Tanks(`Tank_${i}`);
        allTanks.push(tenkisti);
    }
})();

console.log(allTanks);

//let tank1 = new Tanks('Danilo');
//let soldier1 = new Soldiers('Ivan');
//console.log(tank1.name);
//console.log(soldier1.damage);
//createTanks();