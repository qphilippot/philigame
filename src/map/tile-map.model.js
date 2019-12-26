const Map = require('./map.model');
class TileMap extends Map {
    constructor(settings = {}) {
        settings.name = settings.name || 'tile-map';
        super(settings);
    }

    add(tile, x = 0, y = 0, z = 0, width = 1, height = 1) {
        tile.setPosition({x, y});
        tile.setSize({width, height});
        super.add(tile, x, y, z);
    }

    // map date is an object like
    // { layer: { x : { y : gameElement }}}
    fill(mapData) {

    }

    getRenderingDataFromNormalizedCoords(x_min = 0, y_min = 0, z_min = 0, x_max = 0, y_max = 1, z_max = 1) {
        const nbColumns = this.getNbColumns();
        const nbRows = this.getNbRows();
        return this.getRenderingData(
            Math.round(x_min *  nbColumns),
            Math.round(y_min *  nbRows),
            z_min,
            Math.round(x_max *  nbColumns),
            Math.round(y_min *  nbRows),
            z_max,
        );
    }

    getTile(x, y, z = 0) {
        const layer = this.layers;
        if (
            typeof layer[z] !== 'undefined' &&
            typeof layer[z][x] !== 'undefined'
        ) {
            return this.layers[z][x][y];
        }

        else {
            return undefined;
        }
    }

    
    getRenderingData(x_min = 0, y_min = 0, z_min = 0, x_max = this.getNbColumns(), y_max = this.getNbRows(), z_max = 10) {
        let layer, column = null;
        let renderingData = [];
        let x, y, z;


       
        for(z = z_min; z < z_max; z++) {
            layer = this.getLayer(z);
            if (layer !== null) {
                for(x = x_min; x < x_max; x++) {
                    if (typeof layer[x] !== 'undefined') {
                        column = layer[x];
                        for(y = y_min; y < y_max; y++) {
                            if (typeof column[y] !== "undefined") {
                                const elt = column[y];
                                renderingData.push({
                                    gameElement: elt,
                                    x: elt.getX() / this.getNbColumns(),
                                    y: elt.getY() / this.getNbRows(),
                                    width: elt.getWidth() / this.getNbColumns(),
                                    height: elt.getHeight() / this.getNbRows()
                                });
                            }
                        }
                    }
                }
            }
        }

        return renderingData;
    }

    
    getNbRows() {
        return this.data.nbRows;
    }

    getNbColumns() {
        return this.data.nbColumns;
    }

    viewPortCellCoordsToMapCellCoords(viewportCellCoords) {
        const x = Math.floor(viewportCellCoords.x * this.getNbRows());
        const y = Math.floor(viewportCellCoords.y * this.getNbColumns());
        return {x, y};
    }
}

module.exports = TileMap;