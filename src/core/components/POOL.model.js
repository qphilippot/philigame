class POOL {
    constructor(settings) {
        this.type = settings.type;
        this.isInitialized = false;

        const capacity = settings.capacity || 10;
        this.data = new Array(capacity);
        this.index = capacity -1;
        

        this.initPool();
    }

    getCapacity() {
        return this.data.length;
    }

    initPool() {
        const capacity = this.getCapacity();
        for(let i = 0; i < capacity; ++i) {
            this.data[i] = new (this.type)();
        }
    }

    setCapacity(capacity) {
        this.data.length = capacity;
    }

    beSureThatCapacityIsOkay() {
        const capacity = this.getCapacity();
        if ((1 + this.index) === capacity) {
            this.setCapacity(capacity + 10);
        }
    }

    recycle(instance) {
        this.beSureThatCapacityIsOkay();

        this.data[this.index] = instance;
        this.index++;
    }

    getOne() {
        let instance  = null;

        if (this.index > 0) {
            instance = this.data[this.index];
            this.index--;
        }

        else {
            instance = new (this.type)();
        }

        instance.core.pool = this;
        return instance;
    }
}

module.exports = POOL;