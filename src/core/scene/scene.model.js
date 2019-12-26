const Entity = require('../entity');

class Scene extends Entity {
    constructor(settings = {}) {
        super(settings);
        this.init();
        this.setEnvironment(settings.environment);
        this.setCamera(settings.camera);
    }

    init() {
        this.controllers = {};
    }

    setEnvironment(environment = null) {
        this.environment = environment;
    }

    setCamera(camera = null) {
        this.camera = camera;
    }

    bindTo(viewport) {
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
}

module.exports =  Scene;