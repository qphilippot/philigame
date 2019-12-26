module.exports = (app) => {
    app.AssetManager = require('@core/assets');
    app.Map = require('../map');
    app.TileMap = require('../map/tile-map.model');
    app.TileSet = require('../tileset');
    app.Camera = require('../camera');
    app.Coords = require('@core/coords');
    app.ViewPort = require('@core/viewport');
    app.GameElement = require('@core/game-element');
    app.MouseController = require('@core/controllers/mouse.controller');
    app.Canvas = require('@core/canvas');
    app.Scene = require('@core/scene');
};
