const Entity = require('../entity');
const DefaultSettings = require('./scene.settings');

class Scene extends Entity {
    constructor(settings = {}) {
        super(settings);
        this.init();
        this.setEnvironment(settings.environment);
        this.setCamera(settings.camera);
    }

    init() {
        this.entities = [];
        this.capacity = 0;
        this.nbGameElement = 0;
        this.controllers = {};
    }

    setEnvironment(environment = null) {
        this.environment = environment;
    }

    setCamera(camera = null) {
        if (camera === null) {
            camera = new Ca
        }

        this.camera = camera;
    }

    bindTo(viewport) {
        this.viewport = viewport;
        this.subscribeTo(
            viewport, 
            'mouse-move', 
            this.onMouseMove.bind(this)
        );
    }


    onMouseMove(notification) {
        console.log('scene-mouse-move', notification);
    }

    render(viewport) {
        if (typeof viewport === 'undefined') {
            viewport = this.viewport;
        }
        
        viewport.clear();
        
        const renderingData = this.camera.snapshot(this.environment);
        const context = viewport.getContext();
        const width =  viewport.getResolution().width;
        
        context.font = '20px';
            
        // data.x is a normalized coord into environment coord system.
        // we want to transform theses coordinates in 0..1 coordinates into viewport grid
        renderingData.forEach(data => {
            data.x = Math.round(data.x * width);
            data.y = Math.round(data.y * width);
            data.width = Math.round(data.width * width);
            data.height = Math.round(data.height * width);
           
            data.gameElement.render(
                context, 
                data.x, 
                data.y, 
                data.width, 
                data.height
            );
        });
    }

    unlink() {
        // @todo
        //this.unsubscribe()
    }

    add(gameElement, x = 0, y = 0, z = 0) {
        this.environment.add(gameElement, x, y, z);

        if (this.nbGameElement <= this.capacity) {
            this.entities[this.nbGameElement] = gameElement;
            this.nbGameElement++;
        }

        else {
            this.entities.push(gameElement);
            this.nbGameElement = this.entities.length;
            this.capacity = this.nbGameElement;
        }
    }
    
    increaseCapacity(delta = 0) {
        this.entities.length += Math.abs(delta);
    }

    move(x, y, z) {
        this.camera.move(x, y, z);
    }

    getEnvironment() {
        return this.environment;
    }

    static create() {
        return new Scene({ 
            camera: DefaultSettings.getCamera(),
            environment: DefaultSettings.getEnvironment()
        });
    }
}

module.exports =  Scene;