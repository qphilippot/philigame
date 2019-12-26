const MouseController = require('../controllers/mouse.controller');

class ViewPortMouseController extends MouseController {
    constructor(settings) {
       super(settings);
    }

    onMouseMove(event) {
        const normalizedCoords = this.component.getNormalizedPosition(event);
        this.component.notify('mouse-move', normalizedCoords);
    }
}

module.exports = ViewPortMouseController;