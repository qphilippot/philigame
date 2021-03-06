const Notification = require('./notification.model');
const POOL = require('../components/POOL.model');

class NotificationPOOL extends POOL {
    constructor(settings) {
        super({
            type: Notification,
            capacity: 10
        });
    }

    getOne(name, data, emitter) {
        const notification = super.getOne();
        notification.setName(name);
        notification.setEmitter(emitter);
        notification.setData(data);


        return notification;
    }
   
}



module.exports = NotificationPOOL;