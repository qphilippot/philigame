const Notification = require('./notification.model');
const POOL = require('./notification.POOL');

console.log('Notification.POOL', Notification.POOL)
if (Notification.POOL === null) {
    Notification.POOL = new POOL();
    console.log('Notification.POOL', Notification.POOL)
}

module.exports = Notification;