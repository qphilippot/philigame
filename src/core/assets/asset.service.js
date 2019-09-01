// const Asset = require('./asset.model')
const GameElement = require('@core/game-element');

class AssetManager {
    constructor() {
        this.ressources = {};
        this.ressourcesDetails = {};
        this.index = {};
    }

    store(name, data, details = null) {
        this.ressources[name] = data;
        
        if (details === null) {
            this.ressourcesDetails[name] = { name : name };
        }

        else {
            details.name = name;
            this.ressourcesDetails[name] = details;
        }
        
    }

    setDetails(ressourceName, details) {
        this.ressourcesDetails[ressourceName] = details;
    }

    get(name) {
        return this.ressources[name];
    }

    find(selectors) {
        const ressourcesName = Object.keys(this.ressources);

        const filteredRessources = ressourcesName.filter(name => {
            const details = this.ressourcesDetails[name];
            Object.keys(selectors).forEach(attributeName => {
                const attributeValue = selectors[attributeName];
                if (details[attributeName] !== attributeValue) {
                    return false;
                }
            });

            return true;
        });
    
        return filteredRessources.map(name => {
            return {
                name: name,
                value: this.ressources[name],
                details: this.ressourcesDetails[name]
            };
        })
    }

    createIndex(name, content = {}) {
        if (typeof this.index[name] !== 'undefined') {
            throw new Error(`Cannot create an index twice (${name})`);
        }

        else {
            this.index[name] = content;
        }
    }

    addToIndex(name, key, value) {
        if (typeof this.index[name] === 'undefined') {
            throw new Error(`Index not found (${name})`);
        }

        else {
            this.index[name][key] = value;
        }
    }

    toImage(ressource) {
        return this.getImage(ressource.name);
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

