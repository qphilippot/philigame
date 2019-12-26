const Entity = require('./entity');

class Scene extends Entity {
    constructor(settings = {}) {
        super(settings);

        if (settings.world) {
            this.setWorld(settings.world);
        }
    }

    bindTo(viewport) {
        this.register()
    }
}