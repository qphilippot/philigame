const EventEmitter = require('events').EventEmitter;
const configuration = require('./entity.model.config');

let counter = 0;

class Entity {
    constructor(settings = {}) {
        // Must copy configuration file cause later a delete may remove services.skill
        settings = Object.assign(JSON.parse(JSON.stringify(configuration)), settings);
        
        this.name = settings.name;
        this.event = new EventEmitter();

        this.initialize_skills(settings);

        this.skills = {};
        this.data = {};
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
        this.event.emit(eventName, data);
    }

    on(eventName, handler) {
        this.event.on(eventName, handler);
    }

    store(attributeName, attributeValue) {
        this.data[attributeName] = attributeValue;
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

    die() {
        
    }
}

module.exports = Entity;