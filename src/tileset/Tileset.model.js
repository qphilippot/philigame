const defaults = require('./Tileset.config');
const Entity = require('@core/entity');
const Tile = require('./Tile.model');

class Tileset extends Entity {
    constructor(settings = {}) {
        super(settings);

        this.setName(settings.name);
        this.tiles = null; 
        this.assetManager = settings.assetManager;

        this.index = settings.index || null;
        this.retrieveTiles();
    }

    retrieveTiles() {
        let ressources;

        if (this.index === null) {
            ressources = this.assetManager.find({
                tileset: this.name
            });
        }

        else {
            ressources = this.assetManager.index[this.index];
        }
       
        this.tiles = ressources.map(ressource => {
            return new Tile(ressource);
        });
    }

    loadTiles() {
        return this.tiles.filter(tile => {
            return tile.isLoaded() === false;
        }).map(tile => {
            tile.load();
        });
    }

    getTile(name) {
        return this.tiles[name];
    }

    setName(name) {
        this.name = name || defaults.name;
    }

    exports() {
        // todo
    }

    import() {
        // todo
    }

    getTiles() {
        return Object.values(this.tiles);
    }
}

module.exports = Tileset;