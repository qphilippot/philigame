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

    snapshot(viewport) {
        // means render

        const resolution = viewport.getResolution();
        const size = viewport.getSize();
        const context = viewport.getContext();
        const rx = resolution.width;
        const ry = resolution.height;
        // const vw = size.width;
        // const vh = size.height;

        const position = this.getPosition();
        console.log('position de la caméra')
        console.table(position)
        const pos_x = position.x;
        const pos_y = position.y;
        const nbRows = this.data.scene.getNbRows();
        const nbColumns = this.data.scene.getNbColumns();
        
        const renderingData = this.data.scene.getRenderingData(
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

        const xn = Math.round((pos_x + delta) * nbColumns) / nbColumns; 
        const yn = Math.round((pos_y + delta) * nbRows) / nbRows

        context.font = '20px';
            
        // data.x is a normalized position into map
        // we want to transform theses coordinates in 0..1 coordinates in camera grid
        renderingData.forEach((data, index) => {
            // const x = Math.round(((data.x - x0) / (xn - x0)) * rx);
            // const y = Math.round(((data.y - y0) / (yn - y0)) * rx);
            const x = Math.round((((data.x - x0) * 100) / (2 * delta)) * rx) / 100;
            const y = Math.round((((data.y - y0) * 100) / (2 * delta)) * rx) / 100;
            const w = Math.round((((data.width)  * 100) / (delta * 2)) * rx) / 100;
            const h = Math.round((((data.height) * 100) / (delta * 2)) * rx) / 100;

            // for (let i = 0; i < width; i++) {
            //     for (let j = 0; j < height; j++) {
            //         context.fillText(`(${i}, ${j})`, i, j);
            //     }    
            // }

            // context.fillText(`(${x}, ${y})`, x + w, y + h);
           
            data.gameElement.render(
                context, 
                x, y, w, h
            )

            // context.fillText(`(${x}, ${y})`, x, y + 10);
            // context.fillText(`(${data.x}, ${data.y})`, x, y + 20);
        });
    }

    destroy() {
        // this.data.coords.recycle();
    }
}

module.exports = Camera;