class Notification {
    constructor(name, data = null, emitter = null) {
        this.name = name || '';
        this.data = data;
        this.emitter = emitter;

        this.core  = {};
    }

    getName() {
        return this.name;
    }

    getData() {
        return this.data;
    }

    setData(data) {
        this.data = data;
    }

    setName(name) {
        this.name = name;
    }

    setEmitter(emitter) {
        this.emitter = emitter;
    }

    clear() {
        this.name = null;
        this.data = null;
        this.emitter = null;
    }

    recycle() {
        this.clear();
        Notification.POOL.recycle(this);
    }
}

if (typeof Notification.POOL === 'undefined') {
    Notification.POOL = null;
}

module.exports = Notification;