const MouseController = require('../controllers/mouse.controller');

class ViewPortMouseController extends MouseController {
    constructor(settings) {
       super(settings);
    }

    onMouseMove(event) {
        const pixelCoords = this.component.getPixelsCoordsFromPageCoords(event);
        this.component.getCellCoordsFromPixelCoords(pixelCoords);
    }
}

module.exports = ViewPortMouseController;