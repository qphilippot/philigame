const Coords = require('./coords.model');

class Coords2D extends Coords {
    constructor(x = 0, y = 0, pool = null) {
        super(pool);
        this.data = [x, y];
    }

    getX() {
        return this.data[0];
    }

    getY() {
        return this.data[1];
    }

    setX(x) {
        this.data[0] = x;
    }

    setY(y) {
        this.data[1] = y;
    }

}

module.exports = Coords2D;