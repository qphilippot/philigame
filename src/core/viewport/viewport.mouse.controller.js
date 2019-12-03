const MouseController = require('../controllers/mouse.controller');

class ViewPortMouseController extends MouseController {
    constructor(settings) {
       super(settings);
    }

    onMouseMove(event) {
        // not used in game engine, maybe should i remove notification system ?
        const pixelCoords = this.component.getPixelsCoordsFromPageCoords(event);
        const cellCoords = this.component.getCellCoordsFromPixelCoords(pixelCoords);
        const p = this.component.getNormalizedPosition(event);
        this.component.sendNotification('updateCoords', p);
    }
}

module.exports = ViewPortMouseController;