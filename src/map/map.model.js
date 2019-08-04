const Entity = require('../core/entity/entity.model');
class Map extends Entity {
    constructor(settings = {}) {
        super(settings);

        this.layers = {};


        this.context = {
            topLeftPixelCoords: {
                x: 0,
                y:0
            },

            topRightPixelCoords: {
                x: 0,
                y:0
            },

            bottomLeftPixelCoords: {
                x: 0,
                y:0
            },


        }

        this.data.nbRows           = settings.nbRows || 10;
        this.data.nbColumns        = settings.nbColumns || 10;
        this.data.nbLayers         = 0;
        this.data.layersAvailabes  = [];
    }

    getLayer(z) {
        return this.layers[z] || null;
    }

    setLayer(layers = {}, index) {
        console.log('set new layer', layers, index);
        this.layers[index] = layers;
        this.data.nbLayers = Object.keys(this.layers).length;
        this.data.layersAvailabes = Object.values(this.layers).sort();
    }

    add(gameElement, x = 0, y = 0, z = 0) {
        console.table(arguments);

        if (typeof this.layers[z] !== 'undefined') {
            if (typeof this.layers[z][x] !== 'undefined') {
                this.layers[z][x][y] = gameElement;
            }

            else {
                this.layers[z][x] = {};
                this.layers[z][x][y] = gameElement;
            }

            console.log('added tile to existing layer', this.layers[z][x][y], gameElement);
        }

        else {
            const layer = {};
            layer[x] = {};
            layer[x][y] = gameElement;
            this.setLayer(layer, z);
        }
    }

    // render(x_min, y_min, z_min, x_max, y_max, z_max, context) {
    //     let layer, row = null;
    //     for(let z = z_min; z < z_max; ++z) {
    //         if (typeof this.layers[z] === 'undefined') {
    //             continue;
    //         }

    //         else {
    //             layer = this.layers[z];
    //         }

    //         for(let y = y_min; y < y_max; ++y) {
    //             if (typeof layers[y] === 'undefined') {
    //                 continue;
    //             }
    
    //             else {
    //                 row = layers[y];
    //             }

    //             for(let x = x_min; x < x_max; ++x) {
    //                 if (typeof row[x] === "undefined") {
    //                     continue
    //                 }

    //                 else {
    //                     row[x].render(context)
    //                 }
    //             }
    //         }
    //     }
    // }

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
    

    onNewNotification(notification) {
        const notificationName = notification.name;

        switch(notificationName) {
            case 'updateCoords':
                this.viewPortCellCoordsToMapCellCoords(notification.data);
                break;
            default:
                break;
        } 

        // override me !

        notification.recycle();
    }
}

module.exports = Map;