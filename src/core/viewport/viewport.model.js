const Entity = require('../entity/entity.model');
const MouseController = require('./viewport.mouse.controller');

class ViewPort extends Entity {
    constructor(settings = {}) {
        super(settings);
        this.ui.layout = document.createElement('canvas');

        this.initViewPort(settings);
    }

    getContext() {
        return this.ui.layout.context;
    }

    initControllers() {
        this.controllers = {};

        this.initMouseController();
    }

    initMouseController() {
        this.controllers.mouse = new MouseController({
            component: this
        });
    }

    setupViewPortListeners() {
        const layout = this.ui.layout;

        this.initControllers();
        layout.addEventListener('mousemove', (event) => {
            this.controllers.mouse.onMouseMove(event);
        });

        layout.addEventListener('mousedown', (event) => {
           this.controllers.mouse.onMouseDown(event);
        });
    }

    retrieveSize(settings) {
        if (typeof settings.size === 'undefined') {
            settings.size = {
                width: 0,
                height: 0
            }
        }

        else {
            // sanitize options
        }


        return settings.size;
    }


    retrieveResolution(settings) {
        if (typeof settings.resolution === 'undefined') {
            settings.resolution = {
                width: settings.size.width,
                height: settings.size.height
            }
        }

        else {
            // sanitize options
        }

        return settings.resolution;
    }

    initViewPort(settings) {
        const layout = this.ui.layout; 
        layout.classList.add('gd-viewport');
        layout.context = layout.getContext('2d');

        

        const data = this.data;
        data.size = {};
        data.resolution = {};
        data.ratio = {
            x: 1,
            y: 1
        };


        const size = this.retrieveSize(settings);
        const resolution = this.retrieveResolution(settings);

        // this.setPixelDensity(1);
        this.setSize(size.width, size.height, false);
        this.setResolution(resolution.width, resolution.height);

       
        
        // todo implements tests
        if (typeof settings.container !== 'string') {
            this.notifyError(new Error(`Invalid type for param 'container', a string was expected`));
        }

        const container = document.getElementById(settings.container);
        
        // todo implements tests
        if ((container instanceof Element) === false) {
            this.notifyError(new Error(`No Element found with id ${settings.container}`));
        }
        
    
        this.setupViewPortListeners();
        this.ui.container = container;
        container.appendChild(layout);
    }

    setSize(width, height, refreshRatio = true) {
        this.data.size.width = width;
        this.data.size.height = height;

        this.ui.layout.style.width = width + 'px';
        this.ui.layout.style.height = height + 'px';
        
        if (refreshRatio === true) {
            this.updateRatio();
        }
    }

    getSize() {
        return this.data.size;
    }

    getWidth() {
        return this.data.size.width;
    }

    getHeight() {
        return this.data.size.height;
    }

    getInnerWidth() {
        return this.data.resolution.width;
    }

    getInnerHeight() {
        return this.data.resolution.height;
    }

    getResolution() {
        return JSON.parse(JSON.stringify(this.data.resolution));
    }

    setResolution(width, height, refreshRatio = true) {
        this.ui.layout.width = width;
        this.ui.layout.height = height;

        this.data.resolution.width = width;
        this.data.resolution.height = height;


        if (refreshRatio === true) {
            this.updateRatio();
        }
    }

    updateRatio() {
        if (this.data.size.width === 0 || this.data.size.height === 0) {
            this.data.ratio.x = 1;
            this.data.ratio.y = 1;
        }

        else {
            this.data.ratio.x = this.data.resolution.width / this.data.size.width;
            this.data.ratio.y = this.data.resolution.height / this.data.size.height;
        }
    }

    getPixelsCoordsFromPageCoords(coords) {
        const x = coords.x - this.ui.layout.offsetLeft + window.scrollX;
        const y = coords.y - this.ui.layout.offsetTop + window.scrollY;
        return {x, y};
    }

    bind(component) {
        component.subscribe(this);
    }

    getCellCoordsFromPixelCoords(coords) {
        const ratio  = this.data.ratio;
        const x      = Math.floor(coords.x * ratio.x);
        const y      = Math.floor(coords.y * ratio.y);
        return {x, y};
    }

    getNormalizedPosition(coords) {
        const x = (coords.x - this.ui.layout.offsetLeft + window.scrollX) / this.data.size.width;
        const y = (coords.y - this.ui.layout.offsetTop + window.scrollY) / this.data.size.height;
        return {x, y};
    }
}

module.exports = ViewPort;