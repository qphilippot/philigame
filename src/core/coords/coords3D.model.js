const Coords2D = require('./coords2D.model');

class Coords3D extends Coords2D {
    constructor(x = 0, y = 0, z = 0, pool = null) {
        super(x, y, pool)
        this.data.length = 3;
        this.data[2] = z;
    }

    getZ() {
        return this.data[2];
    }

    setZ(z) {
        this.data[2] = z;
    }
}


module.exports = Coords3D;