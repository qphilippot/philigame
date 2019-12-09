const Entity = require('../entity/entity.model');
const MouseController = require('./viewport.mouse.controller');
const Canvas = require('../canvas');

class ViewPort extends Entity {
    constructor(settings = {}) {
        super(settings);
        this.init_ViewPort(settings);
    }

    
    drawCoordinates() {
        const context = this.getContext();
        const { width, height } = this.getResolution();

        context.font = '1px serif';
        for (let i = 0; i < width; i++) {
            for (let j = 0; j < height; j++) {
                context.fillText(`(${i}, ${j})`, i, j);
            }    
        }
    }

    getResolution(layerName = 'main') {
        return this.layers[layerName].resolution;
    }

    getSize(layerName = 'main') {
        return this.layers[layerName].size;
    }

    getContext(layerName = 'main') {
        return this.layers[layerName].context;  
    }

    init_Controllers(settings) {
        this.controllers = {};
        this.init_MouseController(settings);
    }

    init_MouseController(settings = {}) {
        let Model = MouseController;

        if (typeof settings.MouseController === 'function') {
            Model = settings.MouseController;
        }

        this.setMouseController(new Model({
            component: this
        }));
    }

    setMouseController(handler) {
        this.controllers.mouse = handler
    }

    setupViewPortListeners(settings) {
        this.init_Controllers(settings);
        const mainLayer = this.layers.main.node;
       
        mainLayer.addEventListener('mousemove', (event) => {
            this.controllers.mouse.onMouseMove(event);
        });

        mainLayer.addEventListener('mousedown', (event) => {
           this.controllers.mouse.onMouseDown(event);
        });
    }

    addLayer(name) {
        const main = this.layers.main; 
        
        const layer = new Canvas({
            name: name,
            container: main.container,
            size: main.size,
            resolution: main.resolution
        });

        layer
            .disableEvent()
            .addClass('gd-viewport')
            .setBackground('none')
        ;

        this.layers[name] = layer;
    }

    clear(layer) {
        if (typeof layer === 'string') {
            this.layers[layer].clear();
        }

        else {
            Object.values(this.layers).forEach(
                layer => layer.clear()
            );
        }
    }
    
    init_ViewPort(settings = {}) {
        settings.name = 'main';
        const main = new Canvas(settings);
        main.addClass('gd-viewport');

        // .setContainer(
        //     document.getElementById(settings.container)
        // );
        
        this.layers = { main };
        this.addLayer('ui');

        this.setupViewPortListeners(settings);
    }

    setResolution(width, height) {
        Object.values(this.layers).forEach(
            layer => layer.setResolution(width, height)
        );
    }

    setSize(width, height, refreshRatio = true) {
        Object.values(this.layers).forEach(
            layer => layer.setSize(width, height, refreshRatio)
        );

        this.layers.main.container.style.width = width + 'px';   
    }

    getPixelsCoordsFromPageCoords(coords) {
        return this.layers.main.getPixelsCoordsFromPageCoords(coords);
    }

    bind(component) {
        component.subscribe(this);
    }

    getCellCoordsFromPixelCoords(coords) {
        const ratio  = this.layers.main.ratio;
        const x      = Math.floor(coords.x * ratio.x);
        const y      = Math.floor(coords.y * ratio.y);
        return {x, y};
    }

    getNormalizedPosition(coords) {
        return this.layers.main.getNormalizedPosition(coords);
    }
}

module.exports = ViewPort;