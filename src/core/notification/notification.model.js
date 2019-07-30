class Notification {
    constructor(name, data) {
        this.name = name || '';
        this.data = data || {};
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

    recycle() {
        Notification.POOL.recycle(this);
    }
}

if (typeof Notification.POOL === 'undefined') {
    console.log('POOL is undefined');
    Notification.POOL = null;
}

module.exports = Notification;