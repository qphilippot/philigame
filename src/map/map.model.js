const Entity = require('../core/entity.model');
class Map extends Entity {
    constructor(settings = {}) {
        super(settings);

        console.log('new map');
    }
}

module.exports = Map;