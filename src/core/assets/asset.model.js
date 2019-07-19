const Entity = require('@core/entity');

class Asset extends Entity {
    constructor(settings = {}) {
        super(settings);

        this.section = settings.section;
    }
}

module.exports = Asset;

