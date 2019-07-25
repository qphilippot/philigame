class Coords {
    constructor(pool) {
        this.core = {
            pool: pool || null
        }
    }

    set(coords) {
        const max = Math.min(this.data.length, coords.data.length);

        for(let i = 0; i < max; ++i) {
            this.data[i] = coords.data[0];
        }
    }

    get() {
        return this.data;
    }

    recycle() {
        if (this.core.pool !== null) {
            this.core.pool.recycle(this);
        }
    }
}

module.exports = Coords;