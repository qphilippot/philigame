const Map = require('./map.model');
class TileMap extends Map {
    constructor(settings = {}) {
        settings.name = settings.name || 'tile-map';
        super(settings);
    }

    add(tile, x = 0, y = 0, z = 0, width = 1, height = 1) {
        tile.setPosition({x, y});
        tile.setSize({width, height});

        console.log('add tile', tile, x, y)
        super.add(tile, x, y, z);
    }

    // map date is an object like
    // { layer: { x : { y : gameElement }}}
    fill(mapData) {

    }


    getRenderingData(x_min = 0, y_min = 0, z_min = 0, x_max = this.getNbColumns(), y_max = this.getNbRows(), z_max = 10) {
        let layer, row = null;
        let renderingData = [];
        let x, y, z;


       
        for(z = z_min; z < z_max; z++) {
            layer = this.getLayer(z);
            if (layer !== null) {
                for(y = y_min; y < y_max; y++) {
                    if (typeof layer[y] !== 'undefined') {
                        row = layer[y];
                        for(x = x_min; x < x_max; x++) {
                            if (typeof row[x] !== "undefined") {
                                const elt = row[x];
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

        console.log('found for rendering theses data', renderingData);
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

        console.log(x, y, viewportCellCoords,  this.getNbRows(),  this.getNbColumns());
    }
    

    onNewNotification(notification) {
        const notificationName = notification.name;

        switch(notificationName) {
            case 'updateCoords':
                console.log('updateCoords', notification.data);
                this.viewPortCellCoordsToMapCellCoords(notification.data);
                break;
            default:
                console.log(notification);
                break;
        } 

        // override me !

        notification.recycle();
    }
}

module.exports = TileMap;