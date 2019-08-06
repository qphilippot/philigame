const Notification = require('./notification.model');
const POOL = require('./notification.POOL');

if (Notification.POOL === null) {
    Notification.POOL = new POOL();
}

module.exports = Notification;