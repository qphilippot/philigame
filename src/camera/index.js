const GameElement = require('@core/game-element');
const Coords = require('@core/coords');

class Camera extends GameElement {
    constructor(settings) {
        super(settings);
        
        this.radius = settings.radius || 10;
        // this.data.position = settings.coords || Coords._2D.getOne();
    }

    setScene(scene) {
        this.data.scene = scene;
    }

    getScene() {
        return this.data.scene;
    }

    /**
     * Search all visibles game-element through environment according this own position and radius
     * @param {*} environment 
     */
    snapshot(environment) {
        const position = this.getPosition();
        const pos_x = position.x;
        const pos_y = position.y;
        const nbRows = environment.getNbRows();
        const nbColumns = environment.getNbColumns();
        
        const renderingData = environment.getRenderingData(
            Math.round(pos_x * (nbColumns )) - this.radius,
            Math.round(pos_y * (nbRows )) - this.radius,
            0,
            Math.round(pos_x * (nbColumns )) + this.radius,
            Math.round(pos_y * (nbRows )) + this.radius,
            10
        );

        const delta = this.radius / nbColumns;      
        const x0 = Math.round((pos_x - delta) * nbColumns) / nbColumns;
        const y0 = Math.round((pos_y - delta) * nbRows) / nbRows;

        renderingData.forEach(data => {
            data.x = (data.x - x0) / (2 * delta);
            data.y = (data.y - y0) / (2 * delta);
            data.width = data.width / (delta * 2);
            data.height = data.height / (delta * 2);
        });
        
        return renderingData;
    }

    destroy() {
        // this.data.coords.recycle();
    }
}

module.exports = Camera;