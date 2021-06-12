'use strict';

let allHumans = [];

class Humans {
    constructor(name) {
            this.name = name;
            this.damage = this.getDamage();
        }
        // instanceof - ako je getDamage "član klase" Snipers onda return ...
    getDamage() {
        if (this instanceof Snipers) {
            return Math.floor(Math.random() * (40 - 20) + 20);
        } else if (this instanceof Tanks) {
            return Math.floor(Math.random() * (100 - 60) + 60);;
        }
    }
} //end of main class
class Snipers extends Humans {
    constructor(name) {
        super(name);
    }
}
class Tanks extends Humans {
    constructor(name) {
        super(name);
    }
}

let tank1 = new Tanks('Tank1');
allHumans.push(tank1);