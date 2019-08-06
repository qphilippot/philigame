const MouseController = require('../controllers/mouse.controller');

class ViewPortMouseController extends MouseController {
    constructor(settings) {
       super(settings);
    }

    onMouseMove(event) {
        const pixelCoords = this.component.getPixelsCoordsFromPageCoords(event);
        const cellCoords = this.component.getCellCoordsFromPixelCoords(pixelCoords);
        const p = this.component.getNormalizedPosition(event);
        this.component.sendNotification('updateCoords', p);
    }
}

module.exports = ViewPortMouseController;