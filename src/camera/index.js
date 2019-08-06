const GameElement = require('@core/game-element');
const Coords = require('@core/coords');

class Camera extends GameElement {
    constructor(settings) {
        super(settings);
        
        this.radius = settings.radius || 10;
        // this.data.position = settings.coords || Coords._2D.getOne();
    }

    // setCoords(coords) {
    //     this.data.coords.set(coords);
    // }

    // getCoords() {
    //     return this.data.coords;
    // }

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
        console.log('position')
        console.table(position)
        const pos_x = position.x;
        const pos_y = position.y;

        const r = this.radius;
        console.table(
            pos_x - this.radius,
            pos_y - this.radius,
            0,
            pos_x + this.radius,
            pos_y + this.radius,
            10,
            this.radius
        )


        const nbRows = this.data.scene.getNbRows();
        const nbColumns = this.data.scene.getNbColumns();

        
        const renderingData = this.data.scene.getRenderingData(
            Math.trunc(pos_x * (nbColumns )) - this.radius,
            Math.trunc(pos_y * (nbRows )) - this.radius,
            0,
            Math.trunc(pos_x * (nbColumns )) + this.radius,
            Math.trunc(pos_y * (nbRows )) + this.radius,
            10
        );


    
        const delta = this.radius / nbColumns; 


        console.log('radius of', this.radius, 'means ', delta , 'offset in map coords');
        console.log('radius:', this.radius, 'nbColumns: ', nbColumns);

        
        const x0 = pos_x - delta;
        const y0 = pos_y - delta;

        const xn = pos_x + delta; 
        const yn = pos_y + delta


        console.table({x0, y0, xn, yn});
        console.log("elt found :", renderingData.length);
        // data.x is a normalized position into map
        // we want to transform theses coordinates in 0..1 coordinates in camera grid
        renderingData.forEach((data, index) => {
            const x = Math.round(((data.x - x0) / (xn - x0)) * rx);
            const y = Math.round(((data.y - y0) / (yn - y0)) * rx);
            const w = Math.round(((data.width) / (delta * 2)) * rx);
            const h = Math.round(((data.height) / (delta * 2)) * rx);

            if (index <  5 ) {
                console.table({
                    texture: data.texture,
                    px: data.x, py: data.y, pw: data.width, ph: data.height,
                    x, y, w, h
                });
            }
            data.gameElement.render(
                context, 
                x, y, w, h
                // (pos_x  data.x) * (rx / d), 
                // (pos_y - data.y + 0.5) * (ry / d), 
                // data.width * (rx / d), 
                // data.height * (ry / d), 
                // (data.y * (this.radius / ry)) * vh,
                // data.width *(this.radius / rx) * vw,
                // data.height *(this.radius / ry) * vh,
            )
        });
    }

    destroy() {
        // this.data.coords.recycle();
    }
}

module.exports = Camera;