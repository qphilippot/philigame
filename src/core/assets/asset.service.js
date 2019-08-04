// const Asset = require('./asset.model')

class AssetManager {
    constructor() {
        this.ressources = {};
    }

    store(name, data) {
        console.log('store', name, data);
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

