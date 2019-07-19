module.exports = (app) => {
    app.AssetManager = require('@core/assets');
    app.Map = require('../map');
    app.ViewPort = require('@core/viewport');
    app.GameElement = require('@core/game-element');
};
