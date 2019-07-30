const Map = require('./map.model');
class TileMap extends Map {
    constructor(settings = {}) {
        settings.name = settings.name || 'tile-map';
        super(settings);
    }

    add(tile, x = 0, y = 0, z = 0, width = 1, height = 1) {
        console.log('tile add');
        tile.setPosition({x, y});
        tile.setSize({width, height});

        console.log('tile', tile)
        super.add(tile, x, y, z);
    }

    getRenderingData(x_min = 0, y_min = 0, z_min = 0, x_max = this.getNbColumns(), y_max = this.getNbRows(), z_max = 10) {
        let layer, row = null;

        console.table({z_min, z_max, y_min, y_max});
        let renderingData = [];
        let x, y, z;


       
        for(z = z_min; z < z_max; z++) {
            console.log('i try z=', z)
            layer = this.getLayer(z);
            if (layer !== null) {
                for(y = y_min; y < y_max; y++) {
                    if (typeof layer[y] !== 'undefined') {
                        row = layer[y];
                        for(x = x_min; x < x_max; x++) {
                            if (typeof row[x] !== "undefined") {
                                const elt = row[x];
                                console.log('elt');
                                console.table(elt.data);
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