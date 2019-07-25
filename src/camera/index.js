const Entity = require('@core/entity');
const Coords = require('@core/coords');

class Camera extends Entity {
    constructor(settings) {
        super(settings);
        this.data.coords = settings.coords || Coords._2D.getOne();
    }

    setCoords(coords) {
        this.data.coords.set(coords);
    }

    getCoords() {
        return this.data.coords;
    }

    setScene(scene) {
        this.data.scene = scene;
    }

    getScene() {
        return this.data.scene;
    }

    snapshot() {
        // means render
        //this.data.scene
    }

    destroy() {
        this.data.coords.recycle();
    }
}