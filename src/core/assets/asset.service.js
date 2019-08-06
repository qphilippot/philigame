// const Asset = require('./asset.model')
const GameElement = require('@core/game-element');

class AssetManager {
    constructor() {
        this.ressources = {};
    }

    store(name, data) {
        this.ressources[name] = data;
    }

    get(name) {
        return this.ressources[name];
    }

    getImage(imageName) {
        return new Promise(resolve => {
            const img = new Image();
            img.onload = () => resolve(img);
            img.src = this.get(imageName);
            img.name = imageName;
        });
    }

    getImageAsGameElement(imageName) {
        return new Promise(resolve => {
            this.getImage(imageName).then(image => {
                const elt = new GameElement();
                elt.name = image.name;
                elt.setTexture(image);

                resolve(elt);
            });
        });
    }
    delete(name) {
        delete this.ressources[name];
    }
}

AssetManager.singleton = null;
AssetManager.getInstance = function() {
    if (AssetManager.singleton === null) {
        AssetManager.singleton = new AssetManager();
    }

    return AssetManager.singleton;
}

module.exports = AssetManager;

