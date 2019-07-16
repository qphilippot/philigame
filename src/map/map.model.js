const Entity = require('../core/entity/entity.model');
class Map extends Entity {
    constructor(settings = {}) {
        super(settings);

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

        this.data.nbRows = settings.nbRows || 10;
        this.data.nbColumns = settings.nbColumns || 10;

        console.log('new map', settings);
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

if (typeof window !== 'undefined') {
    if (typeof window.Map === 'undefined') {
        window.Map = {};
    } 

    window.GameDong.Map = Map;
}

module.exports = Map;