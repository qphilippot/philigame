const Entity = require('../core/entity/entity.model');
class Map extends Entity {
    constructor(settings = {}) {
        super(settings);

        this.data.nbRows = settings.nbRows || 10;
        this.data.nbColumns = settings.nbColumns || 10;

        console.log('new map', settings);
    }
}

if (typeof window !== 'undefined') {
    if (typeof window.Map === 'undefined') {
        window.Map = {};
    } 

    window.GameDong.Map = Map;
}

module.exports = Map;