const Entity = require('../entity/entity.model')

class MouseController extends Entity {
    constructor(settings = {}) {
        super(settings);

        this.component = settings.component;
    }

    onMouseMove(event) {
        console.log('mouse move', event);
    }

    onLeftClick(event) {
        console.log('mouse left click', event);
    }

    onRightClick(event) {
        console.log('mouse right click', event);
    } 

    onMouseWheel(event) {
        console.log('mouse wheel', event);
    }

    onMouseDown(event) {
        event = event || window.event;
        let button = 0;
        
        if (typeof event.buttons === 'undefined') {
            button = event.which || event.button;
        }

        switch(button) {
            case MouseController.LEFT_CLICK:
                this.onLeftClick(event);
                break;
            case MouseController.RIGHT_CLICK:  
                this.onRightClick(event);
                break;
        }
    }


    static isLeftClick(event) {
        // https://stackoverflow.com/questions/3944122/detect-left-mouse-button-press
        event = event || window.event;
        if (typeof event.buttons !== 'undefined') {
            return event.buttons == 1;
        }

        const button = event.which || event.button;
        return button == 1;
    }

    static isRightClick(event) {
        event = event || window.event;
        if (typeof event.buttons !== 'undefined') {
            return event.buttons == 0;
        }

        const button = event.which || event.button;
        return button == 0;
    }
}

MouseController.LEFT_CLICK = 1;
MouseController.RIGHT_CLICK = 2;
module.exports = MouseController;