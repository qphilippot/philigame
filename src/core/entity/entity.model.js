const EventEmitter = require('events').EventEmitter;
const configuration = require('./entity.model.config');
const Notification = require('../notification');

let counter = 0;

class Entity {
    constructor(settings = {}) {
        // Must copy configuration file cause later a delete may remove services.skill
        settings = Object.assign(JSON.parse(JSON.stringify(configuration)), settings);
        
        this.name = settings.name;

        this.initialize_skills(settings);

        this.skills = {};
        this.data = {};
        this.ui = {};
        this.services = settings.services;
        this.strictMode = settings.strictMode;
        this.verboseMode = settings.verboseMode;

       
        
        if (settings.testMode === true) {
            this.enableTestMode();
        }

        else {
            this.store('services_to_enable', settings.services);
        }
    }

    setupListener(settings) {
        this.listeners = [];
    }

    

    sendNotification(name, data) {
        this.subscribers.forEach(subscriber => {
            const notification = Notification.getOne(name, data);
            subscriber.onNewNotification(notification)
        });
    }

    subscribe(observable) {
        observable.register(this);
        // record all subscribed ?
    }

    register(subscriber) {
        this.subscribers.add(subscriber);
    }

    onNewNotification(notification) {
        const notificationName = notification.name;

        // override me !

        notification.recycle();
    }

    notify() {

    }

    createCustomEvent(eventName, data) {
        if (typeof window.CustomEvent === "function") {
            return new CustomEvent(eventName, data);
        }
        // IE polyfill
        else {
            const params = data || { bubbles: false, cancelable: false, detail: undefined };
            const evt = document.createEvent( 'CustomEvent' );
            evt.initCustomEvent( eventName, params.bubbles, params.cancelable, params.detail );
            return evt;
        }
    }
    
    
    init_id(settings) {
        this.entity_id = `entity_${++counter}`;
        if (typeof settings._id === 'undefined') {
            this._id = settings._id;
        }

        else {
            this._id = this.entity_id;
        }
    }
    
    disable_skills(settings = {}) {
        if (typeof settings.services !== 'undefined') {
            delete settings.services.skill;
        }
    }

    initialize_skills(settings = {}) {
        this.skills = {};

        if (settings.disableSkills === true) {
            this.disable_skills(settings);
        }
    }

    setName(name) {
        this.name = name;
    }

    setId(id) {
        this._id = id;
    }

    setService(serviceName, serviceInstance) {
        this.services[serviceName] = serviceInstance;
    }
    
    enableStrictMode() {
        this.strictMode = true;
    }

    disableStrictMode() {
        this.strictMode = false;
    }

    disableVerboseMode() {
        this.verboseMode = false;
    }

    enableVerboseMode() {
        this.verboseMode = true;
    }

    enableTestMode() {
        this.enableStrictMode();
        this.enableVerboseMode();
    }

    disableTestMode() {
        this.disableStrictMode();
        this.disableVerboseMode();
    }

    emit(eventName, data) {
        const target = data.target || window;
        const envent = this.createCustomEvent(eventName, data);
        target.dispatchEvent(event);
        // this.event.emit(eventName, data);
    }

    listen(eventName, handler) {
        this.addEventListener(eventName, handler);

        this.listeners = [{
            eventName: eventName,
            handler: handler
        }];
    }

    store(attributeName, attributeValue) {
        this.data[attributeName] = attributeValue;
    }

    //https://stackoverflow.com/questions/494143/creating-a-new-dom-element-from-an-html-string-using-built-in-dom-methods-or-pro/35385518#35385518
    /**
    * @param {String} htmlString representing a single element
    * @return {Element}
    */
   generateDOM(htmlString = '') {
        const template = document.createElement('template');
        template.innerHTML = htmlString.trim();
        return template.content.firstChild;
    }

    get(attributeName) {
        return this.data[attributeName];
    }

    log() {
        console.log.call(null, this.name + ': ', ...arguments);       
    }

    debug() {
        if (this.verboseMode) {
            this.log('debug');
            this.log(...arguments);
        }
    }

    doAsync(task) {
        setTimeout(() => {
            task();
        }, 1);
    }

    // async waitingFor(promisesArray) {
    //     return await Promise.all(promisesArray);
    // }

    hasSkill(skillName) {
        return typeof this.skills[skillName] !== 'undefined';
    }

    notifyError(error, throwError = true) {
        console.error(`[${this.name}] ${error}`);
        
        if (throwError === true || this.strictMode === true) {
            if (error instanceof Error) {
                throw error;
            }
            
            else {
                throw new Error(error);
            }
        }
    }

    removeListener(listener) {
        this.removeEventListener(listener.eventName, listener.handler)
    }

    removeAllListeners() {
        this.listeners.forEach(
            listener => {
                this.removeListener(listener)
            }
        );
    }

    destroy() {
        this.removeAllListeners();
    }
}

module.exports = Entity;