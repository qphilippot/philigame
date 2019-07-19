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

