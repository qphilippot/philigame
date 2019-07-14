const POOL = require('./notification.POOL');

class Notification {
    constructor(name, data) {
        this.name = name || '';
        this.data = data || {};
    }

    getName() {
        return this.name;
    }

    getData() {
        return this.getData;
    }

    setData(data) {
        this.data = data;
    }

    setName(name) {
        this.name = name;
    }

    recycle() {
        Notification.POOL.recycle(this);
    }
}

Notification.POOL = new POOL();

module.exports = Notification;