'use strict';

class Orks {
    constructor(name) {
        this.name = name;
        this.damage = this.getDamage();
    }
    getDamage() {
        if (this instanceof Sperers) {
            return 30;
        }
    }
}
class Sperers extends Orks {
    constructor(name) {
        super(name);

    }
}